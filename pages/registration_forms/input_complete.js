import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../../components/AuthProvider';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Main() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const router = useRouter();
    const [userRole, setUserRole] = useState(null)


    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(
                    `https://mz-bdev.de/api/getUserType/${user.id}`
                )

                setUserRole(response.data)
            } catch (error) {
                console.log("error during login", error)
            }

        }

        getUserRole()
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        router.push("/cockpit/")
    }
    // Funky logic to only allow non-students to create modules, and to hide pre-rendering
    if (userRole === null) {
        return (<p> </p>)
    } else if (userRole !== 1) {
        router.push("/cockpit/")
    } else {
        return (
            <RootLayout show_main_links={false} >
                <main className="flex-row justify-between px-10 pt-10">
                    <form onSubmit={handleSubmit}>
                        <h1 className='tracking-wider text-xl'>Input Complete</h1>
                        <p className='mb-10'>Well Done</p>
                        <p>By Submitting here, the Inputs become unchangable.</p>

                        <div className="flex justify-evenly w-3/5 mt-24">
                            <FormButton text="Zurück zur Übersicht" onClick={(e) => router.push("../account_setup_overview")} type="reset" />
                            <FormButton text="Submit" highlighted="true"/>
                        </div>
                    </form>
                </main>
            </RootLayout>
        )
    }

}