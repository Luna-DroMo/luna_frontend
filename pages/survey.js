import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
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
        {maintext: "ich mochte die Inhalte.", subtitle: "", id: 0},
        {maintext: "mir ist es wichtig über die Inhalte viel zu wissen.", subtitle: "", id: 1},
        {
            maintext: "diese Inhalte werden für meinen späteren Beruf nützlich sein.",
            subtitle: "",
            id: 2
        },
        {
            maintext:
                "um diese Inhalte zu verstehen, wird viel zeit für andere Dinge verloren gehen.",
            subtitle: "",
            id: 3
        },
        {maintext: "die Beschäftigung mit diesen Inhalten erschöpft mich.", subtitle: "", id: 4},
        {
            maintext: "im Moment denke ich darüber nach, das Studium abzubrechen.",
            subtitle: "",
            id: 5
        },
        {maintext: "im Moment habe ich Angst, das Studium nicht zu schaffen.", subtitle: "", id: 6},
        {maintext: "ich verstehe die derzeitigen Inhalte der Vorlesung.", subtitle: "", id: 7},
        {
            maintext: "die Aufgaben des derzeitigen Übungsblattes kann ich bearbeiten.",
            subtitle: "",
            id: 8
        },
        {
            maintext: "im Moment fühle ich mich im Studium gestresst.",
            subtitle: "",
            id: 9
        },
        {
            maintext:
                "im Moment bin ich mit den an mich gestellten Anforderungen des Studiums überfordert.",
            subtitle: "",
            id: 10
        }
    ],
    // Group 2
    [
        {maintext: "... aufmerksam.", subtitle: "", id: 12, scale: 4},
        {maintext: "... aktiv.", subtitle: "", id: 13, scale: 4},
        {maintext: "... angeregt.", subtitle: "", id: 14, scale: 4},
        {maintext: "... nervös.", subtitle: "", id: 15, scale: 4},
        {maintext: "... ängstlich.", subtitle: "", id: 16, scale: 4},
        {maintext: "... bekümmert.", subtitle: "", id: 17, scale: 4}
    ],
    // Group 3
    [
        {
            maintext: "so schätze ich im Moment mein Wissen und Können im Studium ein.",
            subtitle: "",
            id: 18,
            scale: 4
        },
        {
            maintext:
                "so schätze ich im Moment mein Wissen und Können im Vergleich zu meinen Kommiliton*innen ein.",
            subtitle: "",
            id: 11
        }
    ],
    // Group 4
    [
        {maintext: "ich habe viel in Lerngruppen gearbeitet.", subtitle: "", id: 19},
        {
            maintext: "die meisten meiner abgegebenen Lösungen verstehe ich komplett.",
            subtitle: "",
            id: 20
        },
        {
            maintext: "ich habe bei schwierigen Übungsaufgaben schnell aufgegeben.",
            subtitle: "",
            id: 21
        },
        {
            maintext:
                "ich habe viel Zeit mit der Vor- und Nachbereitung der Vorlesungen verbracht.",
            subtitle: "",
            id: 22
        },
        {
            maintext:
                "ich habe mich viel außerhalb der Veranstaltungen mit den Vorlesungsthemen beschäftigt.",
            subtitle: "",
            id: 23
        },
        {maintext: "wie oft waren sie in der Vorlesung anwesend?", subtitle: "", id: 24},
        {maintext: "waren sie in einer Übungsgruppe?", subtitle: "", id: 25}
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
    const [isLoading, setIsLoading] = useState(true)
    let prevBlockFilled = useRef()

    useEffect(() => {
        if (!router.query.id) return // Ensure id is defined

        const fetchSurveyDetails = async () => {
            try {
                const response = await axios.get(
                    `${url}/api/${user.id}/surveys/${router.query.id}/details`
                )
                setSurveyDetails(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchSurveyDetails()
    }, [router.query.id, user.id])

    useEffect(() => {
        const indicesToCheck = [
            surveyQuestions[0].map((question) => question.id),
            surveyQuestions[1].map((question) => question.id),
            surveyQuestions[2].map((question) => question.id),
            surveyQuestions[3].map((question) => question.id)
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
                //router.push("./cockpit")
            }
        } else {
            alert("Bitte alle Fragen antworten!")
        }
    }

    const toggleValueAtIndex = (index) => {
        setIsExpanded((prevState) => {
            // Create a copy of the previous state
            const newState = [...prevState]

            // Update the specific index with its inverse value
            newState[index] = !newState[index]

            // Return the updated state
            return newState
        })
    }

    if (isLoading) {
        return <RootLayout show_billboard={true} />
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
                        <div className='flex my-2 px-4 items-center place-content-between pr-10'>
                            <h3>Die Vorlesung</h3>
                            <p
                                className={`text-text-grey ${blockFilled[0] ? "block" : "hidden"}`}
                                onClick={(e) => toggleValueAtIndex(0)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`flex group-hover:text-lunapurple  ${
                                        isExpanded[0] ? "fa-rotate-270" : "fa-rotate-90"
                                    }  inline-block w-2 mx-1.5`}
                                />
                            </p>
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
                                key={index}
                                maintext={question.maintext}
                                scale={4}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white overflow-hidden rounded-lg px-2 pt-3 pb-7 mb-12 border-2 ${
                            !isExpanded[1] ? "h-16" : ""
                        } ${blockFilled[1] ? "border-lunagreen " : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4 items-center place-content-between pr-10'>
                            <h3>Ich fühle mich...</h3>
                            <p
                                className={`text-text-grey ${blockFilled[1] ? "block" : "hidden"}`}
                                onClick={(e) => toggleValueAtIndex(1)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`flex group-hover:text-lunapurple  ${
                                        isExpanded[1] ? "fa-rotate-270" : "fa-rotate-90"
                                    }  inline-block w-2 mx-1.5`}
                                />
                            </p>
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
                                key={index}
                                maintext={question.maintext}
                                scale={4}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white rounded-lg overflow-hidden transition-all ease-in-out delay-150 px-2 pt-3 pb-7 mb-12 border-2 ${
                            !isExpanded[2] ? "h-16" : ""
                        } ${blockFilled[2] ? "border-lunagreen" : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4 items-center place-content-between pr-10'>
                            <h3>Wie ich meine Fähigkeit(en) einschätze</h3>
                            <p
                                className={`text-text-grey ${blockFilled[2] ? "block" : "hidden"}`}
                                onClick={(e) => toggleValueAtIndex(2)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`flex group-hover:text-lunapurple  ${
                                        isExpanded[2] ? "fa-rotate-270" : "fa-rotate-90"
                                    }  inline-block w-2 mx-1.5`}
                                />
                            </p>
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
                                key={index}
                                scale={4}
                                maintext={question.maintext}
                                onChange={(isChecked) => handleOptionChange(question.id, isChecked)}
                            />
                        ))}
                    </div>
                    <div
                        className={`bg-white overflow-hidden rounded-lg px-2 pt-3 pb-7 mb-12  border-2 ${
                            !isExpanded[3] ? "h-16" : ""
                        } ${blockFilled[3] ? "border-lunagreen" : "border-transparent"}`}
                    >
                        <div className='flex my-2 px-4 items-center place-content-between pr-10'>
                            <h3>Außerhalb des Klassenzimmers</h3>
                            <p
                                className={`text-text-grey ${blockFilled[3] ? "block" : "hidden"}`}
                                onClick={(e) => toggleValueAtIndex(3)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`flex group-hover:text-lunapurple  ${
                                        isExpanded[3] ? "fa-rotate-270" : "fa-rotate-90"
                                    }  inline-block w-2 mx-1.5`}
                                />
                            </p>
                        </div>
                        <div className='flex items-center w-full my-2 px-4'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Bitte angeben, wie weit .... </p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-3'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Selten/Wenig
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Öfters/Viel
                                </p>
                            </div>
                        </div>
                        {surveyQuestions[3].map((question, index) => (
                            <SurveyQuestion
                                key={index}
                                maintext={question.maintext}
                                scale={4}
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
