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


export default function Main({ model }) {
    const { user, isAuthenticated , saveUser, clearUser } = useAuth();
    const router = useRouter();

    // Data points
    const [EX, setEX] = useState('') 
    const [VE, setVE] = useState('') 
    const [GE, setGE] = useState('') 
    const [NE, setNE] = useState('') 
    const [OF, setOF] = useState('') 

    
    let data = {
        name: "BFI",
        user: user.id,
        content: {
            EX:EX,
            VE:VE,
            GE:GE,
            NE:NE,
            OF:OF
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
          
        router.push("./panas_input")
        } catch (error) {
          console.log("error", error)
        }
      }
      
    let forms1 = [
        
        { "name": "Motivation", "status": 2, "item": 5 },
        { "name": "Persönlichkeitsskala", "status": 1, "item": 6 },
        { "name": "Postive-Negative", "status": 0, "item": 7 },
    ];

    model = { "name": "Persönlichkeit" };

    return (
        <InputLayout show_main_links={false} >
            <div className="input_progbar">
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className="input_mainbody">

                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about BFI Personality questionnaire</p>
                        <InputRow type="number" maintext="BFI_ex" subtitle="Subtitle" value={EX} onChange={(e) => setEX(e.target.value)}/>
                        <InputRow type="number" maintext="BFI_ve" subtitle="Subtitle" value={VE} onChange={(e) => setVE(e.target.value)}/>
                        <InputRow type="number" maintext="BFI_ge" subtitle="Subtitle" value={GE} onChange={(e) => setGE(e.target.value)}/>
                        <InputRow type="number" maintext="BFI_ne" subtitle="Subtitle" value={NE} onChange={(e) => setNE(e.target.value)}/>
                        <InputRow type="number" maintext="BFI_of" subtitle="Subtitle" value={OF} onChange={(e) => setOF(e.target.value)}/>

                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview" type="button"/>
                            <FormButton text="Überspringen" formAction="./panas_input" type="button"/>
                            <FormButton text="Weiter" highlighted="true"/>
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}

