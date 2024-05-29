import Image from "next/image"
import { StudentModuleTable } from "@/components/Table.js"
import AlertSection from "@/components/Alerts.js"
import RootLayout from "@/components/RootLayout.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useAuth } from "../../components/AuthProvider.js"
import { useRouter } from "next/router"
import { SignupReminderBanner } from "@/components/Banners.js"
import axios from "axios"
import { useEffect } from "react"
import Link from "next/link.js"
import { url } from "@/utils/data.js"
import { Button, SmallButton } from "@/components/Buttons.js"

export default function Cockpit_student() {
    const router = useRouter()
    const { user, isAuthenticated, saveUser, clearUser } = useAuth()
    const [modules, setModules] = useState([])
    const [backgroundStatus, setBackgroundStatus] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [userInfo, setUserInfo] = useState()
    
    useEffect(() => {
        const makeAPICalls = async (e) => {
            try {
                const response = await axios.get(`${url}/api/student/${user.id}/modules`)
                const backgroundStatusResponse = await axios.get(`${url}/api/${user.id}/background`)
                const userInfo = await axios.get(`${url}/api/${user.id}/info`)
                setModules(response.data)
                setBackgroundStatus(backgroundStatusResponse.data)
                setUserInfo(userInfo.data)
                setIsLoading(false)
            } catch (error) {
                console.log("error during login", error)
            }
        }
        makeAPICalls()
    }, [])


    const filterByEndDate = (array) => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    
        return array.filter(obj => {
            const endDate = new Date(obj['end_date']).toISOString().split('T')[0]; // Convert end_date to 'YYYY-MM-DD' format
            return endDate >= today;
        });
    };

   
   let activeModules = filterByEndDate(modules)
   console.log(userInfo)

    // Ensure data is called first
    if (isLoading) {
        return <RootLayout show_billboard={true} />
    }

    return (
        <RootLayout show_billboard={true}>
            <main className='flex-row justify-between px-10 pt-10'>
                {backgroundStatus?.personal_info === "completed" ? null : <SignupReminderBanner />}

                <div className='flex items-center'>
                    <img
                        src='alien.png'
                        className='ml-2 w-10 mr-4 rounded-full bg-[#cccccc] border-2 border-lunapurple'
                    />
                    <h1 className='tracking-wider text-xl'>
                        Hey {userInfo.nickname.length > 0 ? userInfo.nickname : userInfo.first_name}, willkommen bei lyra!
                    </h1>
                </div>

                <AlertSection />
                <div className='mt-8 flex space-x-2 mb-12'>
                    <div className='flex-1 items-center rounded-xl p-2 bg-lightpurple pl-6'>
                        <div className='flex items-center'>
                            <div className='metric my-1 bg-lunapurple w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4'>
                                {activeModules.length}
                            </div>
                            <div className='metric-text tracking-wider '>
                                <p>Modulen beigetreten</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 items-center rounded-xl p-2 bg-lightgreen pl-6'>
                        <div className='flex items-center'>
                            <div className='metric my-1 bg-green w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4'>
                                15%
                            </div>
                            <div className='metric-text tracking-wider '>
                                <p>Rückmeldequote</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex-1 relative items-center rounded-xl p-2 pl-6 bg-lunapurple bg-cover bg-center'
                        style={{ backgroundImage: "url('highlightbg.png')" }}

                    >
                        <div className='flex items-center justify-center h-full'>
                            <div className='tracking-wider metric-text z-10 text-white text-center'>
                                <p className="text-base">Hast du schon unsere Analysen gesehen?</p>
                                <Link href={`#`}>
                                    <button className='border border-lunagreen bg-lunagreen rounded-lg w-44 h-6 px-4 text-white text-base leading-4 hover:border-lunagreen hover:bg-lunagreen hover:text-lunapurple '>
                                    Entdecken
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full items-end'>
                    <h5 className='tracking-wider items-center flex-grow'>Meine Module</h5>
                    <a href='manage_modules' className='flex-none text-lunapurple text-base pb-0.5'>
                        Module verwalten
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className='flex group-hover:text-lunapurple inline-block w-2 mx-1.5'
                        />
                    </a>
                </div>

                <Link
                    href={{ pathname: "module_search", query: { id: user.id } }}
                    className='cursor-pointer flex border border-lightpurple rounded-full my-5 s-50 py-3 pl-5 hover:border-lunapurple z-1'
                >
                    <div className='inline-block w-3 h-3 relative items-center z-10 my-1'>
                        <div className='absolute bg-lunapurple w-full h-0.5 top-1/2 left-0 transform -translate-y-1/2 rounded-full z-10'></div>
                        <div className='absolute bg-lunapurple w-0.5 h-full top-0 left-1/2 transform -translate-x-1/2 rounded-full z-10'></div>
                    </div>

                    <h4 className='ml-5 text-lunapurple tracking-wider text-base z-10'>
                        Modul beitreten
                    </h4>
                </Link>

                <StudentModuleTable modules={activeModules} />
            </main>
        </RootLayout>
    )
}
