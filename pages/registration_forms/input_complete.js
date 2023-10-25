import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FormButton} from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';



export default function Main() {

    return (
        <RootLayout show_main_links={false} >
            <main className="flex-row justify-between px-10 pt-10">
                <form action=""> 
                <h1 className='tracking-wider text-xl'>Input Complete</h1>
                <p className='mb-10'>Well Done</p>
                <p>By Submitting here, the Inputs become unchangable.</p>
    
                
      


                <div className="flex justify-evenly w-3/5 mt-24">
                <FormButton text="Zurück zur Übersicht" formAction="../account_setup_overview"/>
                <FormButton text="Submit" highlighted="true" formAction="../"/>
                </div>
                </form>
            </main>
        </RootLayout>
    )
}

