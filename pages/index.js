import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/LandingNavBar'

/*


         <Navbar/>
*/


export default function Home() {

    return (
        <div className='w-screen h-screen bg-lunapurple'>

            <Navbar theme="light"/>
            <div className='flex items-center'>
                <div className='flex-1 flex items-center'>
                    <div id="left-container" className='mx-auto pt-48'>
                        <h1 className="text-center text-3xl text-white tracking-wider">Willkommen bei Luna!</h1>
                        <img src="rocket.png" className='w-48 mx-auto my-8' alt="Rocket" />
                        <p className="text-center text-white tracking-wider">Lass uns gemeinsam nach den Sternen greifen!</p>
                    </div>
                </div>
                <div className='flex-1 flex items-center h-full'>
                    <div id="right-container" className='mx-auto w-full h-full flex flex-col pt-48 items-center'>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </div >




    )
}