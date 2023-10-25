import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FormButton} from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';



export default function Main({ model }) {
    let forms1 = [
        { "name": "Kognitive Fähigkeiten", "status": 2, "item": 3 },
        { "name": "Internale-Externale Kontrollüberzeugung", "status": 1, "item": 4 },
        { "name": "Fachwissen Mathematik", "status": 0, "item": 5 },
    ];

    model = { "name": "Internale-Externale-Kontrollüberzeugung" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
            <main className="flex-row justify-between px-10 pt-10">
                <form action=""> 
                <h1 className='tracking-wider text-xl'>{model.name}</h1>
                <p className='mb-10'>This section covers stuff about the Internal and External Control questionnaire</p>
                <InputRow type="number" maintext="Internale Kontrolle Score" subtitle="Subtitle" />
                <InputRow type="number" maintext="Externale Kontrolle Score" subtitle="Subtitle" />
      


                <div className="flex justify-evenly w-3/5 mt-24">
                <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview"/>
                <FormButton text="Überspringen" formAction="./maths_input"/>
                <FormButton text="Weiter" highlighted="true" formAction="./maths_input"/>
                </div>
                </form>
            </main>
            </div>
        </InputLayout>
    )
}

