import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FormButton, SmallButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import React from "react"
import Link from "next/link"
import {useState, useEffect} from "react"
import {faC} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import Person from "@/components/PersonTag"
import axios from "axios"
import {useRouter} from "next/router"
import {useAuth} from "@/components/AuthProvider"
import {url} from "@/utils/data"

export default function Main() {
    const [userId, setUserId] = useState(null)
    const router = useRouter()
    const [modules, setModules] = useState([])
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [isExpanded, setIsExpanded] = useState(Array(4).fill(false))


    useEffect(() => {
        const makeAPICalls = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(`${url}/api/lecturer/${user.id}/modules`)
                //const userInfo = await axios.get(`${url}/api/${user.id}/info`)
                setModules(response.data)
                //setUserInfo(userInfo.data)
                setIsLoading(false)
            } catch (error) {
                console.log("error during API call", error)
            }
        }

        makeAPICalls()
        
    }, [])

    const updateLoadingState = (index, newValue) => {
        setIsLoading((prevState) => {
            const newState = [...prevState] // Create a copy of the state array
            newState[index] = newValue // Update the specific index
            return newState // Return the new array
        })
    }



    const toggleValueAtIndex = (index) => {
        setIsExpanded((prevState) => {
            // Create a copy of the previous state
            const newState = [...prevState]

            // Update the specific index with its inverse value
            newState[index] = !newState[index]

            // Return the updated state
            return newState
        })
    }

    if (user.user_type !== 2){
        router.push("./cockpit")
    }

    console.log(modules)

    if (isLoading){
        return <RootLayout />
    }
    console.log(modules)
    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h3>Module Verwalten</h3>
                <p className='text-lightgrey'>
                   
                </p>

                <h5 className='text-md mt-8'>Deine Module</h5>

                <div className='rounded-xl overflow-hidden  mt-4'>
                    <div className='flex h-15 px-4 py-3 bg-white '>
                        <h3>Deine Module</h3>
                        <div
                            className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}
                        >
                            <span className='text-base text-lunapurple'>
                                {modules.length} Modul
                                {modules.length !== 1 ? "e" : ""}
                            </span>
                        </div>
                    </div>
                    <table className='table-auto w-full rounded-xl text-left'>
                        <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                            <tr className='text-left border-none'>
                                <th className='pl-10'>Modul</th>

                                <th>Fakultät</th>
                                <th>Semester</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody className='rounded-b-lg'>
                            {modules.map((module, index) => (
                                <TableRow
                                    user={user}
                                    key={index}
                                    id={module.id}
                                    code={module.code}
                                    name={module.name}
                                    semester={module.semester}
                                    status={1}
                                    faculty={"Methods Center"}
                                    staff={{img: "user.png", name: "Max Musterman"}}
                                    isExpanded={isExpanded[index]}
                                    toggleFunc={(e) => toggleValueAtIndex(index)}
                                    startDate={module.start_date}
                                    endDate={module.end_date}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

            </main>
        </RootLayout>
    )
}

function TableRow({
    user,
    id,
    code,
    name,
    semester,
    status,
    faculty,
    staff,
    isExpanded,
    toggleFunc,
    startDate,
    endDate
}) {

    const [module, setModule] = useState()

    useEffect(() => {
        const makeAPICalls = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(`${url}/api/module/${id}`)
                //const userInfo = await axios.get(`${url}/api/${user.id}/info`)
                setModule(response.data)
                //setUserInfo(userInfo.data)
            } catch (error) {
                console.log("error during API call", error)
            }
        }

        makeAPICalls()
        
    }, [])

    console.log(module)
    const handleModuleDeletion = async () => {
        try {
            const response = await axios.post(`${url}/api/${user.id}/module/${id}/delete`)
            window.location.reload();
        } catch (e) {
            console.log("Error", e)
        }
    }
    console.log(startDate)
    return (
        <>
            <tr
                href='#'
                className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'
            >
                <td className='pl-10'>
                    <p className='text-[#4a4a4a] text-base tracking-wide h-4'>{name}</p>
                    <p className='text-base tracking-wide text-lightgrey'>{code}</p>
                </td>
                <td className='text-[#4a4a4a] text-base tracking-wide max-w-12 overflow-hidden'>
                    {faculty}
                </td>
                <td className='text-[#4a4a4a] text-base tracking-wide'>{semester} </td>
                <td>
                    {" "}
                    <Status status={checkDateStatus(startDate, endDate)} />
                </td>
                <td>
                    <p className={`text-text-grey`} onClick={(e) => toggleFunc(1)}>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`flex group-hover:text-lunapurple  ${
                                isExpanded ? "fa-rotate-270" : "fa-rotate-90"
                            }  inline-block w-2 mx-1.5`}
                        />
                    </p>
                </td>
            </tr>
            {isExpanded ? (
                <tr>
                    <td colSpan='6' className='px-10 py-4 bg-[#EEEDF1]'>
                        <div>
                            <p>Start: {module.start_date}</p>
                            <p>Ende: {module.end_date}</p>
                        </div>
                        <div className="mt-2">
                            <p>Anzahl Studierende: {module.count_students}</p>
                        </div>
                        <div className="mt-2">
                            <p>Module Passwort: {module.password}</p>
                        </div>
                        <p className='mt-4'>Modul Löschen</p>
                        <div>
                            <button
                                onClick={() => handleModuleDeletion()}
                                className='text-base text-lightgrey hover:text-lunared underline cursor-pointer'
                            >
                                {`Ich möchte ${name} `}<span className="underline">endgültig</span> löschen
                            </button>
                        </div>
                        <p className='mt-4'>Diese seite wird noch ausgebaut. Künftig werden sich alle Verwaltungseigenschaften hier befinden</p>
                    </td>
                </tr>
            ) : null}
        </>
    )
}

function Status({status}) {
    const status_dictionary = {
        1: {status: "Aktiv", bgCol: "bg-[#E7FDD0]", txtCol: "text-[#3E7900]"},
        2: {status: "Beendet", bgCol: "bg-[#EEEDF1]", txtCol: "text-text-grey"},
        3: {status: "Anstehend", bgCol: "bg-[#FCF2CF]", txtCol: "text-[#7D5E00]"}
    }

    const stat = status_dictionary[status]

    return (
        <div className=''>
            <a
                className={`text-base border-none rounded-full ${stat.bgCol} ${stat.txtCol} px-4 py-0.5`}
            >
                {stat.status}
            </a>
        </div>
    )
}

const checkDateStatus = (startDateStr, endDateStr) => {
    const today = new Date()
    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)

    if (today < startDate) {
        // status 3 = To begin
        return 3
    } else if (today > endDate) {
        // status 2 = Ended
        return 2
    } else {
        // status 1 = active/current
        return 1
    }
}
//

// <div className='border rounded-md border-[#dddddd] inline-block'>
// <img src={img} className='w-4 ml-1 float-left' />
// <span className={'text-base text-[#4a4a4a] px-4'}>{name}</span>
// </div>
