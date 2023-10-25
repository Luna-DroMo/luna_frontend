import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';



export default function Main({ model }) {

    let forms1 = [{ "name": "Benutzerdaten", "status": 2, "item": 1 },
    { "name": "AIST", "status": 1, "item": 2 },
    { "name": "Kognitive Fähigkeiten", "status": 0, "item": 3 }];

    model = { "name": "Allgemeiner Interessen Struktur-Test" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
                <main className="flex-row justify-between px-10 pt-10">
                    <form action="">
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about the AIST questionnaire</p>
                        <InputRow type="number" maintext="AIST_R" subtitle="Subtitle" />
                        <InputRow type="number" maintext="AIST_I" subtitle="Subtitle" />
                        <InputRow type="number" maintext="AIST_A" subtitle="Subtitle" />
                        <InputRow type="number" maintext="AIST_S" subtitle="Subtitle" />
                        <InputRow type="number" maintext="AIST_E" subtitle="Subtitle" />
                        <InputRow type="number" maintext="AIST_C" subtitle="Subtitle" />



                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview" />
                            <FormButton text="Überspringen" formAction="./kognitive_faehigkeiten_input" />
                            <FormButton text="Weiter" highlighted="true" formAction="./kognitive_faehigkeiten_input" />
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}

