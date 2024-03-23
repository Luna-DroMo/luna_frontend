import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { faC } from '@fortawesome/free-solid-svg-icons';


export default function Main() {


    const modules_open = [
        { code: 'QDS-FO1', name: 'Mathematical Introduction', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Erin Ritchie" } },
        { code: 'QDS-FO2', name: 'Advanced Statistics', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Mustermann" } },
        { code: 'QDS-FO3', name: 'Programming I', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 2, staff: { img: "user.png", name: "Dennis Perrett" } },
        { code: 'QDS-FO4', name: 'Programming II', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 3, staff: { img: "user.png", name: "Dennis Perrett" } },
        { code: 'QDS-FO5', name: 'Experimental and Quasi Experimental Design', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 4, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-FO6', name: 'Ethics Seminar', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 4, staff: { img: "user.png", name: "Dennis Perrett" } },
        { code: 'QDS-FO7', name: 'Bayesian Modeling', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 3, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-FO8', name: 'Research Seminar', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-PS1', name: 'Foundations in Psychometrics', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Augustin Kelava" } },
        { code: 'QDS-PS2', name: 'Psychometrics', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Augustin Kelava" } },
        { code: 'QDS-PS3', name: 'Item Response Theory', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-PS4', name: 'Mathematical Models in Psychology', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-PS5', name: 'Longitudinal Data Analysis', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Augustin Kelava" } },
        { code: 'QDS-PS6', name: 'Multilevel Modeling', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-PS7', name: 'Structured Equation Modeling', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-PS8', name: 'Latent Variable Modeling', faculty: 'Methods Center', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-EC2', name: 'Applied Econometrics', faculty: 'Economics and Social Sciences', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-EC3', name: 'Advanced Times-series Analysis', faculty: 'Economics and Social Sciences', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Augustin Kelava" } },
        { code: 'QDS-EC4', name: 'Advanced Microeconomics', faculty: 'Economics and Social Sciences', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-EC5', name: 'Machine Learning in Econometrics', faculty: 'Economics and Social Sciences', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-ML2', name: 'Machine Learning I', faculty: 'Computer Science', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Augustin Kelava" } },
        { code: 'QDS-ML3', name: 'Data Literacy', faculty: 'Computer Science', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },
        { code: 'QDS-ML4', name: 'Deep Learning', faculty: 'Computer Science', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-ML5', name: 'Statistical Machine Learning', faculty: 'Computer Science', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Max Musterman" } },
        { code: 'QDS-ML6', name: 'Probabilistic Machine Learning', faculty: 'Computer Science', semester: 'Summer Semester 2024', status: 1, staff: { img: "user.png", name: "Cagatay Ilmaz" } },

    ]

    const [searchTerms, setSearchTerms] = useState("")

    let modules = modules_open.filter(function (item) {
        return (item.name.toLowerCase().includes(searchTerms)) || (item.code.toLowerCase().includes(searchTerms)) || (item.faculty.toLowerCase().includes(searchTerms)) || (item.staff.name.toLowerCase().includes(searchTerms)) ;
    })

    return (
        <RootLayout>


            <main className="flex-row justify-between px-10 pt-10">
                <h3>Modul Beitreten</h3>
                <p className='text-lightgrey'>Available modules are determined by your enrolled course / degree. To join a module outside of your standard faculty, <Link href="#" className='text-lunapurple'>click here</Link></p>
                <h5 className='text-md mt-8'>Modul Finden</h5>
                <input className='rounded-xl pl-4 h-12 w-full my-2' placeholder='Ex. MATH101' onChange={(e) => setSearchTerms(e.target.value.toLowerCase())} />

                <div className='rounded-xl overflow-hidden  mt-4'>
                    <div className='flex h-15 px-4 py-3 bg-white ' >
                        <h3>Verfügbare Module</h3>
                        <div className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}>
                            <span className='text-base text-lunapurple'>{modules.length} Modul{modules.length !== 1 ? ('e') : ("")}</span>
                        </div>

                    </div>
                    <table className='table-auto w-full rounded-xl text-left'>

                        <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                            <tr className='text-left border-none'>

                                <th></th>
                                <th>Modul</th>
                                <th>Fakultät</th>
                                <th>Semester</th>
                                <th>Status</th>
                                <th>Dozent</th>
                                <th className='text-center'>Beitreten</th>
                            </tr>
                        </thead>
                        <tbody className='rounded-b-lg'>
                            {modules.map((module, index) => (
                                <TableRow key={index}
                                    code={module.code}
                                    name={module.name}
                                    semester={module.semester}
                                    status={module.status}
                                    faculty={module.faculty}
                                    staff={module.staff} />

                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </RootLayout>
    )
}


function TableRow({ code, name, semester, status, faculty, staff }) {
    return (
        <tr href="#" className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'>
            <td className="">
                <img className="m-auto mx-4 w-6" src="asteroid.png" />
            </td>
            <td className=''>
                <p className='text-[#4a4a4a] text-base tracking-wide h-4'>{name}</p>
                <p className='text-base tracking-wide text-lightgrey'>{code}</p>
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide max-w-12 overflow-hidden'>{faculty}</td>
            <td className='text-[#4a4a4a] text-base tracking-wide'>{semester} </td>
            <td > <Status status={status} /></td>
            <td> <Person img={staff.img} name={staff.name} /></td>
            <td> <Link href={{pathname: "join_module", query: {code: code, name: name, semester: semester, faculty: faculty, staff: staff.name}}} className='' title="Modul Beitreten"> <img src="join.png" className='w-4 mx-auto' /></Link></td>

        </tr>
    )
}

function Status({ status }) {

    const status_dictionary = {
        1: { status: "Open", bgCol: "bg-[#E7FDD0]", txtCol: "text-[#3E7900]" },
        2: { status: "Locked", bgCol: "bg-[#FFF4ED]", txtCol: "text-[#B32500]" },
        3: { status: "Requires Admittance", bgCol: "bg-[#FCF2CF]", txtCol: "text-[#7D5E00]" },
        4: { status: "Closed", bgCol: "bg-[#FFEDFC]", txtCol: "text-[#BF4324]" },
    }

    const stat = status_dictionary[status]

    return (
        <div className=''>
            <a className={`text-base border-none rounded-full ${stat.bgCol} ${stat.txtCol} px-4 py-0.5`}>{stat.status}</a>
        </div>
    )
}
//
function Person({ img, name }) {
    return (
        <div className='flex'>

            <div className='border rounded-md border-[#dddddd] inline-block flex items-center px-0 hover:bg-white hover:shadow-sm hover:shadow-lunapurple'>

                <img src={img} className='w-4 ml-1 float-left shrink fill-lunapurple' />
                <span className={'text-base text-[#4a4a4a] px-4 shrink'}>{name}</span>

            </div>

        </div>
    )
}

// <div className='border rounded-md border-[#dddddd] inline-block'>
// <img src={img} className='w-4 ml-1 float-left' />
// <span className={'text-base text-[#4a4a4a] px-4'}>{name}</span>
// </div>