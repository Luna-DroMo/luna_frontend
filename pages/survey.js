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
                <h1 className='tracking-wider text-3xl'>[class.name]</h1>
                <p className='text-sm text-text-grey'>SUBTITLE - STILL NEED TO TURN THIS INTO A FORM</p>
                <form action="">
                    <div className='h-8' />
                    <div className="flex items-center w-full my-2">
                        <div className='flex-grow'>
                            <p className='text-lunapurple'>I agree with the following statements:</p>
                        </div>
                        <div className="flex justify-between w-80 text-lunapurple">
                            <p>Gar nicht</p>
                            <p>Sehr</p>
                        </div>
                    </div>

                    <SurveyQuestion maintext="Ich mochte die Inhalte" subtitle="" />
                    <SurveyQuestion maintext="Mir ist es wichtig über die Inhalte viel zu wissen" subtitle="" />
                    <SurveyQuestion maintext="Diese Inhalte werden für meinen späteren Beruf nützlich sein" subtitle="" />
                    <SurveyQuestion maintext="Um diese Inhalte zu verstehen, wird viel Zeit für andere Dinge verloren gehen" subtitle="" />
                    <SurveyQuestion maintext="Die Beschäftigung mit diesen Inhalten erschöpft mich" subtitle="" />
                    <SurveyQuestion maintext="Im Moment denke ich darüber nach, das Mathematikstudium abzubrechen." subtitle="" />
                    <SurveyQuestion maintext="Im Moment habe ich Angst, das Studium nicht zu schaffen." subtitle="" />
                    <SurveyQuestion maintext="Ich verstehe die derzeitigen Inhalte der Vorlesung." subtitle="" />
                    <SurveyQuestion maintext="Die Aufgaben des derzeitigen Übungsblattes kann ich bearbeiten." subtitle="" />
                    <SurveyQuestion maintext="Im Moment fühle ich mich im Mathematik-Studium gestresst." subtitle="" />
                    <SurveyQuestion maintext="Im Moment bin ich mit den an mich gestellten Anforderungen des Studiums überfordert." subtitle="" />
                    <SurveyQuestion maintext="So schätze ich im Moment mein Wissen und Können im Vergleich zu meinen Kommiliton*innen ein." subtitle="" />

                    <div className='h-8' />
                    <div className="flex items-center w-full my-2">
                        <div className='flex-grow'>
                            <p className='text-lunapurple'>Bitte geben Sie an, wie weit im Moment Ihre Gefühlswelt am besten zu beschreiben ist. Im Moment fühle ich mich…</p>
                        </div>
                        <div className="flex justify-between w-80 text-lunapurple">
                            <p>Gar nicht</p>
                            <p>Sehr</p>
                        </div>
                    </div>

                    <SurveyQuestion scale={4} maintext="... Aufmerksam" subtitle="" />
                    <SurveyQuestion scale={4} maintext="... Aktiv" subtitle="" />
                    <SurveyQuestion scale={4} maintext="... Angeregt" subtitle="" />
                    <SurveyQuestion scale={4} maintext="... Nervös" subtitle="" />
                    <SurveyQuestion scale={4} maintext="... Ängstlich" subtitle="" />
                    <SurveyQuestion scale={4} maintext="... Bekümmert" subtitle="" />

                    <div className='h-8' />
                    <div className="flex items-center w-full my-2">
                        <div className='flex-grow'>
                            <p className='text-lunapurple'>Bitte geben Sie an…</p>
                        </div>
                        <div className="flex justify-between w-80 text-lunapurple">
                            <p>Nicht Gut</p>
                            <p>Sehr Gut</p>
                        </div>
                    </div>

                    <SurveyQuestion scale={4} maintext="So schätze ich im Moment mein Wissen und Können im Mathematikstudium ein" subtitle="DOES THIS NEED ITS OWN SCALE TITLES?" />

                    <div className='h-8' />
                    <div className="flex items-center w-full my-2">
                        <div className='flex-grow'>
                            <p className='text-lunapurple'>Bitte geben Sie an, wie weit .... </p>
                        </div>
                        <div className="flex justify-between w-80 text-lunapurple">
                            <p>Nicht Gut</p>
                            <p>Sehr Gut</p>
                        </div>
                    </div>
                    <SurveyQuestion maintext="Ich habe viel in Lerngruppen gearbeitet." subtitle="" />
                    <SurveyQuestion maintext="Die meisten meiner abgegebenen Lösungen verstehe ich komplett." subtitle="" />
                    <SurveyQuestion maintext="Ich habe bei schwierigen Übungsaufgaben schnell aufgegeben." subtitle="" />
                    <SurveyQuestion maintext="Ich habe viel Zeit mit der Vor- und Nachbereitung der Vorlesungen verbracht." subtitle="" />
                    <SurveyQuestion maintext="Wie lange haben Sie sich außerhalb der Veranstaltungen mit Mathematik beschäftigt" subtitle="" />
                    <SurveyQuestion maintext="Wie oft waren Sie in der Vorlesung anwesend?" subtitle="" />
                    <SurveyQuestion maintext="Waren Sie in der Übungsgruppe?" subtitle="" />

                    <div className="flex justify-end mt-24">
                        <FormButton text="Abbrechen" formAction="/" />
                        <FormButton text="Senden" highlighted="true" formAction="/" />
                    </div>
                </form>
            </main>
        </RootLayout>
    )
}




