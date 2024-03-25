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
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
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

    
    if (user.user_type === 2){
    return (
        <RootLayout show_main_links={false} >

            <main className="flex-row justify-between px-10 pt-10">
                <form onSubmit={handleUserDataUpdate}>
                    <div className='flex items-center mb-10'>
                        <img src='../alien.png' className='ml-2 w-10 mr-4 rounded-full bg-[#cccccc] border-2 border-lunapurple' />
                        <div className='flex-none'>
                        <h1 className='tracking-wider text-xl'>
                            Willkommen bei Luna!
                        </h1>
                        <p className='text-lightgrey'>Wir brauchen noch ein oder zwei Daten um das Profil zu vervollständigen...</p>
                        </div>
                    </div>
                    
                    <div className='bg-white px-8 py-4 rounded-xl'>
                        <h3>Personendaten</h3>
                        <InputRow type="text" maintext="Vorname(n)" subtitle="" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <InputRow type="text" maintext="Nachname" subtitle="" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <InputRow type="text" maintext="Alias" subtitle="Wie sollen wir dich nennen?" value={alias} onChange={(e) => setAlias(e.target.value)} />
                    </div>
                    <div className='h-12'></div>
                    <div className='bg-white px-8 py-4 rounded-xl'>
                        <h3>Insitutsdaten</h3>
                        <InputRow type="text" maintext="Universität" subtitle="" value={university} onChange={(e) => setUniversity(e.target.value)} />
                        <InputRow type="text" maintext="Fakulät" subtitle="" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
                    </div>
                    { /* Error block */
                        error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
                    }
                    <div className="flex mt-24">

                        <FormButton text="Einsteigen" highlighted="true" />
                    </div>
                </form>
            </main>

        </RootLayout >
    )
}
router.push('../cockpit')
}
