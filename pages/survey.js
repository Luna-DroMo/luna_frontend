import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Button, FormButton} from "@/components/Buttons"
import {SurveyQuestion} from "@/components/FormElements"
import React from "react"
import {useRouter} from "next/router"
import {useState, useEffect, useRef} from "react"
import {url} from "@/utils/data"
import {useAuth} from "@/components/AuthProvider"
import axios from "axios"
import {basicDateFormat} from "@/utils/utils"

const surveyQuestions = [
    // Group 1
    [
        {maintext: "Ich mochte die Inhalte", subtitle: "", id: 0},
        {maintext: "Mir ist es wichtig über die Inhalte viel zu wissen", subtitle: "", id: 1},
        {
            maintext: "Diese Inhalte werden für meinen späteren Beruf nützlich sein",
            subtitle: "",
            id: 2
        },
        {
            maintext:
                "Um diese Inhalte zu verstehen, wird viel Zeit für andere Dinge verloren gehen",
            subtitle: "",
            id: 3
        },
        {maintext: "Die Beschäftigung mit diesen Inhalten erschöpft mich", subtitle: "", id: 4},
        {
            maintext: "Im Moment denke ich darüber nach, das Mathematikstudium abzubrechen.",
            subtitle: "",
            id: 5
        },
        {maintext: "Im Moment habe ich Angst, das Studium nicht zu schaffen.", subtitle: "", id: 6},
        {maintext: "Ich verstehe die derzeitigen Inhalte der Vorlesung.", subtitle: "", id: 7},
        {
            maintext: "Die Aufgaben des derzeitigen Übungsblattes kann ich bearbeiten.",
            subtitle: "",
            id: 8
        },
        {
            maintext: "Im Moment fühle ich mich im Mathematik-Studium gestresst.",
            subtitle: "",
            id: 9
        },
        {
            maintext:
                "Im Moment bin ich mit den an mich gestellten Anforderungen des Studiums überfordert.",
            subtitle: "",
            id: 10
        },
        {
            maintext:
                "So schätze ich im Moment mein Wissen und Können im Vergleich zu meinen Kommiliton*innen ein.",
            subtitle: "",
            id: 11
        }
    ],
    // Group 2
    [
        {maintext: "... Aufmerksam", subtitle: "", id: 12, scale: 4},
        {maintext: "... Aktiv", subtitle: "", id: 13, scale: 4},
        {maintext: "... Angeregt", subtitle: "", id: 14, scale: 4},
        {maintext: "... Nervös", subtitle: "", id: 15, scale: 4},
        {maintext: "... Ängstlich", subtitle: "", id: 16, scale: 4},
        {maintext: "... Bekümmert", subtitle: "", id: 17, scale: 4}
    ],
    // Group 3
    [
        {
            maintext: "So schätze ich im Moment mein Wissen und Können im Mathematikstudium ein",
            subtitle: "DOES THIS NEED ITS OWN SCALE TITLES?",
            id: 18,
            scale: 4
        }
    ],
    // Group 4
    [
        {maintext: "Ich habe viel in Lerngruppen gearbeitet.", subtitle: "", id: 19},
        {
            maintext: "Die meisten meiner abgegebenen Lösungen verstehe ich komplett.",
            subtitle: "",
            id: 20
        },
        {
            maintext: "Ich habe bei schwierigen Übungsaufgaben schnell aufgegeben.",
            subtitle: "",
            id: 21
        },
        {
            maintext:
                "Ich habe viel Zeit mit der Vor- und Nachbereitung der Vorlesungen verbracht.",
            subtitle: "",
            id: 22
        },
        {
            maintext:
                "Wie lange haben Sie sich außerhalb der Veranstaltungen mit Mathematik beschäftigt",
            subtitle: "",
            id: 23
        },
        {maintext: "Wie oft waren Sie in der Vorlesung anwesend?", subtitle: "", id: 24},
        {maintext: "Waren Sie in der Übungsgruppe?", subtitle: "", id: 25}
    ]
]

const survey = {
    module: "Mathematik",
    surveyno: 1
}

