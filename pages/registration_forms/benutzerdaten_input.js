import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';



export default function Main({ model }) {

    // NEED API TO RETURN A LIST [] OF OBJECTs {} OF THIS FORM. NEED THE CURRENT AND THE 2 NEAREST FORM NAMES AND STATUSES

    let forms1 = [{ "name": "Benutzerdaten", "status": 1, "item": 1 },
    { "name": "AIST", "status": 0, "item": 2 },
    { "name": "Kognitive Fähigkeiten", "status": 0, "item": 3 }];


    model = { "name": "Benutzerdaten" };


    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">


                <main className="flex-row justify-between px-10 pt-10">
                    <form>
                        <h1 className='tracking-wider text-xl mb-10'>{model.name}</h1>
                        <InputRow type="text" maintext="Vorname(n)" subtitle="" />
                        <InputRow type="text" maintext="Nachname" subtitle="" />
                        <InputRow type="text" maintext="Alias" subtitle="Wie sollen wir dich nennen?" />
                        <div className='h-12'></div>
                        <InputRow type="date" maintext="Geburtsdatum" subtitle=" " />
                        <div className='h-12'></div>
                        <InputRow type="number" maintext="Abiturnote" subtitle=" " />
                        <InputRow type="radio" maintext="Hauptsprache im Elternhaus" subtitle="Welche Sprache wird hauptsächlich zuhause gesprochen?" options={["Deutsch", "Englisch", "Sonstige Sprache"]} />
                        <InputRow type="radio" maintext="Finanzielle Unterstützung" subtitle="Bekommst du aktuell finanzielle Unterstützung von deinen Eltern?" options={["Ja", "Nein"]} />

                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview" />
                            <FormButton text="Überspringen" formAction="./AIST_input" />
                            <FormButton text="Weiter" highlighted="true" formAction="./AIST_input" />
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}
