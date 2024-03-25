import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/LandingNavBar'

/*


         <Navbar/>
*/


export default function Home() {

    return (
        <div className='w-screen min-h-screen bg-pagebg'>
            <div className='px-48 py-12'>
                <Navbar theme="dark" />
                <div className='flex space-x-12 items-center'>
                    <div className='flex-1 items-centerspace-x-12'>
                        <div id="left-container" className='mx-auto pt-32'>
                            <h1 className=" text-4xl text-lightgrey tracking-wider">Get real time <span className='text-lunapurple'>Feedback</span>, </h1>
                            <h1 className=" text-4xl text-lightgrey tracking-wider"><span className='text-lunapurple'>increase</span> student retention</h1>
                            <h1 className=" text-4xl text-lightgrey tracking-wider">and reach new heights with <span className='text-lunapurple'>Luna!</span> </h1>
                            <p className="text-lightgrey tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan, purus in sodales tincidunt, lorem eros fermentum nisl, id tempor nulla leo ac ex. Nam vitae elit eu ante condimentum tincidunt vitae eu mauris.</p>
                            <LoginForm />
                        </div>
                    </div>
                    <div className='flex-1 flex items-center h-full'>
                        <div id="right-container" className='mx-auto w-full h-full flex flex-col pt-12 items-center'>

                            <img src="landingimg.jpg" className='h-96 w-96 rounded-full'/>
                        </div>
                    </div>

                </div>

            </div>
            <div className='h-32 bg-lunapurple w-screen'>

            </div>

            <div className='h-screen bg-pagebg w-screen px-48 py-12'>

                <h1 className='text-xl'>Get Advanced Analytics</h1>
                <div className='bg-white rounded-xl'>
                <img src="analysis1.png" className='m-auto w-4/6' />
                </div>
            </div>

        </div >




    )
}