export default function Main() {
    const {user} = useAuth()
    const router = useRouter()

    const [selectedOptions, setSelectedOptions] = useState({})
    const [blockFilled, setBlockFilled] = useState([])
    const [isExpanded, setIsExpanded] = useState(Array(4).fill(true))
    const [request, setRequest] = useState([])
    const [surveyDetails, setSurveyDetails] = useState({})
    let prevBlockFilled = useRef()

    useEffect(() => {
        if (!router.query.id) return // Ensure id is defined

        const fetchSurveyDetails = async () => {
            try {
                const response = await axios.get(
                    `${url}/api/${user.id}/surveys/${router.query.id}/details`
                )
                setSurveyDetails(response.data)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchSurveyDetails()
    }, [router.query.id, user.id])

    useEffect(() => {
        const indicesToCheck = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17],
            [18],
            [19, 20, 21, 22, 23, 24, 25]
        ]

        const updatedBlockFilled = indicesToCheck.map((block) =>
            block.every((index) => selectedOptions[index] !== undefined)
        )

        if (JSON.stringify(blockFilled) !== JSON.stringify(updatedBlockFilled)) {
            setBlockFilled(updatedBlockFilled)
        }

        const prevBlockFilledValues = prevBlockFilled.current

        updatedBlockFilled.forEach((value, index) => {
            if (value && !prevBlockFilledValues[index]) {
                setIsExpanded((prevState) => {
                    const newState = [...prevState]
                    newState[index] = false
                    return newState
                })
            }
        })

        prevBlockFilled.current = updatedBlockFilled
    }, [selectedOptions])

    const handleOptionChange = (questionIndex, value) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [questionIndex]: value + 1 // Store the value of the selected option
        }))

        setRequest((prev) => {
            const existingResponseIndex = prev.findIndex(
                (response) => response.id === questionIndex
            )

            if (existingResponseIndex > -1) {
                return prev.map((response, index) =>
                    index === existingResponseIndex ? {...response, value: value} : response
                )
            } else {
                return [...prev, {id: questionIndex, value: value}]
            }
        })
        console.log("updating")
        console.log("Request", request)
    }

    const toggleExpansion = (index) => {
        setIsExpanded((prevState) => {
            const newState = [...prevState]
            newState[index] = !newState[index]
            return newState
        })
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault()

        if (blockFilled.every(Boolean)) {
            try {
                const response = await axios.post(
                    `${url}/api/${user.id}/surveys/${router.query.id}`,
                    request
                )

                console.log("Response:", response.data)
                router.push("./cockpit")
            } catch (error) {
                console.log("error", error)
                // Temporary until working
                router.push("./cockpit")
            }
        } else {
            alert("Please fill all the questions before submitting.")
        }
    }

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <div className='flex items-center'>
                    <img
                        src='alien.png'
                        className='w-12 h-12 bg-lightgrey rounded-full overflow-hidden mr-4'
                    />
                    <div className='flex-none'>
                        <h1 className='tracking-wider text-xl'>{surveyDetails.module_name}</h1>

                        <div className='flex'>
                            <p className='text-base text-text-grey mr-1'>
                                {surveyDetails.module_code}
                            </p>
                            <p className='text-base text-text-grey mr-1'>| </p>
                            <p className='text-base text-text-grey mr-1'>
                                Befragung {surveyDetails.survey_number}{" "}
                            </p>
                            <p className='text-base text-text-grey mr-1'>| </p>
                            <p className='text-base text-text-grey mr-1'>
                                bis{" "}
                                {surveyDetails && typeof surveyDetails.end_date === "string"
                                    ? surveyDetails.end_date.split("T")[0]
                                    : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleFormSubmission}>
                    <div
                        className={`bg-white overflow-hidden transition ease-in-out delay-250 rounded-lg px-2 pt-3 pb-7 mb-12 mt-8  border-2 ${
                            !isExpanded[0] ? "h-16" : ""
                        } ${blockFilled[0] ? "border-lunagreen" : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4'>
                            <h3>Motivationsaspekt</h3>
                        </div>
                        <div className='flex items-center w-full my-2 px-4'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>
                                    Ich stimme den folgenden Aussagen zu:
                                </p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-3'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Gar nicht
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Sehr
                                </p>
                            </div>
                        </div>
                        {surveyQuestions[0].map((question, index) => (
                            <SurveyQuestion
                                maintext={question.maintext}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white rounded-lg px-2 pt-3 pb-7 mb-12 border-2 ${
                            !isExpanded[1] ? "h-16" : ""
                        } ${blockFilled[1] ? "border-lunagreen " : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4'>
                            <h3>Emotionsaspekt</h3>
                        </div>
                        <div className='flex items-center w-full my-2 px-4'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>
                                    Bitte angeben, wie weit im Moment deine Gefühlswelt am besten zu
                                    beschreiben ist. Im Moment fühle ich mich…
                                </p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-3'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Gar nicht
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Sehr
                                </p>
                            </div>
                        </div>

                        {surveyQuestions[1].map((question, index) => (
                            <SurveyQuestion
                                maintext={question.maintext}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white rounded-lg overflow-hidden transition-all ease-in-out delay-150 px-2 pt-3 pb-7 mb-12 border-2 ${
                            !isExpanded[2] ? "h-16" : ""
                        } ${blockFilled[2] ? "border-lunagreen" : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4'>
                            <h3>Fähigkeit</h3>
                        </div>

                        <div className='flex items-center w-full my-2 px-4'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben</p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-3'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Nicht Gut
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Sehr Gut
                                </p>
                            </div>
                        </div>

                        {surveyQuestions[2].map((question, index) => (
                            <SurveyQuestion
                                scale={4}
                                maintext={question.maintext}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white rounded-lg px-2 pt-3 pb-7 mb-12  border-2 ${
                            !isExpanded[3] ? "h-16" : ""
                        } ${blockFilled[3] ? "border-lunagreen" : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4'>
                            <h3>Externer Aufwand</h3>
                        </div>
                        <div className='flex items-center w-full my-2 px-4'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben, wie weit .... </p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-3'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Nicht Gut
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Sehr Gut
                                </p>
                            </div>
                        </div>
                        {surveyQuestions[3].map((question, index) => (
                            <SurveyQuestion
                                maintext={question.maintext}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div className='flex justify-end mt-24'>
                        <FormButton
                            text='Abbrechen'
                            onClick={(e) => router.push("./cockpit")}
                            type='reset'
                        />
                        <FormButton text='Senden' highlighted='true' type='submit' />
                    </div>
                </form>
            </main>
        </RootLayout>
    )
}
