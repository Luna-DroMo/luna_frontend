import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@/components/Buttons';
import { InputRow } from '@/components/FormElements';



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
                <p>Module Name: Testname</p>
                <p>Module ID: Test ID </p>
                <p>Fakultät: Test Fac</p>
                <input readOnly = {true}></input>
                <p>Startdatum: 10-10-1000</p>
                <p>Enddatum: 10-10-1</p>


                <h3 className='text-text-grey'>Trage bitte alle Informationen ein, um ein Modul anzulegen.</h3>
                <div className='h-8'></div>
                <InputRow readOnly={true} type="text" maintext="Module ID" subtitle="Universitäts-interne Identifikationsnummer. Z.B. CS101"  />
                <InputRow readOnly={true} type="text" maintext="Module Name" subtitle="Name des Moduls. Z.B. Einführung in die Datenanalyse"  />
                <InputRow readOnly={true} type="text" maintext="Fakultät" subtitle="Zuständige Fakultät des Moduls"  />

                <div className='h-8'></div>
                <InputRow readOnly={true} type="password" maintext="Passwort" subtitle="Das Passwort wird bei dem Beitreten des Moduls benötigt"/>
                <InputRow readOnly={true} type="password" maintext="Passwort wiederholen" subtitle=""  />

                <div className='h-8'></div>
                <InputRow readOnly={true} type="date" maintext="Startdatum" subtitle="Begin der Veranstaltung" />
                <InputRow readOnly={true} type="date" maintext="Enddatum" subtitle="End der Veranstaltung" />

                <div className="flex justify-evenly w-3/5 mt-24">
                    <button onClick={(e) => { router.reload() }} className="border border-lunapurple rounded-full w-44 h-10 px-4 text-lunapurple text-base leading-4 hover:border-lunagreen hover:bg-lunagreen">Noch ein Modul erstellen</button>
                    <Button text="zum Cockpit" highlighted="True" href="/cockpit"></Button>
                </div>
            </main>
        </RootLayout>
    )
}




