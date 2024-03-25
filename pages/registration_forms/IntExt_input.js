import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';
import { useAuth } from '../../components/AuthProvider';
import { useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { ErrorBanner } from '@/components/Errors';
import { hasNullValue } from '@/utils/utils';
import { useEffect } from 'react';

export default function Main({ model }) {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter();
    const [userRole, setUserRole] = useState(null)
    // Data points
    const [INT, setINT] = useState('')
    const [EXT, setEXT] = useState('')
    const [error_message, setErrorMessage] = useState('')


    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(
                    `http://52.5.114.46/api/getUserType/${user.id}`
                )

                setUserRole(response.data)
            } catch (error) {
                console.log("error during login", error)
            }

        }

        getUserRole()
    })

    // Funky logic to only allow non-students to create modules, and to hide pre-rendering
    if (userRole === null) {
        return (<p> </p>)
    } else if (userRole !== 1) {
        router.push("/cockpit/")
    } else {


        let data = {
            name: "INTEXT",
            user: user.id,
            content: {
                INT: INT,
                EXT: EXT
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
                        `http://52.5.114.46/api/student/save_form/${user.id}`,
                        data
                    )

                    router.push("./maths_input")
                } catch (error) {
                    console.log("error", error)
                    setErrorMessage(error.message)
                }
            }
        }


        let forms1 = [
            { "name": "Kognitive Fähigkeiten", "status": 2, "item": 2 },
            { "name": "Internale-Externale Kontrollüberzeugung", "status": 1, "item": 3 },
            { "name": "Fachwissen Mathematik", "status": 0, "item": 4 },
        ];

        model = { "name": "Internale-Externale-Kontrollüberzeugung" };

        return (
            <InputLayout show_main_links={false} >
                <div className="input_progbar">
                    <Progressbar forms={forms1} current_form={model.name} />
                </div>
                <div className="input_mainbody">
                    <main className="flex-row justify-between px-10 pt-10">
                        <form onSubmit={handleUserDataUpdate}>
                            <h1 className='tracking-wider text-xl'>{model.name}</h1>
                            <p className='mb-10'>This section covers stuff about the Internal and External Control questionnaire</p>
                            <InputRow type="number" maintext="Internale Kontrolle Score" subtitle="Subtitle" value={INT} onChange={(e) => setINT(e.target.value)} />
                            <InputRow type="number" maintext="Externale Kontrolle Score" subtitle="Subtitle" value={EXT} onChange={(e) => setEXT(e.target.value)} />
                            { /* Error block */
                                error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
                            }


                            <div className="flex justify-evenly w-3/5 mt-24">
                                <FormButton text="Zurück zur Übersicht" onClick={(e) => router.push("../account_setup_overview")} type="reset" />
                                <FormButton text="Überspringen" onClick={(e) => router.push("./maths_input")} type="reset" />
                                <FormButton text="Weiter" highlighted="true" formAction="./maths_input" />
                            </div>
                        </form>
                    </main>
                </div>
            </InputLayout>
        )
    }

}