import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/LandingNavBar'
import { useAuth } from '@/components/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/*


         <Navbar/>
*/


export default function Home() {

    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter();

    return (
        <div className='w-screen min-h-screen bg-pagebg'>
            <div className='px-48 py-12'>
                <Navbar theme="dark" />
                <div className='flex space-x-12 items-center'>
                    <div className='flex-1 items-center space-x-12'>
                        <div id="left-container" className='mx-auto pt-32'>
                            <h1 className=" text-4xl text-lightgrey tracking-wider">Get real time <span className='text-lunapurple'>feedback</span>, </h1>
                            <h1 className=" text-4xl text-lightgrey tracking-wider"><span className='text-lunapurple'>prevent</span>  and <span className='text-lunapurple'>predict</span> student dropout and reach new heights with <span className='text-lunapurple'>Luna!</span> </h1>
                            <p className="text-lightgrey tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan, purus in sodales tincidunt, lorem eros fermentum nisl, id tempor nulla leo ac ex. Nam vitae elit eu ante condimentum tincidunt vitae eu mauris.</p>
                            {/* Your content */}
                            {!isAuthenticated && <LoginForm />}
                            {isAuthenticated && (
                                <div className='mt-4 w-full rounded'>
                                    <div className='flex w-full space-x-4'>
                                        <a
                                            href="cockpit"
                                            className='mt-6 w-52 h-12 text-black bg-lunapurple px-12 pb-2 pt-3 rounded-lg text-white hover:bg-lunagreen text-center align-middle'
                                        >
                                            Zum Cockpit
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className='flex-1 flex items-center h-full'>
                        <div id="right-container" className='mx-auto w-full h-full flex flex-col pt-12 items-center'>

                            <img src="landingimg.jpg" className='h-96 w-96 rounded-full object-cover' />
                        </div>
                    </div>

                </div>

            </div>
            
            <div className='h-32 bg-pagebg w-screen flex items-center text-center justify-items-center px-48'>
            
                <div className='flex-1'>
                    <img src="uni_tuebingen_logo.png" className='m-auto w-40 h-18' />
                </div>
                <div className='flex-1'>
                    <img src="ministry.png" className='m-auto w-40 h-18' />
                </div>


            </div>

            <div className='h-screen bg-pagebg w-screen px-48 py-12'>


                <div className='px-12 py-12'>

                    <div className='flex space-x-12'>
                        <div className='flex-1 items-center '>
                            <h1 className='text-xl'>Get Advanced Analytics</h1>
                            <p className='text-justify mt-4'>Maecenas sodales elementum dui at consectetur. Nulla tempus tincidunt est, eu auctor nulla cursus ac. Sed sed scelerisque massa. Nam viverra mauris in imperdiet condimentum.</p>
                            <p className='text-justify mt-4'> Proin non nunc fermentum nisi cursus hendrerit. Nullam euismod purus in vehicula pharetra. Nunc semper commodo fermentum. Morbi ornare diam metus, in ornare metus blandit vitae. Maecenas in est sit amet lacus laoreet ullamcorper vel vitae leo. Curabitur ac sapien et lorem porta eleifend. Ut libero lacus, semper ultricies sem blandit, efficitur ornare lectus. Sed bibendum, lorem at mattis faucibus, lacus velit accumsan felis, pharetra dignissim risus metus vitae felis. Vestibulum nec magna ex.</p>
                        </div>
                        <div className='flex-1 flex items-center h-full'>
                            <div className='bg-white rounded-xl p-2'>
                                <img src="analysis1.png" className='m-auto w-full' />
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div >




    )
}