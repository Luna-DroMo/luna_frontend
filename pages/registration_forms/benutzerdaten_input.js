import Image from 'next/image'
import RootLayout from '@/components/RootLayout';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { ErrorBanner } from '@/components/Errors';


export default function Main({ model }) {
    const { user, isAuthenticated , saveUser, clearUser } = useAuth();
    // NEED API TO RETURN A LIST [] OF OBJECTs {} OF THIS FORM. NEED THE CURRENT AND THE 2 NEAREST FORM NAMES AND STATUSES

    let forms1 = [{ "name": "Benutzerdaten", "status": 1, "item": 1 },
    { "name": "AIST", "status": 0, "item": 2 },
    { "name": "Kognitive Fähigkeiten", "status": 0, "item": 3 }];

    const router = useRouter();

    model = { "name": "Benutzerdaten" };

    const [firstname, setFirstname] = useState('') // firstname
    const [surname, setSurname] = useState('') // surname
    const [alias, setAlias] = useState('') // alias
    const [birthdate, setBirthdate] = useState('') // Birthday
    const [hsgrade, setHsgrade] = useState('') // Abitur Note
    const [language, setLanguage] = useState('') // language
    const [finsupport, setFinsupport] = useState('') // financial support
    const [error_message, setErrorMessage] = useState('')

    let data = {
        first_name: firstname,
        last_name: surname,
        nickname: alias,
        birth_date: birthdate,
        main_language: language,
        abitur_note: hsgrade,
        financial_support: finsupport,

    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("updating:", data)
        try {
          const response = await axios.patch(
            `http://52.5.114.46/api/update_student/${user.id}/`,
            data
          )
          
        router.push("../account_setup_overview")
        } catch (error) {
          console.log("error", error)
          setErrorMessage(error.message)
        }
      }

    return (
        <RootLayout show_main_links={false} >
            {
            /*
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            */}



                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl mb-10'>{model.name}</h1>
                        <InputRow type="text" maintext="Vorname(n)" subtitle="" value = {firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <InputRow type="text" maintext="Nachname" subtitle="" value = {surname} onChange={(e) => setSurname(e.target.value)}/>
                        <InputRow type="text" maintext="Alias" subtitle="Wie sollen wir dich nennen?" value = {alias} onChange={(e) => setAlias(e.target.value)}/>
                        <div className='h-12'></div>
                        <InputRow type="date" maintext="Geburtsdatum" subtitle=" " value = {birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
                        <div className='h-12'></div>
                        <InputRow type="number" maintext="Abiturnote" subtitle=" " value = {hsgrade} onChange={(e) => setHsgrade(e.target.value)}/>
                        <InputRow type="radio" maintext="Hauptsprache im Elternhaus" subtitle="Welche Sprache wird hauptsächlich zuhause gesprochen?" options={{"Deutsch":"DE", "Englisch":"EN", "Sonstige Sprache":"OTHER"}} value = {language} onChange={(e) => setLanguage(e.target.value)}/>
                        <InputRow type="radio" maintext="Finanzielle Unterstützung" subtitle="Bekommst du aktuell finanzielle Unterstützung von deinen Eltern?" options={{"Ja":1, "Nein":0}} value = {finsupport} onChange={(e) => setFinsupport(e.target.value)} />
                        { /* Error block */
                            error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
                        }
                        <div className="flex mt-24">
                            
                            <FormButton text="Registieren" highlighted="true"/>
                        </div>
                    </form>
                </main>
            
        </RootLayout>
    )
}
