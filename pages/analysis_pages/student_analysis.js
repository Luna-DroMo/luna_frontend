import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/Buttons"
import Overview from "@/components/SetupDataModelOverview"
import { useState, useEffect, React } from "react"
import { useAuth } from "../../components/AuthProvider"
import axios from "axios"

import Dropdown from "@/components/Dropdown"
import { PieChart, Student_Feature_Chart } from "@/components/CustomCharts"
import { url } from "@/utils/data"

const processModuleResults = (moduleResults) => {
    const mean = moduleResults.map((result) => result.mean)
    const stdev = moduleResults.map((result) => result.stdev)
    return { mean, stdev }
}

export default function Analysis_Student() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [userRole, setUserRole] = useState(null)
    const [isLoading, setIsLoading] = useState([true, true]) // extend for number of API calls
    const [modules, setModules] = useState([])
    const [selectedModule, setSelectedModule] = useState(null)
    const [moduleResult, setModuleResult] = useState({})
    const [meanLine, setMeanLine] = useState([])
    const [stDev, setStDev] = useState([])

    const updateLoadingState = (index, newValue) => {
        setIsLoading(prevState => {
            const newState = [...prevState]; // Create a copy of the state array
            newState[index] = newValue; // Update the specific index
            return newState; // Return the new array
        });
    };

    // Query available modules to select from
    useEffect(() => {
        const getAvailableModules = async () => {
            try {
                const response = await axios.get(`${url}/api/student/${user.id}/modules`)
                setModules(response.data)
                updateLoadingState(0, false)
                // set first module to the selected one
                if (response.data.length > 0) {
                    setSelectedModule(response.data[0]) // Use response.data instead of modules
                }
            } catch (error) {
                console.log("Error->", error)
            }
        }
        getAvailableModules()
    }, [user.id]) // Run this effect when user.id changes


    // Get results for the selected Module
    useEffect(() => {
        const getModulesAndResults = async () => {
            if (selectedModule) {
                try {
                    const moduleResponse = await axios.get(
                        `${url}/modelling/${user.id}/module/${selectedModule.id}`
                    )
                    //const moduleResult = moduleResponse.data
                    //const { mean, stdev } = processModuleResults(moduleResult.weekly_results)
                    console.log("Model Results: ", moduleResponse.data)
                    setModuleResult(moduleResponse.data)
                    updateLoadingState(1, false)
                } catch (error) {
                    console.log("Error->", error)
                }
            }
        }

        getModulesAndResults()
    }, [user.id, selectedModule])


    function handleSelectModule(moduleName) {
        const selected = modules.find((module) => module.name === moduleName)
        setSelectedModule(selected)
        updateLoadingState(1, true)
    }


    console.log(isLoading)
    if (isLoading.some(element => element === true)) {
        return <RootLayout />
    }

    // Placeholder data
    const turn_in_percent = 0.93
    const class_turn_in_percent = 0.85

    const pie_data = {
        datasets: [
            {
                label: "Meine Quote",
                data: [turn_in_percent, 1 - turn_in_percent],
                borderRadius: 8,
                backgroundColor: ["rgba(82,16,220,.9)", "rgba(0,0,0,0)"],
                borderColor: ["transparent"]
            },
            {
                label: "Klassendurchschnitt",
                data: [class_turn_in_percent, 1 - class_turn_in_percent],
                borderRadius: 8,
                backgroundColor: ["rgba(217,217,217,1)", "rgba(0,0,0,0)"],
                borderColor: ["transparent"]
            }
        ]
    }

    console.log("Modelling values: ", moduleResult['stress'])
    console.log("test", !moduleResult.error)
    console.log("sent to chart: ", moduleResult.content, moduleResult.stress, moduleResult.understanding)
    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10 overflow-hidden'>
                <div className='flex flex-row justify-between'>
                    <h1 className='tracking-wider text-xl w-48'>Analysen</h1>
                    <h3>{selectedModule.name}</h3>
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

                <div id='dropoutChartContainer' className='mt-8'>
                    <h1 className='font-bold'>Befragungen</h1>
                    <p className='text-text-grey'>
                        Hier sind einige Ergebnisse aus deinen Befragungen. Wir nutzen psychometrische Modelle, um bestimmte, sonst nicht messbare Eigenschaften zu erfassen. Dein Dozent wird diese Eigenschaften auf Klassenebene sehen (deine Ergebnisse bleiben anonym), also je mehr Umfragen du einreichst, desto mehr Feedback bekommt dein Dozent!
                    </p>
                    <div className='flex flex-row justify-between mt-4 h-72'> {/* HEIGHT NEEDS TO BE SPECIFIED HERE */}
                        <div className='relativ w-2/3'>
                            {!moduleResult.error ?
                                <Student_Feature_Chart title={"Deine Eigenschaften"} lines={[moduleResult.content, moduleResult.stress, moduleResult.understanding]} labels={["Inhalt", "Stress", "Verständis"]} />
                                : <div className="border text-center items-middle  h-full">
                                    <p>Keine Daten. Bitte erst eine Befragung ausfüllen</p>
                                </div>}
                        </div>
                        <div className="w-1/3">
                            <div className="relative w-full h-2/3">
                                <PieChart data={pie_data} />
                            </div>
                            <p className="text-lunapurple text-center text-xl pt-4">{turn_in_percent * 100}%</p>
                        </div>
                    </div>
                    <h1 className="mt-44 text-center">Weitere Analysen kommen bald!</h1>
                </div>
            </main>
        </RootLayout>
    )
}
