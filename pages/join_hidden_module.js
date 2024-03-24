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

                <div className='rounded-xl bg-white px-5 py-5'>
                    <h3>Nicht gelistetes Modul beitreten</h3>
                    <p className='text-lightgrey'>Um ein nicht gelistetes Module beizutreten, benötigst du von deinem Dozenten ein Anmeldecode und ein Passwort.</p>
                    <p className='text-lightgrey'>Trage diese unten bitte ein. Dein Dozent wird dein Antrag prüfen und dich zulassen.</p>
                    <div className='flex h-8 mt-4'>
                        <input className="border border-lightgrey rounded-xl pl-4 mr-6" type="text" placeholder='Modul ID' />
                        <input className="border border-lightgrey rounded-xl pl-4 mr-6" type="password" placeholder='Passwort' />
                    </div>
                    <div className='flex my-3 items-center'>
                        <input type="checkbox" className='mr-4' />
                        <p>Ich bin einverstanden dass ... </p>

                    </div>
                    <Button text="Beitreten" highlighted="false" type='submit' />

                </div>






            </main>
        </RootLayout >
    )
}

