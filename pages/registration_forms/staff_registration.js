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
import { faC } from '@fortawesome/free-solid-svg-icons';


export default function Main({ model }) {
    const { user, isAuthenticated , saveUser, clearUser } = useAuth();
    // NEED API TO RETURN A LIST [] OF OBJECTs {} OF THIS FORM. NEED THE CURRENT AND THE 2 NEAREST FORM NAMES AND STATUSES

    const router = useRouter();

    

    const [firstname, setFirstname] = useState('') // firstname
    const [surname, setSurname] = useState('') // surname
    const [alias, setAlias] = useState('') // alias
    const [university, setUniversity] = useState('') // University
    const [faculty, setFaculty] = useState('') // Faculty

    const [error_message, setErrorMessage] = useState('')
    

    let data = {
        first_name: firstname,
        last_name: surname,
        nickname: alias,
        university: university,
        faculty: faculty,
        

    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("updating:", data)
        try {
          const response = await axios.patch(
            //`http://52.5.114.46/api/update_student/${user.id}/`,
            //data
            
          )
          
        router.push("../cockpit")
        } catch (error) {
          console.log("error", error)
          setErrorMessage(error.message)
          router.push('../cockpit/'
          )
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
                        <h1 className='tracking-wider text-xl mb-10'>Welcome to Luna</h1>
                        <InputRow type="text" maintext="Vorname(n)" subtitle="" value = {firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <InputRow type="text" maintext="Nachname" subtitle="" value = {surname} onChange={(e) => setSurname(e.target.value)}/>
                        <InputRow type="text" maintext="Alias" subtitle="Wie sollen wir dich nennen?" value = {alias} onChange={(e) => setAlias(e.target.value)}/>
                    
                        <div className='h-12'></div>
                        <InputRow type="text" maintext="Universität" subtitle="" value = {university} onChange={(e) => setUniversity(e.target.value)}/>
                        <InputRow type="text" maintext="Fakulät" subtitle="" value = {faculty} onChange={(e) => setFaculty(e.target.value)}/>
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
