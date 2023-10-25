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
    { "name": "AIST", "status": 2, "item": 2 },
    { "name": "Kognitive Fähigkeiten", "status": 1, "item": 3 },
    { "name": "Internale-Externale Kontrollüberzeugung", "status": 0, "item": 4 }];

    model = { "name": "Kognitive Fähigkeiten (IQ)" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
            <main className="flex-row justify-between px-10 pt-10">
                <form action=""> 
                <h1 className='tracking-wider text-xl'>{model.name}</h1>
                <p className='mb-10'>This section covers stuff about the IQ questionnaire</p>
                <InputRow type="number" maintext="IQ Score" subtitle="Subtitle" />
                
      


                <div className="flex justify-evenly w-3/5 mt-24">
                <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview"/>
                <FormButton text="Überspringen" formAction="./IntExt_input"/>
                <FormButton text="Weiter" highlighted="true" formAction="./IntExt_input"/>
                </div>
                </form>
            </main>
            </div>
        </InputLayout>
    )
}

