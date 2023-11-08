import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import React from 'react';



export default function Main() {

    return (
        <RootLayout>

            <main className="flex-row justify-between px-10 pt-10">
                <form>
                    <input type="file" />
                    <div className="flex justify-evenly w-3/5 mt-24">
                        <FormButton text="Abbrechen" formAction="/" />
                        <FormButton text="Modul Erstellen" highlighted="true" formAction="/" />
                    </div>
                </form>
            </main>
        </RootLayout>
    )
}




