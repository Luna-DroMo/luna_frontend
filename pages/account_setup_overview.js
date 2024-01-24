import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/Buttons';
import SetupOverview from '@/components/SetupDataModelOverview';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './contexts/AuthProvider';
import { useRouter } from 'next/router';


const account_setup_progress = 0;
const data_models_to_use = [
    { "modelname": "Personenprofil", "setup_status": 2, "href": "#", "img": "personal.png" },
    { "modelname": "AIST", "setup_status": 2, "href": "#", "img": "curious.png" },
    { "modelname": "Kognitive Fähigkeiten", "setup_status": 2, "href": "#", "img": "brain.png" },
    { "modelname": "Internale-Externale-Kontrollüberzeugung", "setup_status": 1, "href": "#", "img": "specification.png" },
    { "modelname": "Fachwissenstest Mathematik", "setup_status": 1, "href": "#", "img": "function.png" },
    { "modelname": "Motivation", "setup_status": 1, "href": "#", "img": "motivation.png" },
    { "modelname": "Persönlichkeits-skala", "setup_status": 0, "href": "#", "img": "personality.png" },
    { "modelname": "Panas", "setup_status": 0, "href": "#", "img": "mood.png" },
];



export default function Main() {

    const setupStatusList = data_models_to_use.map((model) => model.setup_status);
    const current_progress = setupStatusList.reduce((partialSum, a) => partialSum + a, 0) / (setupStatusList.length * 2);
    const [userRole, setUserRole] = useState(null)
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter()

    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(
                    `http://localhost:8000/api/getUserType/${user.id}`
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

        return (
            <RootLayout show_main_links={false} >
                <main className="flex-row justify-between px-10 pt-10">
                    <Greeting account_setup_progress={account_setup_progress} />
                    <div className=' my-10  w-full text-center'>
                        <h1 className='mb-5 text-2xl'>Prozess jetzt starten!</h1>
                        <Button text="Loslegen!" highlighted={true} href="./registration_forms/AIST_input/"></Button>

                        <a href="/" className='text-xs text-lightgrey mt-5 block hover:underline'><p>Ich habe gerade keine Zeit</p></a>
                    </div>
                    <h3> Oder in einen Fragebogen direkt einsteigen!</h3>
                    <SetupOverview data_models={data_models_to_use} />
                </main>
            </RootLayout>
        )
    }
}
function Greeting({ account_setup_progress }) {

    if (account_setup_progress == 0) {
        return (
            <>
                <div className='flex items-center'>
                    <img src="alien.png" className='ml-2 w-10 mr-4' />
                    <h1 className='tracking-wider text-xl'>Hey Max, willkommen bei Luna!</h1>
                </div>
                <div className='text-text-grey text-sm mt-5'>
                    <p className='mb-3'>Für unsere Analysen brauchen wir eine Menge Daten. Wir wissen, dass es viel ist, und wir haben versucht, den Prozess für dich so einfach wie möglich zu machen. Dein Fortschritt wird automatisch gespeichert, sodass du die Seite verlassen und später wiederkommen kannst, ohne deine bisherigen Daten zu verlieren!</p>
                    <p className='mb-3'>Es ist nicht zwingend erforderlich, alle Daten einzugeben, aber unsere Modelle benötigen bestimmte Daten, um ordnungsgemäß zu funktionieren. Wenn du dich entscheidest, die notwendigen Daten für ein bestimmtes Modell nicht zu teilen, wird dieses Modell leider nicht für dich funktionieren.</p>
                    <p className='mb-3'>Als Anreiz für diesen Prozess werden wir dir wissenschaftliche Analysen bereitstellen, die speziell für dich erstellt wurden!</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='flex items-center'>
                    <img src="alien.png" className='ml-2 w-10 mr-4' />
                    <h1 className='tracking-wider text-xl'>Übersicht</h1>
                </div>
                <div className='text-text-grey text-sm mt-5'>
                    <p className='mb-3'>Für unsere Analysen brauchen wir eine Menge Daten. Wir wissen, dass es viel ist, und wir haben versucht, den Prozess für dich so einfach wie möglich zu machen. Dein Fortschritt wird automatisch gespeichert, sodass du die Seite verlassen und später wiederkommen kannst, ohne deine bisherigen Daten zu verlieren!</p>
                    <p className='mb-3'>Es ist nicht zwingend erforderlich, alle Daten einzugeben, aber unsere Modelle benötigen bestimmte Daten, um ordnungsgemäß zu funktionieren. Wenn du dich entscheidest, die notwendigen Daten für ein bestimmtes Modell nicht zu teilen, wird dieses Modell leider nicht für dich funktionieren.</p>
                    <p className='mb-3'>Als Anreiz für diesen Prozess werden wir dir wissenschaftliche Analysen bereitstellen, die speziell für dich erstellt wurden!</p>
                </div>
            </>
        )
    }

}


