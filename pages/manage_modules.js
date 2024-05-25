import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import { FormButton, SmallButton } from "@/components/Buttons"
import { FormInput, InputRow } from "@/components/FormElements"
import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { faC } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Person from "@/components/PersonTag"
import axios from "axios"
import { useRouter } from "next/router"
import { useAuth } from "@/components/AuthProvider"
import { url } from "@/utils/data"

export default function Main() {
    const [userId, setUserId] = useState(null)
    const router = useRouter()
    const [joinedModules, setjoinedModules] = useState([])
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [isExpanded, setIsExpanded] = useState(Array(4).fill(false))

    const toggleExpansion = (index) => {
        setIsExpanded((prevState) => {
            const newState = [...prevState]
            newState[index] = !newState[index]
            return newState
        })
    }

    const updateLoadingState = (index, newValue) => {
        setIsLoading(prevState => {
            const newState = [...prevState]; // Create a copy of the state array
            newState[index] = newValue; // Update the specific index
            return newState; // Return the new array
        });
    };

    const toggleValueAtIndex = (index) => {
        setIsExpanded(prevState => {
            // Create a copy of the previous state
            const newState = [...prevState];

            // Update the specific index with its inverse value
            newState[index] = !newState[index];

            // Return the updated state
            return newState;
        });
    };

    // Modules which the student has already joined
    useEffect(() => {
        const getJoinedModules = async (e) => {
            try {
                const response = await axios.get(`${url}/api/student/${user.id}/modules`)
                setjoinedModules(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log("error while getting joined modules", error)
            }
        }
        getJoinedModules()
    }, [router.query.id])

    const [searchTerms, setSearchTerms] = useState("")

    // function that sorts modules based on status
    const sortedCourses = joinedModules.sort((a, b) => {
        const statusA = checkDateStatus(a.start_date, a.end_date);
        const statusB = checkDateStatus(b.start_date, b.end_date);
        return statusA - statusB;
    });

    let filteredModules = joinedModules.filter(function (item) {
        return (
            item.name.toLowerCase().includes(searchTerms) ||
            item.code.toLowerCase().includes(searchTerms)
            // item.faculty.toLowerCase().includes(searchTerms) // Currently doesn't exist in API
            //item.staff.name.toLowerCase().includes(searchTerms)
        )
    })

    console.log(joinedModules)


 

    console.log("sorted", sortedCourses)
    if (isLoading) {
        return <RootLayout />
    }

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h3>Module Verwalten</h3>
                <p className='text-lightgrey'>
                    Willkommen auf deiner Modulverwaltungsseite. Hier findest du alle Infos zu den Kursen, für die du dich angemeldet hast.
                    Nutze die Optionen, um deine Einstellungen zu aktualisieren und deine Module effizient zu verwalten.
                </p>

                <h5 className='text-md mt-8'>Deine Module</h5>
                <input
                    className='rounded-xl pl-4 h-12 w-full my-2'
                    placeholder='Ex. MATH101'
                    onChange={(e) => setSearchTerms(e.target.value.toLowerCase())}
                />

                <div className='rounded-xl overflow-hidden  mt-4'>
                    <div className='flex h-15 px-4 py-3 bg-white '>
                        <h3>Verfügbare Module</h3>
                        <div
                            className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}
                        >
                            <span className='text-base text-lunapurple'>
                                {filteredModules.length} Modul
                                {filteredModules.length !== 1 ? "e" : ""}
                            </span>
                        </div>
                    </div>
                    <table className='table-auto w-full rounded-xl text-left'>
                        <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                            <tr className='text-left border-none'>


                                <th className="pl-10">Modul</th>

                                <th>Fakultät</th>
                                <th>Semester</th>
                                <th>Status</th>
                                <th>Dozent</th>
                            </tr>
                        </thead>
                        <tbody className='rounded-b-lg'>
                            {filteredModules.map((module, index) => (
                                <TableRow
                                    key={index}
                                    id={module.id}
                                    code={module.code}
                                    name={module.name}
                                    semester={module.semester}
                                    status={1}
                                    faculty={"Methods Center"}
                                    staff={{ img: "user.png", name: "Max Musterman" }}
                                    joined={joinedModules.some((obj) => obj.id === module.id)}
                                    isExpanded={isExpanded[index]}
                                    toggleFunc={(e) => toggleValueAtIndex(index)}
                                    startDate={module.start_date}
                                    endDate={module.end_date}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-10">
                    <h3 className="mb-5">Allgemeine Infos</h3>
                    <p>Kontakt zu den Dozenten</p>
                    <p className='text-lightgrey mb-5'>Bei Fragen oder Unterstützung zu deinen Modulen kontaktiere bitte die jeweiligen Dozenten über ihre Uni-E-Mails oder während ihrer Sprechzeiten.</p>
                    <p>Zeitpläne und Fristen</p>
                    <p className='text-lightgrey'>Stell sicher, dass du die Modulzeiträume und wichtigen Fristen für Aufgaben, Projekte und Prüfungen im Blick behältst. Im zu Beginn jedes Moduls bereitgestellten Lehrplan findest du detaillierte Zeitpläne.</p>

                </div>
            </main>
        </RootLayout>
    )
}

function TableRow({ id, code, name, semester, status, faculty, staff, joined, isExpanded, toggleFunc, startDate, endDate }) {
    return (
        <>
            <tr
                href='#'
                className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'
            >


                <td className="pl-10">
                    <p className='text-[#4a4a4a] text-base tracking-wide h-4'>{name}</p>
                    <p className='text-base tracking-wide text-lightgrey'>{code}</p>
                </td>
                <td className='text-[#4a4a4a] text-base tracking-wide max-w-12 overflow-hidden'>
                    {faculty}
                </td>
                <td className='text-[#4a4a4a] text-base tracking-wide'>{semester} </td>
                <td>
                    {" "}
                    <Status status={checkDateStatus(startDate,endDate)} />
                </td>
                <td>
                    {" "}
                    <Person img={staff.img} name={staff.name} />
                </td>
                <td>
                    <p
                        className={`text-text-grey`}
                        onClick={(e) => toggleFunc(1)}
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`flex group-hover:text-lunapurple  ${isExpanded ? 'fa-rotate-270' : 'fa-rotate-90'}  inline-block w-2 mx-1.5`}
                        />
                    </p>
                </td>
            </tr>
            {isExpanded ?
                <tr>
                    <td colSpan="6" className="px-10 py-4 bg-[#EEEDF1]">
                        <div>
                            <p>Start: {startDate}</p>
                            <p>Ende: {endDate}</p>
                        </div>
                        <p>Anonymität</p>
                        <div className="flex">
                            <p className="text-base pr-5 text-lightgrey">Ich möchte anonym bleiben</p>
                            <input type="checkbox" />
                        </div>
                        <p className="mt-4">Modul Verlassen / Abbrechen</p>
                        <div className="">
                            <a className="text-base text-lightgrey hover:text-lunared underline cursor-pointer">{`Ich möchte ${name} Modul verlassen.`}</a>
                        </div>
                    </td>
                </tr>
                : null
            }
        </>
    )
}

function Status({ status }) {
    const status_dictionary = {
        1: { status: "Aktiv", bgCol: "bg-[#E7FDD0]", txtCol: "text-[#3E7900]" },
        2: { status: "Beendet", bgCol: "bg-[#EEEDF1]", txtCol: "text-text-grey" },
        3: { status: "Anstehend",bgCol: "bg-[#FCF2CF]",txtCol: "text-[#7D5E00]" }
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
    const today = new Date();
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

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
};
//

// <div className='border rounded-md border-[#dddddd] inline-block'>
// <img src={img} className='w-4 ml-1 float-left' />
// <span className={'text-base text-[#4a4a4a] px-4'}>{name}</span>
// </div>
