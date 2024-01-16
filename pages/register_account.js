import Image from 'next/image'
import SignUpForm from '@/components/SignupForm'
import Navbar from '@/components/LandingNavBar'
export default function Home() {
    return (
        <div className='w-screen h-screen bg-lunapurple'>
            <Navbar/>
            <SignUpForm/>
        </div >
    )
}