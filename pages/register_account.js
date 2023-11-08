import Image from 'next/image'
import SignUpForm from '@/components/SignupForm'

export default function Home() {
    return (
        <div className='flex w-screen h-screen bg-lunapurple'>
            <div className='flex-1 flex items-center h-full'>
                <div id="left-container" className='mx-auto'>
                    <h1 className="text-center text-3xl text-white tracking-wider">Willkommen bei Luna!</h1>
                    <img src="rocket.png" className='w-48 mx-auto my-8' alt="Rocket" />
                    <p className="text-center text-white tracking-wider">Lass uns gemeinsam nach den Sternen greifen!</p>
                </div>
            </div>
            <div className='flex-1 flex items-center h-full'>
                <div id="right-container" className='mx-auto w-full h-full flex flex-col pt-16 pb-48 items-center'>
                    <div id="nav-links" className='text-white text-sm mt-4 flex-grow'>
                        <ul className='flex space-x-6'>
                            <li className='hover:underline'><a href="#">Über Uns</a></li>
                            <li className='hover:underline'><a href="#">FAQs</a></li>
                            <li className='hover:underline'><a href="#">Kontakt</a></li>
                            <li className='hover:underline'><a href="#">Datensasdfasdchutz</a></li>
                            <li className='pl-5'><a href="#"><img src="logowhite2.svg" className='inline-block w-20' alt="logo"/></a></li>
                        </ul>
                    </div>
                    <SignUpForm/>
                </div>
            </div>
        </div >
    )
}