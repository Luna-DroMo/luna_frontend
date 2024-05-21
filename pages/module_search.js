import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import React from "react"
import Link from "next/link"
import {useState, useEffect} from "react"
import {faC} from "@fortawesome/free-solid-svg-icons"
import Person from "@/components/PersonTag"
import axios from "axios"
import {useRouter} from "next/router"
import {useAuth} from "@/components/AuthProvider"
import {url} from "@/utils/data"

export default function Main() {
    const [modules, setModules] = useState([])
    const [userId, setUserId] = useState(null)
    const router = useRouter()
    const [joinedModules, setjoinedModules] = useState([])
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()

    // Modules which the student has already joined
    useEffect(() => {
        const getJoinedModules = async (e) => {
            try {
                const response = await axios.get(`${url}/api/student/${user.id}/modules`)
                setjoinedModules(response.data)
            } catch (error) {
                console.log("error while getting joined modules", error)
            }
        }
        getJoinedModules()
    }, [router.query.id])

    // Modules that are available
    useEffect(() => {
        const getModules = async () => {
            try {
                // Check if the id is available
                if (router.query.id) {
                    const response = await axios.get(
                        `${url}/api/${router.query.id}/university/modules`
                    )

                    setModules(response.data)
                }
            } catch (error) {
                console.log("error during fetching modules", error)
            }
        }

        getModules()
    }, [router.query.id])

    console.log("UserID: ", user.id)
    console.log("Open", modules)
    console.log("Joined", joinedModules)

    const [searchTerms, setSearchTerms] = useState("")

    let filteredModules = modules.filter(function (item) {
        return (
            item.name.toLowerCase().includes(searchTerms) ||
            item.code.toLowerCase().includes(searchTerms)
            //item.faculty.toLowerCase().includes(searchTerms) ||
            //item.staff.name.toLowerCase().includes(searchTerms)
        )
    })

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h3>Modul Beitreten</h3>
                <p className='text-lightgrey'>
                    Available modules are determined by your enrolled course / degree. To join a
                    module outside of your standard faculty,{" "}
                    <Link href='join_hidden_module' className='text-lunapurple'>
                        click here
                    </Link>
                </p>
                <h5 className='text-md mt-8'>Modul Finden</h5>
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
                                <th></th>
                                <th className='text-center'>Beitreten</th>
                                <th>Modul</th>

                                <th>Fakultät</th>
                                <th>Semester</th>
                                <th>Status</th>
                                <th>Dozent</th>
                            </tr>
                        </thead>
                        <tbody className='rounded-b-lg'>
                            {modules.map((module) => (
                                <TableRow
                                    key={module.id}
                                    id={module.id}
                                    code={module.code}
                                    name={module.name}
                                    semester={module.semester}
                                    status={1}
                                    faculty={"Methods Center"}
                                    staff={{img: "user.png", name: "Max Musterman"}}
                                    joined={joinedModules.some((obj) => obj.id === module.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </RootLayout>
    )
}

function TableRow({id, code, name, semester, status, faculty, staff, joined}) {
    return (
        <tr
            href='#'
            className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'
        >
            <td className=''>
                <img className='m-auto mx-4 w-6' src='asteroid.png' />
            </td>
            <td>
                {!joined && (
                    <Link
                        href={{
                            pathname: "join_module",
                            query: {
                                id: id
                            }
                        }}
                        className=''
                        title='Modul Beitreten'
                    >
                        <img src='join.png' className='w-5 mx-auto' />
                    </Link>
                )}
                {joined && (
                    <Link
                        href={{
                            pathname: "join_module",
                            query: {
                                id: id
                            }
                        }}
                        className=''
                        title='Modul Verwalten'
                    >
                        <img src='view.png' className='w-5 mx-auto' />
                    </Link>
                )}
            </td>
            <td className=''>
                <p className='text-[#4a4a4a] text-base tracking-wide h-4'>{name}</p>
                <p className='text-base tracking-wide text-lightgrey'>{code}</p>
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide max-w-12 overflow-hidden'>
                {faculty}
            </td>
            <td className='text-[#4a4a4a] text-base tracking-wide'>{semester} </td>
            <td>
                {" "}
                <Status status={1} />
            </td>
            <td>
                {" "}
                <Person img={staff.img} name={staff.name} />
            </td>
        </tr>
    )
}

function Status({status}) {
    const status_dictionary = {
        1: {status: "Open", bgCol: "bg-[#E7FDD0]", txtCol: "text-[#3E7900]"},
        2: {status: "Locked", bgCol: "bg-[#FFF4ED]", txtCol: "text-[#B32500]"},
        3: {
            status: "Requires Admittance",
            bgCol: "bg-[#FCF2CF]",
            txtCol: "text-[#7D5E00]"
        },
        4: {status: "Closed", bgCol: "bg-[#FFEDFC]", txtCol: "text-[#BF4324]"}
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
//

// <div className='border rounded-md border-[#dddddd] inline-block'>
// <img src={img} className='w-4 ml-1 float-left' />
// <span className={'text-base text-[#4a4a4a] px-4'}>{name}</span>
// </div>
