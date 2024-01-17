import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';
import { useState } from 'react'
import { hasNullValue } from '@/utils/utils';
import axios from 'axios';



export default function Main() {
    const [moduleID, setModuleID] = useState("")
    const [moduleName, setModuleName] = useState("")
    const [faculty, setFaculty] = useState("")
    const [modulePassword, setModulePassword] = useState("")
    const [modulePassword_val, setModulePassword_val] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [error_message, setErrorMessage] = useState('')


    const data = {
        module_id: moduleID,
        name: moduleName,
        faculty: faculty,
        password: modulePassword,
        start_date: startDate,
        end_date: endDate
    }

    const handleModuleCreation = async (e) => {
        e.preventDefault()
        console.log("Writing:", data)

        if (hasNullValue(data)) {
            setErrorMessage("Missing values") 
        } else {
            if (modulePassword===modulePassword_val){
                try {
                    const response = await axios.post(
                        `http://localhost:8000/api/createModule`,
                        data
                    )

                    router.push("./cockpit")
                } catch (error) {
                    console.log("error", error)
                    setErrorMessage(error.message)
                }
            } else {
                setErrorMessage("Passwords do not match")
            }
        }
    }

    return (
        <RootLayout>

            <main className="flex-row justify-between px-10 pt-10">
                <form onSubmit={handleModuleCreation}>
                    <h1 className='text-2xl'>Modul Erstellen</h1>
                    <h3 className='text-text-grey'>Trage bitte alle Informationen ein, um ein Modul anzulegen.</h3>
                    <div className='h-8'></div>
                    <InputRow type="text" maintext="Module ID" subtitle="Universitäts-interne Identifikationsnummer. Z.B. CS101" onChange={(e) => {setModuleID(e.target.value)}}/>
                    <InputRow type="text" maintext="Module Name" subtitle="Name des Moduls. Z.B. Einführung in die Datenanalyse" onChange={(e) => {setModuleName(e.target.value)}}/>
                    <InputRow type="text" maintext="Fakultät" subtitle="Zuständige Fakultät des Moduls" onChange={(e) => {setFaculty(e.target.value)}}/>

                    <div className='h-8'></div>
                    <InputRow type="password" maintext="Passwort" subtitle="Das Passwort wird bei dem Beitreten des Moduls benötigt" onChange={(e) => {setModulePassword(e.target.value)}} />
                    <InputRow type="password" maintext="Passwort wiederholen" subtitle="" onChange={(e) => {setModulePassword_val(e.target.value)}}/>

                    <div className='h-8'></div>
                    <InputRow type="date" maintext="Startdatum" subtitle="Begin der Veranstaltung" onChange={(e) => {setStartDate(e.target.value)}} />
                    <InputRow type="date" maintext="Enddatum" subtitle="End der Veranstaltung" onChange={(e) => {setEndDate(e.target.value)}}/>

                    <div className='h-8'></div>
                    <InputRow type="dropdown" options={["Vollständig", "Reduziert"]} maintext="Befragungsart" subtitle="Die Befragungsart kann nach der Erstellung nicht mehr geändert werden!" />
                    <div className='w-100 h-15 py-2 px-5 bg-[#FFF0CB] rounded'>
                        <p className='text-text-grey'>[NEEDS TO BE DYNAMIC] Achtung! Analysen und Prognosen eingeschränkt. Für vollständige Analysen, bitte “Standard” wählen.</p>
                    </div>
                    <div className='h-12' />
                    <div className='flex-grow'>
                        <p >Eigene Frage festlegen</p>
                        <p className="subtitle text-text-grey">Du kannst bis zu 2 eigene Fragen zur Befragung hinzufügen. Die Antworten werden dir angezeigt aber nicht in unseren Analysen verwendet. </p>
                    </div>
                    <hr className='mt-5 border-lightgrey' />
                    <div>
                        <p>NEEDS TO BE IMPLEMENTED</p>
                    </div>

                    <div className='h-8'></div>
                    <InputRow type="checkbox" options={["MO", "DI", "MI", "DO", "FR", "SA", "SO"]} maintext="Bitte die Tage wählen, an denen die Befragungen stattfinden sollen. " subtitle="Jede einzelne Befragung ist für 3 Tagen aktiv." />
                    <InputRow type="date" maintext="Ausnahme Tage [NEEDS PROPER IMPLEMENTATION]" subtitle="Falls die Befragung an manchen Tagen nicht stattfinden soll, können diese hier festgelegt werden." />

                    <div className='h-8'></div>
                    <InputRow type="checkbox" options={["Privat"]} maintext="Modul als Privat markieren" subtitle="Private Module werden nicht in der Suche nach Modulen erscheinen. Ein Passwort wird weiterhin benötigt." />
                    <div className="flex justify-evenly w-3/5 mt-24">
                        <FormButton text="Abbrechen" formAction="/" />
                        <FormButton text="Modul Erstellen" highlighted="true" formAction="/" type='submit' />
                    </div>
                </form>
            </main>
        </RootLayout>
    )
}




