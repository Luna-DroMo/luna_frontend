import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle as faCircleSolid, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { faCircle as faCircleReg } from "@fortawesome/free-regular-svg-icons"
import { ClassLogo } from "./small_components"
import React from "react"
import Link from "next/link"

export function StudentModuleTable({ modules = [] }) {
    if (modules.length > 0) {
        return (
            <div className='rounded-xl overflow-hidden  mt-4'>
                <div className='flex h-15 px-4 py-3 bg-white '>
                    <h3>Beigetretene Module</h3>
                    <div className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}>
                        <span className='text-base text-lunapurple'>
                            {modules.length} Modul{modules.length !== 1 ? "e" : ""} aktiv
                        </span>
                    </div>
                </div>
                <table className='table-auto w-full rounded-xl text-left'>
                    <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                        <tr className='text-left border-none'>
                            <th className=''> </th>
                            <th className=''>Modul ID</th>
                            <th className=''>Modul</th>
                            <th className=''>Umfragestatus</th>
                            <th className='text-center'>Nächste Umfrage</th>
                            <th className=''></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-b-lg'>
                        {modules.map((module, key) => (
                            <TableRowStudent key={key} module={module} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className='text-center'>
                <h3 className='text-center text-text-grey text-lg mt-10 tracking-wider'>
                    Du hast noch keinen Modulen beigetreten.
                </h3>
                <img src='satellite.png' className='w-24 m-auto mt-8' />
                <p className='mt-8 text-lg'>
                    Verfügbare Module findest du{" "}
                    <Link href='module_search' className='underline text-lunapurple'>
                        hier
                    </Link>
                </p>
            </div>
        )
    }
}
function TableRowStudent({ module }) {
    const nextsurveypublished = new Date(module.next_survey_date)
    console.log(nextsurveypublished)

    return (
        <tr className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'>
            <td className='text-[#4a4a4a] text-base tracking-wide flex justify-center'>
                
                <ClassLogo text={module.name} />
            
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide w-24'>{module.code}</td>
            <td className='text-[#4a4a4a] text-base tracking-wide max-w-72 overflow-hidden overflow-ellipsis whitespace-nowrap'>
                {module.name}
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide text-center w-48'>
                <StatusElement nextsurveyduedate={module.survey_end_date} />
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide text-center'>
                {formatDate(module.next_survey_date)}
            </td>
            {/*<td className='text-[#4a4a4a] text-base tracking-wide'>
                <a
                    href='#'
                    className='rounded-lg border py-0.5 px-2 text-lunapurple tracking-wider text-base border-lunapurple hover:bg-lunapurple hover:text-white'
                >
                    Verwalten
                </a>
    </td>*/}
        </tr>
    )
}

export function LecturerModuleTable({ modules = [] }) {
    if (modules.length > 0) {
        return (
            <div className='rounded-xl overflow-hidden  mt-4'>
                <div className='flex h-15 px-4 py-3 bg-white '>
                    <h3>Meine Module</h3>
                    <div className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}>
                        <span className='text-base text-lunapurple'>
                            {modules.length} Modul{modules.length !== 1 ? "e" : ""}
                        </span>
                    </div>
                </div>
                <table className='table-auto w-full rounded-xl text-left'>
                    <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                        <tr className='text-left border-none'>
                            <th className='w-24'> </th>
                            <th className=''>Modul ID</th>
                            <th className=''>Modul</th>
                            <th className=''>Umfragestatus</th>
                            <th className='text-center'>Nächste Umfrage</th>
                            <th className=''></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-b-lg'>
                        {modules.map((module, key) => (
                            <TableRowLec key={key} module={module} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className='text-center'>
                <h3 className='text-center text-text-grey text-lg mt-10 tracking-wider'>
                    Es sieht so aus, als wärst du der Owner von keinem Modul...
                </h3>
                <img src='satellite.png' className='w-24 m-auto mt-8' />
                <p className='mt-8 text-lg'>
                    Klicke{" "}
                    <Link href='createModule' className='underline text-lunapurple'>
                        hier
                    </Link>
                    , um eins zu erstellen!.
                </p>
            </div>
        )
    }
}

function TableRowLec({ module }) {
    const nextsurveypublished = new Date(module.nextsurveypublished)

    return (
        <tr className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'>
            <td className='text-[#4a4a4a] text-base tracking-wide flex justify-center'>
                
                    <ClassLogo text={module.name} />
                
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide w-24'>{module.code}</td>
            <td className='text-[#4a4a4a] text-base tracking-wide max-w-72 overflow-hidden overflow-ellipsis whitespace-nowrap'>
                {module.name}
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide text-center w-48'>
                <div className='flex items-center pl-5 py-0.5 uptodate rounded-lg'>
                    <p className='ml-3 inline text-left overflow-hidden overflow-ellipsis whitespace-nowrap'>
                        Aktuell
                    </p>
                </div>
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide text-center'>
                {formatDate(module.next_survey_date)}
            </td>
            {/*<td className='text-[#4a4a4a] text-base tracking-wide'>
                <a
                    href='#'
                    className='rounded-lg border py-0.5 px-2 text-lunapurple tracking-wider text-base border-lunapurple hover:bg-lunapurple hover:text-white'
                >
                    Verwalten
                </a>
    </td>*/}
        </tr>
    )
}

// Sets the text and the colour of the Survey Status
function StatusElement({ nextsurveyduedate }) {
    let bgColorClass
    let text
    let icon
    const currentDate = new Date()
    let dueDate = new Date(nextsurveyduedate)
    let days_between = dueDate - currentDate

    // Calculate the time difference in milliseconds
    const timeDifference = dueDate - currentDate

    // Calculate the number of days between the two dates
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) - 1

    if (nextsurveyduedate === null) {
        bgColorClass = "uptodate"
        text = "Aktuell"
        icon = faCircleSolid
    } else if (daysDifference >= 5) {
        bgColorClass = "uptodate"
        text = `Fällig in: ${daysDifference} Tagen`
        icon = faCircleReg
    } else if (daysDifference >= 3) {
        bgColorClass = "pending"
        text = `Fällig in: ${daysDifference} Tagen`
        icon = faCircleReg
    } else if (daysDifference >= 0) {
        bgColorClass = "urgent"
        text = `Fällig in: ${daysDifference} Tag${daysDifference === 1 ? "" : "en"}`
        icon = faCircleReg
    } else {
        bgColorClass = "urgent"
        text = "Verpasst"
        icon = faXmarkCircle
    }

    // Ensure you use backticks as the quotes
    return (
        <a
            href='#'
            className={`flex items-center pl-5 py-0.5 ${bgColorClass} rounded-lg cursor-default	`}
        >
            <FontAwesomeIcon icon={icon} className='inline-block w-3' />
            <p className='ml-3 inline text-left overflow-hidden overflow-ellipsis whitespace-nowrap'>
                {text}
            </p>
        </a>
    )
}

export function formatDate(dateString) {
    let date = new Date(dateString)
    let year = date.getFullYear()
    let month = (date.getMonth() + 1).toString().padStart(2, "0") // Ensure two digits
    let day = date.getDate().toString().padStart(2, "0") // Ensure two digits
    return `${day}/${month}/${year}`
}
