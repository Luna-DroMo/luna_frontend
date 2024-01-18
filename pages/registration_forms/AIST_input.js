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
import { ErrorBanner } from '@/components/Errors';
import { hasNullValue } from '@/utils/utils';




export default function Main({ model }) {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter();

    // Data points
    const [AIST_R, setAIST_R] = useState('')
    const [AIST_I, setAIST_I] = useState('')
    const [AIST_A, setAIST_A] = useState('')
    const [AIST_S, setAIST_S] = useState('')
    const [AIST_E, setAIST_E] = useState('')
    const [AIST_C, setAIST_C] = useState('')
    const [error_message, setErrorMessage] = useState('')

    let data = {
        name: "AIST",
        content: {
            AIST_R: AIST_R,
            AIST_I: AIST_I,
            AIST_A: AIST_A,
            AIST_S: AIST_S,
            AIST_E: AIST_E,
            AIST_C: AIST_C,
        }

    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("Writing:", data)

        if (hasNullValue(data.content)) {
            setErrorMessage("Missing values")
        } else {
            try {
                const response = await axios.post(
                    `http://localhost:8000/api/student/save_form/${user.id}`,
                    data
                )

                router.push("./kognitive_faehigkeiten_input")
            } catch (error) {
                console.log("error", error)
                setErrorMessage(error.message)
            }
        }
    }


    let forms1 = [
        { "name": "AIST", "status": 1, "item": 1 },
        { "name": "Kognitive Fähigkeiten", "status": 0, "item": 2 },
        { "name": "Internale-Externale Kontrollüberzeugung", "status": 0, "item": 3 }];

    model = { "name": "Allgemeiner Interessen Struktur-Test" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about the AIST questionnaire</p>
                        <InputRow type="number" maintext="AIST_R" subtitle="Subtitle" value={AIST_R} onChange={(e) => setAIST_R(e.target.value)} />
                        <InputRow type="number" maintext="AIST_I" subtitle="Subtitle" value={AIST_I} onChange={(e) => setAIST_I(e.target.value)} />
                        <InputRow type="number" maintext="AIST_A" subtitle="Subtitle" value={AIST_A} onChange={(e) => setAIST_A(e.target.value)} />
                        <InputRow type="number" maintext="AIST_S" subtitle="Subtitle" value={AIST_S} onChange={(e) => setAIST_S(e.target.value)} />
                        <InputRow type="number" maintext="AIST_E" subtitle="Subtitle" value={AIST_E} onChange={(e) => setAIST_E(e.target.value)} />
                        <InputRow type="number" maintext="AIST_C" subtitle="Subtitle" value={AIST_C} onChange={(e) => setAIST_C(e.target.value)} />
                        { /* Error block */
                            error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
                        }
                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" onClick={(e) => router.push("../account_setup_overview")} type="reset" />
                            <FormButton text="Überspringen" onClick={(e) => router.push("./kognitive_faehigkeiten_input")} type="reset" />
                            <FormButton text="Weiter"  highlighted="true" />
                        </div>
                    </form>

                </main>
            </div>
        </InputLayout>
    )
}

