import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/Buttons"
import Overview from "@/components/SetupDataModelOverview"
import { useState, useEffect, React } from "react"
import { useAuth } from "../components/AuthProvider"
import axios from "axios"

import Dropdown from "@/components/Dropdown"
import { LineChartWithDeviation, PieChart, ModuleDropoutRiskPlot, MultiLineChart } from "@/components/CustomCharts"
import { url } from "@/utils/data"

const processModuleResults = (moduleResults) => {
    const mean = moduleResults.map((result) => result.mean)
    const stdev = moduleResults.map((result) => result.stdev)
    return { mean, stdev }
}

export default function Main() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [userRole, setUserRole] = useState(null)
    const [isLoading, setIsLoading] = useState([true, true]) // extend for number of API calls
    const [modules, setModules] = useState([])
    const [selectedModule, setSelectedModule] = useState(null)
    const [moduleResult, setModuleResult] = useState({})
    const [meanLine, setMeanLine] = useState([])
    const [stDev, setStDev] = useState([])
    const [highRiskStudent, sethighRiskStudent] = useState([])

    const updateLoadingState = (index, newValue) => {
        setIsLoading((prevState) => {
            const newState = [...prevState] // Create a copy of the state array
            newState[index] = newValue // Update the specific index
            return newState // Return the new array
        })
    }


    useEffect(() => {
        const getUserRole = async () => {
            try {
                const response = await axios.get(`${url}/api/getUserType/${user.id}`)
                console.log("Fetched User Role:", response.data)
                setUserRole(response.data) // Assuming the API returns an object with `user_type`

                updateLoadingState(0, false)
            } catch (error) {
                console.log("Error fetching user role:", error)
                updateLoadingState(0, false)
            }
        }

        getUserRole()
    }, [user.id])

    useEffect(() => {
        const getStudentModules = async () => {
            try {
                const response = await axios.get(`${url}/api/${user.id}/modules`)
                setModules(response.data)

                console.log("Student Modules:", response.data)

                updateLoadingState(1, false)
                if (response.data.length > 0) {
                    setSelectedModule(response.data[0]) // Use response.data instead of modules
                }
            } catch (error) {
                console.log("Error fetching student modules:", error)
                updateLoadingState(1, false)
            }
        }

        const getLecturerModules = async () => {
            try {
                const response = await axios.get(`${url}/api/lecturer/${user.id}/modules`)
                setModules(response.data)
                console.log("Lecturer Modules:", response.data)
                updateLoadingState(1, false)
                if (response.data.length > 0) {
                    console.log("We are inside this loop")
                    setSelectedModule(response.data[0]) // Use response.data instead of modules
                }
            } catch (error) {
                console.log("Error fetching lecturer modules:", error)
                updateLoadingState(1, false)
            }
        }

        const fetchModules = async () => {
            console.log("Fetching modules for user role:", userRole)
            if (userRole == 1) {
                await getStudentModules()
            } else if (userRole == 2) {
                await getLecturerModules()
            }
        }

        if (userRole !== null) {
            fetchModules()
        }
    }, [userRole, user.id])

    console.log("Selected Module", selectedModule)

    useEffect(() => {
        const getModulesAndResults = async () => {
            if (selectedModule) {
                try {
                    if (userRole === 1) {
                        // Lecturer role, use the specific endpoint
                        const moduleResponse = await axios.get(
                            `${url}/modelling/${user.id}/module/${selectedModule.module_id}`
                        )
                        setModuleResult(moduleResponse.data)
                    } else {
                        // Default endpoint for other roles
                        const moduleResponse = await axios.get(
                            `${url}/modelling/${user.id}/module/${selectedModule.module_id}`
                        )
                        setModuleResult(moduleResponse.data)
                        sethighRiskStudent(setModuleResult.high_risk_students)
                    }

                    const { mean, stdev } = processModuleResults(moduleResult.weekly_results)
                    setMeanLine(mean)
                    setStDev(stdev)
                    updateLoadingState(2, false)
                } catch (error) {
                    console.log("Error->", error)
                }
            }
        }

        if (userRole !== null) {
            getModulesAndResults()
        }
    }, [user.id, selectedModule, userRole])

    const handleSelectModule = (moduleName) => {
        const selected = modules.find((module) => module.module_name === moduleName)
        setSelectedModule(selected)
    }


    if (isLoading.some((element) => element === true)) {

        return <RootLayout />
    }

    if (userRole === null) {
    }
    if (userRole === 1) {
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

        return (
            <RootLayout>
                <main className='flex-row justify-between px-10 pt-10 overflow-hidden'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='tracking-wider text-xl w-48'>Analysen</h1>
                        <div id='Dropdown-container' className=''>
                            <Dropdown
                                header={
                                    modules.length > 0 ? modules[0].module_name : "Select a Module"
                                }
                                dropdown_options={modules.map((module) => module.module_name)}
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
                                <MultiLineChart title={"Dein Feedback"} lines={[[1, 2, 3, 4], [3, 2, 3, 4], [4, 5, 5, 1]]} labels={["Inhalt", "Stress", "Verständis"]} />
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
    // Lecturers
    if (userRole === 2) {
        const mean_line = [
            54, 45, 42, 48, 58, 68, 65, 62, 41, 43, 78, 54, 32, 11, 33, 55, 77, 44, 33
        ]
        const st_dev = [10, 11, 8, 6, 14, 2, 13, 15, 6, 7, 4, 8, 10, 2, 11, 14, 32, 35, 25]
        // const students_at_risk = [
        //     {
        //         id: "12345",
        //         data: [54, 45, 66, 77, 82, 85, 90, 84, 73, 63, 78, 88, 85, 82, 80, 87, 88, 92, 95]
        //     }
        // ]
        return (
            <RootLayout>
                <main className='flex-row justify-between px-10 pt-10'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='tracking-wider text-xl w-48'>Analysen</h1>
                        <div id='Dropdown-container' className=''>
                            <Dropdown
                                header={
                                    modules.length > 0 ? modules[0].module_name : "Select a Module"
                                }
                                dropdown_options={modules.map((module) => module.module_name)}
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
                            durchschnittliche Risiko deiner Studenten dar, das Modul abzubrechen. In{" "}
                            <span className='text-lunared'>rot</span> werden Studierende angezeigt,
                            die ein erhöhtes Risiko zeigen.
                        </p>
                        <div className='relativ h-[250px] px-12 mt-8'>
                            <ModuleDropoutRiskPlot
                                title='Durschnittsrisiko das Modul abzubrechen'
                                line={meanLine}
                                deviation={stDev}

                                students_at_risk={highRiskStudent}

                            />
                        </div>
                    </div>
                    <h1 className="mt-44 text-center">Weitere Analysen kommen bald!</h1>
                </main>
            </RootLayout>
        )
    }
    // Course Admins
    if (userRole === 3) {
        return <RootLayout show_billboard={true}>Page for Admins</RootLayout>
    }
}
