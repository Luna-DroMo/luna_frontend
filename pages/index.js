import Image from "next/image"
import LoginForm from "@/components/LoginForm"
import Navbar from "@/components/LandingNavBar"
import {useAuth} from "@/components/AuthProvider"
import {useState} from "react"
import {useEffect} from "react"
import {useRouter} from "next/navigation"
import LoadingAnimation from "@/components/LoadingAnimation"

/*


         <Navbar/>
*/

export default function Home() {
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    
    //if (isLoading){
    //    return (<LoadingAnimation/>)
    //}
    return (
        <div className='w-screen min-h-screen bg-pagebg'>
            <div className='px-48 py-12'>
                <Navbar theme='dark' />
                <div className='flex space-x-12 items-center'>
                    <div className='flex-1 items-center space-x-12'>
                        <div id='left-container' className='mx-auto pt-32'>
                            <h1 className=' text-4xl text-lightgrey tracking-wider'>
                            Erhalte Echtzeit-<span className='text-lunapurple'>Feedback</span>,{" "}
                            </h1>
                            <h1 className=' text-4xl text-lightgrey tracking-wider'>
                                <span className='text-lunapurple'>verhindere</span> und sage den Studienabbruch {" "}
                                <span className='text-lunapurple'>voraus</span> {" "}
                                und erreiche neue Höhen mit{" "}
                                <span className='text-lunapurple'>Luna!</span>{" "}
                            </h1>

                            {/* Your content */}
                            {(!isAuthenticated || isLoading) &&  <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />}
                            
                            {(isAuthenticated && !isLoading) &&
                                <div className='mt-4 w-full rounded'>
                                    <div className='flex w-full space-x-4'>
                                        <a
                                            href='cockpit'
                                            className='mt-6 w-52 h-12 text-black bg-lunapurple px-12 pb-2 pt-3 rounded-lg text-white hover:bg-lunagreen text-center align-middle'
                                        >
                                            Zum Cockpit
                                        </a>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='flex-1 flex items-center h-full'>
                        <div
                            id='right-container'
                            className='mx-auto w-full h-full flex flex-col pt-12 items-center justify-between'
                        >
                            <img
                                src='banner2.webp'
                                className='h-96 w-96 rounded-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-32 bg-pagebg w-screen flex items-center text-center justify-items-center px-48'>
                <div className='flex-1'>
                    <img src='uni_tuebingen_logo.png' className='m-auto w-40 h-18' />
                </div>
                <div className='flex-1'>
                    <img src='ministry.png' className='m-auto w-40 h-18' />
                </div>
            </div>
        </div>
    )
}
