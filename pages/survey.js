import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button, FormButton } from '@/components/Buttons';
import { SurveyQuestion } from '@/components/FormElements';
import React from 'react';
import Router, { useRouter } from "next/router"
import { useState, useEffect, useRef } from 'react';


export default function Main() {

    const router = useRouter()
    const survey = router.query

    // State to store the selected option for each question
    const [selectedOptions, setSelectedOptions] = useState({});
    const [blockFilled, setBlockFilled] = useState([]);
    const [isExpanded, setIsExpanded] = useState(Array(4).fill(true));

    
    // Function to handle change in selected option for a question
    const handleOptionChange = (questionIndex, optionIndex, isChecked) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [questionIndex]: true, // Store whether the option is checked
    }));
        console.log("updating")
        console.log("SelOp", selectedOptions)
    };


    useEffect(() => {
        const indicesToCheck = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17],
            [18],
            [19, 20, 21, 22, 23, 24, 25]
        ];

        const updatedBlockFilled = indicesToCheck.map(block =>
            block.every(index => selectedOptions[index])
        );

        
        setBlockFilled(updatedBlockFilled);
    }, [selectedOptions]);

    let prevBlockFilled = useRef();


    useEffect(() => {
        prevBlockFilled.current = blockFilled;
      }, [blockFilled]);

    useEffect(() => {

        blockFilled.forEach((value, index) => {
            console.log(value, prevBlockFilled.current[index])
            if (value && (!prevBlockFilled.current[index])) {
                // If a block changes from false to true, set the corresponding isExpanded to false
                console.log("setting to collapse")
                setIsExpanded(prevState => {
                    const newState = [...prevState];
                    newState[index] = false;
                    return newState;
                });
            }

        });
    }, [blockFilled]);

    const toggleExpansion = (index) => {
        setIsExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };



    const handleFormSubmission = async (e) => {
        e.preventDefault()
        try {
            //const response = await axios.post(
            //  ``,
            //  request
            //)

            router.push("./cockpit")
        } catch (error) {
            console.log("error", error)
            // Temporary until working
            router.push("./cockpit")
        }
    }


    return (
        <RootLayout>
            <main className="flex-row justify-between px-10 pt-10">
                <div className='flex items-center'>
                    <img src="alien.png" className='w-12 h-12 bg-lightgrey rounded-full overflow-hidden mr-4' />
                    <div className='flex-none'>
                        <h1 className='tracking-wider text-xl'>{survey.module}</h1>

                        <div className='flex'>
                            <p className='text-base text-text-grey mr-1'>CODE</p>
                            <p className='text-base text-text-grey mr-1'>| </p>
                            <p className='text-base text-text-grey mr-1'>Befragung {survey.surveyno} </p>
                            <p className='text-base text-text-grey mr-1'>| </p>
                            <p className='text-base text-text-grey mr-1'> bis {survey.duedate}</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleFormSubmission}>

                    <div className={`bg-white overflow-hidden transition ease-in-out delay-250 rounded-lg px-2 pt-3 pb-7 mb-12 mt-8 border border-2 ${!isExpanded[0] ? 'h-16' : ''} ${blockFilled[0] ? 'border-lunagreen' : 'border-transparent'}`}>
                        <div className='flex my-2 px-4'>
                            <h3>Motivationsaspekt</h3>
                            
                        </div>
                        <div className="flex items-center w-full my-2 px-4">
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Ich stimme den folgenden Aussagen zu:</p>
                            </div>
                            <div className="flex justify-between w-72 text-lunapurple pr-3">
                                <p className="flex-1 grid py-1 justify-items-center rounded">Gar nicht</p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded">Sehr</p>
                            </div>
                        </div>

                        <SurveyQuestion maintext="Ich mochte die Inhalte" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Mir ist es wichtig über die Inhalte viel zu wissen" subtitle="" onChange={(isChecked) => handleOptionChange(1, isChecked)} />
                        <SurveyQuestion maintext="Diese Inhalte werden für meinen späteren Beruf nützlich sein" subtitle="" onChange={(isChecked) => handleOptionChange(2, isChecked)} />
                        <SurveyQuestion maintext="Um diese Inhalte zu verstehen, wird viel Zeit für andere Dinge verloren gehen" subtitle="" onChange={(isChecked) => handleOptionChange(3, isChecked)} />
                        <SurveyQuestion maintext="Die Beschäftigung mit diesen Inhalten erschöpft mich" subtitle="" onChange={(isChecked) => handleOptionChange(4, isChecked)} />
                        <SurveyQuestion maintext="Im Moment denke ich darüber nach, das Mathematikstudium abzubrechen." subtitle="" onChange={(isChecked) => handleOptionChange(5, isChecked)} />
                        <SurveyQuestion maintext="Im Moment habe ich Angst, das Studium nicht zu schaffen." subtitle="" onChange={(isChecked) => handleOptionChange(6, isChecked)} />
                        <SurveyQuestion maintext="Ich verstehe die derzeitigen Inhalte der Vorlesung." subtitle="" onChange={(isChecked) => handleOptionChange(7, isChecked)} />
                        <SurveyQuestion maintext="Die Aufgaben des derzeitigen Übungsblattes kann ich bearbeiten." subtitle="" onChange={(isChecked) => handleOptionChange(8, isChecked)} />
                        <SurveyQuestion maintext="Im Moment fühle ich mich im Mathematik-Studium gestresst." subtitle="" onChange={(isChecked) => handleOptionChange(9, isChecked)} />
                        <SurveyQuestion maintext="Im Moment bin ich mit den an mich gestellten Anforderungen des Studiums überfordert." subtitle="" onChange={(isChecked) => handleOptionChange(10, isChecked)} />
                        <SurveyQuestion maintext="So schätze ich im Moment mein Wissen und Können im Vergleich zu meinen Kommiliton*innen ein." subtitle="" onChange={(isChecked) => handleOptionChange(11, isChecked)} />
                    </div>
                    <div className={`bg-white rounded-lg px-2 pt-3 pb-7 mb-12 border border-2 ${!isExpanded[1] ? 'h-16' : ''} ${blockFilled[1] ? 'border-lunagreen ' : 'border-transparent'}`}>
                        <div className='flex my-2 px-4'>
                            <h3>Emotionsaspekt</h3>
                            
                        </div>
                        <div className="flex items-center w-full my-2 px-4">
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben, wie weit im Moment deine Gefühlswelt am besten zu beschreiben ist. Im Moment fühle ich mich…</p>
                            </div>
                            <div className="flex justify-between w-72 text-lunapurple pr-3">
                                <p className="flex-1 grid py-1 justify-items-center rounded">Gar nicht</p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded">Sehr</p>
                            </div>
                        </div>

                        <SurveyQuestion scale={4} maintext="... Aufmerksam" subtitle="" onChange={(isChecked) => handleOptionChange(12, isChecked)} />
                        <SurveyQuestion scale={4} maintext="... Aktiv" subtitle="" onChange={(isChecked) => handleOptionChange(13, isChecked)} />
                        <SurveyQuestion scale={4} maintext="... Angeregt" subtitle="" onChange={(isChecked) => handleOptionChange(14, isChecked)} />
                        <SurveyQuestion scale={4} maintext="... Nervös" subtitle="" onChange={(isChecked) => handleOptionChange(15, isChecked)} />
                        <SurveyQuestion scale={4} maintext="... Ängstlich" subtitle="" onChange={(isChecked) => handleOptionChange(16, isChecked)} />
                        <SurveyQuestion scale={4} maintext="... Bekümmert" subtitle="" onChange={(isChecked) => handleOptionChange(17, isChecked)} />
                    </div>
                    <div className={`bg-white rounded-lg overflow-hidden transition-all ease-in-out delay-150 px-2 pt-3 pb-7 mb-12 border border-2 ${!isExpanded[2] ? 'h-16' : ''} ${blockFilled[2] ? 'border-lunagreen' : 'border-transparent'}`}>
                        <div className='flex my-2 px-4'>
                            <h3>Fähigkeit</h3>
                            
                        </div>

                        <div className="flex items-center w-full my-2 px-4">
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben</p>
                            </div>
                            <div className="flex justify-between w-72 text-lunapurple pr-3">
                                <p className="flex-1 grid py-1 justify-items-center rounded">Nicht Gut</p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded">Sehr Gut</p>
                            </div>
                        </div>

                        <SurveyQuestion scale={4} maintext="So schätze ich im Moment mein Wissen und Können im Mathematikstudium ein" subtitle="DOES THIS NEED ITS OWN SCALE TITLES?" onChange={(isChecked) => handleOptionChange(18, isChecked)} />

                    </div>
                    <div className={`bg-white rounded-lg px-2 pt-3 pb-7 mb-12 border border-2 ${!isExpanded[3] ? 'h-16' : ''} ${blockFilled[3] ? 'border-lunagreen' : 'border-transparent'}`}>
                        <div className='flex my-2 px-4'>
                            <h3>Externer Aufwand</h3>
                            
                        </div>
                        <div className="flex items-center w-full my-2 px-4">
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben, wie weit .... </p>
                            </div>
                            <div className="flex justify-between w-72 text-lunapurple pr-3">
                                <p className="flex-1 grid py-1 justify-items-center rounded">Nicht Gut</p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded">Sehr Gut</p>
                            </div>
                        </div>
                        <SurveyQuestion maintext="Ich habe viel in Lerngruppen gearbeitet." subtitle="" onChange={(isChecked) => handleOptionChange(19, isChecked)} />
                        <SurveyQuestion maintext="Die meisten meiner abgegebenen Lösungen verstehe ich komplett." subtitle="" onChange={(isChecked) => handleOptionChange(20, isChecked)} />
                        <SurveyQuestion maintext="Ich habe bei schwierigen Übungsaufgaben schnell aufgegeben." subtitle="" onChange={(isChecked) => handleOptionChange(21, isChecked)} />
                        <SurveyQuestion maintext="Ich habe viel Zeit mit der Vor- und Nachbereitung der Vorlesungen verbracht." subtitle="" onChange={(isChecked) => handleOptionChange(22, isChecked)} />
                        <SurveyQuestion maintext="Wie lange haben Sie sich außerhalb der Veranstaltungen mit Mathematik beschäftigt" subtitle="" onChange={(isChecked) => handleOptionChange(23, isChecked)} />
                        <SurveyQuestion maintext="Wie oft waren Sie in der Vorlesung anwesend?" subtitle="" onChange={(isChecked) => handleOptionChange(24, isChecked)} />
                        <SurveyQuestion maintext="Waren Sie in der Übungsgruppe?" subtitle="" onChange={(isChecked) => handleOptionChange(25, isChecked)} />

                    </div>
                    <div className="flex justify-end mt-24">
                        <FormButton text="Abbrechen" onClick={(e) => router.push("./cockpit")} type='reset' />
                        <FormButton text="Senden" highlighted="true" type="submit" />
                    </div>


                </form>
            </main>
        </RootLayout>
    )
}




