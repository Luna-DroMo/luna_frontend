import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Buttons';


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
                <h1 className='text-lunapurple mb-8'>PLACEHOLDER PAGE</h1>
                <div className='flex'>
                    <h3 className='mr-4'>Module:</h3>
                    <h3>{module.name}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>ID (system ID): </h3>
                    <h3>{module.id}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>Module Code:</h3>
                    <h3>{module.code}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>Start Date:</h3>
                    <h3>{module.startdate}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>End Date:</h3>
                    <h3>{module.enddate}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>Lecturer:</h3>
                    <h3>{module.staff}</h3>
                </div>
                <div className='flex'>
                    <h3 className='mr-4'>Faculty:</h3>
                    <h3>{module.faculty}</h3>
                </div>
                <input type="password" placeholder='password'></input>
                <p className='mt-5'> </p>
                <Button text="Beitreten" highlighted="false" type='submit' />
            </main>
        </RootLayout>
    )
}


