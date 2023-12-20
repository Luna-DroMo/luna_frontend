import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
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
import { hasNullValue } from '@/utils/utils';


export default function Main({ model }) {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter();

    // Data points
    const [PA, setPA] = useState(null)
    const [NA, setNA] = useState(null)


    let data = {
        name: "PANAS",
        user: user.id,
        content: {
            PA: PA,
            NA: NA
        }
    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("Writing:", data)

        if (hasNullValue(data.content)) {
            router.push("./input_complete")
        } else {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/student/save_form/${user.id}`,
                    data
                )

                router.push("./input_complete")
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    let forms1 = [

        { "name": "Motivation", "status": 2, "item": 6 },
        { "name": "Persönlichkeitsskala", "status": 2, "item": 7 },
        { "name": "Postive-Negative", "status": 1, "item": 8 },
    ];
    model = { "name": "Postive-Negative" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about PANAS questionnaire</p>
                        <InputRow type="number" maintext="PA" subtitle="Subtitle" value={PA} onChange={(e) => setPA(e.target.value)} />
                        <InputRow type="number" maintext="NA" subtitle="Subtitle" value={NA} onChange={(e) => setNA(e.target.value)} />

                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview" />
                            <FormButton text="Überspringen" formAction="./input_complete" />
                            <FormButton text="Weiter" highlighted="true" />
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}

