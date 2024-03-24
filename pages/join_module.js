import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Buttons';
import Person from '@/components/PersonTag';


export default function Main() {

    const router = useRouter();
    const data = router.query;

    const module = {
        id: data.id,
        name: data.name,
        code: data.code,
        startdate: "01-01-2025",
        enddate: "01-01-2026",
        staff: data.staff,
        faculty: data.faculty,
        password: "password"
    }

    return (
        <RootLayout>


            <main className="flex-row justify-between px-10 pt-10">
                <h3 className='mb-8'>Modul Beitreten</h3>

                <div className='rounded-xl bg-white px-5 py-5 mb-4'>
                    <div className='flex mb-4'>
                        <img src="asteroid.png" className='w-6 mr-4' />
                        <h3>{module.name}</h3>
                    </div>

                    <div className='flex  mb-3'>

                        <p className='text-lightgrey'>{module.code}</p>
                        <p className='mx-4 text-lightgrey'> | </p>
                        <p className='text-lightgrey'>{module.faculty}</p>
                        <p className='mx-4 text-lightgrey'> | </p>
                        <Person img={"user.png"} name={module.staff} />
                        <p className='mx-4 text-lightgrey'> | </p>
                        <p className='text-lightgrey'>{module.startdate} - {module.enddate}</p>
                    </div>
                    <div className='w-full inline-block bg-[#eeeeee] h-[1px] mb-3' />
                    <div className='w-4/6 mb-4 text-lightgrey'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra laoreet arcu, ullamcorper aliquam augue lobortis elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla aliquet accumsan libero, et porta erat. Phasellus tristique purus non sapien elementum interdum. Suspendisse tristique, lorem a dictum tincidunt, erat elit cursus sem, non rhoncus elit urna ac arcu. Cras lacinia egestas sapien quis dignissim.</p>
                    </div>


                </div>
                <div className='rounded-xl bg-white px-5 py-5'>
                    <div className='flex mb-3'>
                        <input type="checkbox" className='mr-4'/> 
                        <p>Ich bin einverstanden dass ... </p>
                    </div>
                    <div className='flex'>
                        <input className="border border-lightgrey rounded-xl pl-4 mr-6" type="password" placeholder='Passwort'></input>

                        <Button text="Beitreten" highlighted="false" type='submit' />
                    </div>
                </div>





            </main>
        </RootLayout >
    )
}


