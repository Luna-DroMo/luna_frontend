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


export default function motivation_input({ model }) {
    const { user, isAuthenticated , saveUser, clearUser } = useAuth();
    const router = useRouter();

    // Data points
    const [AV, setAV] = useState('') 
    const [IV, setIV] = useState('') 
    const [SE, setSE] = useState('') 
    const [UV, setUV] = useState('') 
    const [CO, setCO] = useState('') 

    
    let data = {
        name: "Motivation",
        user: user.id,
        content: {
            AV:AV,
            IV:IV,
            SE:SE,
            UV:UV,
            CO:CO
        }
    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("Writing:", data)
        try {
          const response = await axios.post(
            `http://localhost:8000/api/student/save_form/${user.id}`,
            data
          )
          
        router.push("./bfi_input")
        } catch (error) {
          console.log("error", error)
        }
      }
      
    let forms1 = [

        { "name": "Fachwissen Mathematik", "status": 2, "item": 5 },
        { "name": "Motivation", "status": 1, "item": 6 },
        { "name": "Persönlichkeitsskala", "status": 0, "item": 7 },
    ];

    model = { "name": "Motivation" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">
                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about the Motivation questionnaire</p>
                        <InputRow type="number" maintext="AV" subtitle="Subtitle" value={AV} onChange={(e) => setAV(e.target.value)}/>
                        <InputRow type="number" maintext="IV" subtitle="Subtitle" value={IV} onChange={(e) => setIV(e.target.value)}/>
                        <InputRow type="number" maintext="SE" subtitle="Subtitle" value={SE} onChange={(e) => setSE(e.target.value)}/>
                        <InputRow type="number" maintext="UV" subtitle="Subtitle" value={UV} onChange={(e) => setUV(e.target.value)}/>
                        <InputRow type="number" maintext="CO" subtitle="Subtitle" value={CO} onChange={(e) => setCO(e.target.value)}/>




                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview" type="button"/>
                            <FormButton text="Überspringen" formAction="./bfi_input" type="button"/>
                            <FormButton text="Weiter" highlighted="true" />
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}

