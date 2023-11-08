import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button, FormButton } from '@/components/Buttons';
import { SurveyQuestion } from '@/components/FormElements';
import React from 'react';

const account_setup_progress = 0;

export default function Main() {





    return (
        <RootLayout>
            <main className="flex-row justify-between px-10 pt-10">
                <h1 className='tracking-wider text-3xl'>Verification</h1>
                
                <form action="">
                    
                    <p> Please enter your verification code:</p>
                    <input type="text"></input>

                    <div className="flex justify-end mt-24">
                        <FormButton text="Abbrechen" formAction="/" />
                        <FormButton text="Senden" highlighted="true" formAction="/" />
                    </div>
                </form>
            </main>
        </RootLayout>
    )
}




