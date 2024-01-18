import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@/components/Buttons';



/// THIS PAGE NEEDS SOME PROTECTIONS SO THAT IT CAN ONLY BE SEEN VIA LINK AND NOT URL DIRECTLY

export default function Main() {

    const router = useRouter()
    const [val, setVal] = useState({})

    let j = {};
    useEffect(() => {
        if (!router.isReady) return;
        if (router.query.module) {
            j = JSON.parse(router.query.module);
            setVal(j) // Alerts 'Someone'
        }
    }, [router.isReady]);


    return (
        <RootLayout>

            <main className="flex-row justify-between px-10 pt-10">
                <h1 className='tracking-wider text-xl text-lunapurple mb-8'>Modul Erstellt!</h1>
                {typeof val !== 'undefined' &&
                    <>
                        <p>Module Name: {val["name"]}</p>
                        <p>Module ID: {val["module_id"]}</p>
                        <p>Fakultät: {val["faculty"]}</p>
                        <p>Startdatum: {val["start_date"]}</p>
                        <p>Enddatum: {val["end_date"]}</p>
                    </>
                }
            <Button text="noch ein Module erstellen" highlighted="False" href="/createModule"></Button>
            <Button text="zum Cockpit" highlighted="True" href="/cockpit"></Button>
            </main>
        </RootLayout>
    )
}




