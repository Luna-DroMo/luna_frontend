import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/Buttons"
import Overview from "@/components/SetupDataModelOverview"
import { useState, useEffect, React } from "react"
import { useAuth } from "../../components/AuthProvider"
import axios from "axios"
import { useRouter } from "next/navigation"
import Dropdown from "@/components/Dropdown"
import { LineChartWithDeviation, PieChart, ModuleDropoutRiskPlot, MultiLineChart } from "@/components/CustomCharts"
import { url } from "@/utils/data"

const processModuleResults = (moduleResults) => {
    const mean = moduleResults.map((result) => result.mean)
    const stdev = moduleResults.map((result) => result.stdev)
    return { mean, stdev }
}

export default function Analysis_Lecturer() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [userRole, setUserRole] = useState(null)
    const [isLoading, setIsLoading] = useState([true, true]) // extend for number of API calls
    const [modules, setModules] = useState([])
    const [selectedModule, setSelectedModule] = useState(null)
    const [moduleResult, setModuleResult] = useState({})
    const [meanLine, setMeanLine] = useState([])
    const [stDev, setStDev] = useState([])
    const [reloadFlag, setReloadFlag] = useState(false)
    const [totalStats, setTotalStats] = useState()


    const updateLoadingState = (index, newValue) => {
        setIsLoading(prevState => {
            const newState = [...prevState]; // Create a copy of the state array
            newState[index] = newValue; // Update the specific index
            return newState; // Return the new array
        });
    };

    useEffect(() => {


        const getModules = async () => {
            try {
                const response = await axios.get(`${url}/api/lecturer/${user.id}/modules`)
                setModules(response.data)
                updateLoadingState(0, false)
                if (response.data.length > 0) {
                    setSelectedModule(response.data[0]) // Use response.data instead of modules
                }
            } catch (error) {
                console.log("Error->", error)
            }
        }
        getModules()
    }, [user.id]) // Run this effect when user.id changes

    useEffect(() => {
        const getModulesAndResults = async () => {
            if (selectedModule) {
                try {
                    const moduleResponse = await axios.get(
                        `${url}/modelling/module/${selectedModule.id}`
                    )
                    const totalResponse = await axios.get(
                        `${url}/modelling/overview`
                    )
                    const moduleResult = moduleResponse.data
                    const { mean, stdev } = processModuleResults(moduleResult.weekly_results)
                    console.log(moduleResult)
                    setMeanLine(mean)
                    setStDev(stdev)


                    const totalMean = totalResponse.data.mean_smoothed_output
                    const totalStd = totalResponse.data.std_smoothed_output
                    console.log("tots: ", totalMean, totalStd)
                    console.log("meanline: ", mean)
                    console.log("Adjusted: ", mean.map(value => (value - (totalMean)) / (totalStd) ))

                    console.log(totalResponse.data)
                    
                    if (totalStd !== 0 ){
                        setMeanLine(mean.map(value => (value - (totalMean)) / (totalStd ) ))
                        setStDev(stdev.map(val => val / totalStd))
                    }
                } catch (error) {
                    console.log("Error->", error)
                }

                
            }
            updateLoadingState(1, false)


        }


        getModulesAndResults()
    }, [user.id, selectedModule, reloadFlag])

    function handleSelectModule(moduleName) {
        const selected = modules.find((module) => module.name === moduleName)
        updateLoadingState(1, true)
        if (selectedModule !== selected) {
            setSelectedModule(selected)
        } else {
            // Just toggles in order to rerun getModulesAndResults useEffect
            setReloadFlag(!reloadFlag)
        }
    }


    if (isLoading.some(element => element === true)) {
        return <RootLayout />
    }

    if (modules.length === 0) {

        return <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <p>Keine Module</p>
            </main>
        </RootLayout>
    }



    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <div className='flex flex-row justify-between'>
                    <h1 className='tracking-wider text-xl w-48'>Analysen</h1>
                    <div id='Dropdown-container' className=''>
                        <Dropdown
                            header={
                                selectedModule.name
                            }
                            dropdown_options={modules.map((module) => module.name)}
                            onSelect={handleSelectModule}
                        />
                    </div>
                </div>

                {/*<div className='flex flex-row justify-between mt-4'>
                        <a href='' className='text-lunapurple text-base'>
                            Daten Herunterladen
                        </a>
                        <a href='' className='text-lunapurple text-base'>
                            Vollständigen Bericht Herunterladen
                        </a>
                            </div>*/}

                <div id='dropoutChartContainer' className='h-[850px] mt-8'>
                    <h1>Durchschnittsrisiko das Modul abzubrechen</h1>
                    <p>
                        Die <span className='text-lunapurple'>blaue</span> Linie stellt das
                        durchschnittliche Risiko deiner Studierende dar, das Modul abzubrechen. In{" "}
                        <span className='text-lunared'>rot</span> werden Studierende angezeigt,
                        die ein erhöhtes Risiko zeigen.
                    </p>
                    <div className='flex flex-row justify-between mt-4 h-96'> {/* HEIGHT NEEDS TO BE SPECIFIED HERE */}
                        {/*<div className='relativ w-2/3'>*/}
                        <div className='relativ w-full'>
                            {meanLine.length === 0 ? <h1 className="text-center">Leider noch keine Ergebnisse für {selectedModule.name}. Sobald es Ergebnisse gibt, werden sie hier angezeigt. </h1> :
                                <ModuleDropoutRiskPlot
                                    title='Durschnittsrisiko das Modul abzubrechen'
                                    line={meanLine}
                                    deviation={stDev}
                                // students_at_risk={students_at_risk}
                                />
                            }
                        </div>
                    </div>
                </div>
                <h1 className="mt-44 text-center">Weitere Analysen kommen bald!</h1>
            </main>
        </RootLayout>
    )

}
