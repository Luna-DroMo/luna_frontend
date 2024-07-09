import Image from "next/image"
import InputLayout from "@/components/InputLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import {Progressbar} from "@/components/InputProgressTracker"
import React from "react"
import {useAuth} from "../../components/AuthProvider"
import {useState} from "react"
import axios from "axios"
import Router, {useRouter} from "next/router"
import {ErrorBanner} from "@/components/Errors"
import {hasNullValue} from "@/utils/utils"
import {useEffect} from "react"
import {url} from "@/utils/data"

const questions = [
    {id: "Se2", question: "Ich bin gut in meinem Fachgebiet.", subtitle: ""},
    {id: "Iv2", question: "Ich beschäftige mich gerne mit meinem Fachgebiet.", subtitle: ""},
    {id: "Iv4", question: "Ich finde mein Fachgebiet spannend.", subtitle: ""},
    {
        id: "Uv3",
        question: "Mit meinen Fach-Kenntnissen kann ich andere beeindrucken.",
        subtitle: ""
    },
    {id: "Av4", question: "Gute Leistungen in meinem/Studium sind mir wichtig.", subtitle: ""},
    {
        id: "Uv1",
        question:
            "Für meine berufliche Zukunft wird es sich auszahlen, gut in meinem Fachgebiet zu sein.",
        subtitle: ""
    },
    {
        id: "Iv3",
        question: "Es macht mir Spaß, mich mit meinen fachlichen Themen zu beschäftigen.",
        subtitle: ""
    },
    {
        id: "Co1",
        question:
            "Ich befürchte, durch den zeitlichen Aufwand im aktuellen Studium wertvolle Freundschaften zu verlieren.",
        subtitle: ""
    },
    {
        id: "Co5",
        question:
            "Ich befürchte, dass ich mit dem Stress, den das aktuellen Studium mit sich bringt, nicht umgehen kann.",
        subtitle: ""
    },
    {id: "Av2", question: "Mein Fachgebiet hat für mich keine große Bedeutung.", subtitle: ""},
    {id: "Av3", question: "Es ist mir wichtig, meine fachliche Inhalte zu meistern.", subtitle: ""},
    {id: "Se1", question: "Für mein Fachgebiet fehlt mir die notwendige Begabung.", subtitle: ""},
    {
        id: "Co4",
        question:
            "Ich habe den Eindruck, als müsse man für den Abschluss meines aktuellen Studiums mehr Anstrengung investieren, als ich das möchte.",
        subtitle: ""
    },
    {
        id: "Co2",
        question:
            "Ich befürchte, dass mir durch mein aktuelles Studium Zeit für andere Aktivitäten, die ich gerne verfolgen möchte, verloren geht.",
        subtitle: ""
    },
    {
        id: "Uv2",
        question:
            "Gute Leistungen in meinem Fachgebiet werden mir für Beruf und Karriere viele Vorteile bringen.",
        subtitle: ""
    },
    {
        id: "Co3",
        question: "Die Beschäftigung mit meinen fachlichen Themen kostet mich eine Menge Energie.",
        subtitle: ""
    },
    {id: "Se3", question: "Mein Fachgebiet fällt mir leicht.", subtitle: ""},
    {
        id: "Uv4",
        question:
            "Wenn ich in meinem Fachgebiet viel weiß, komme ich damit bei meinen Kommilitonen gut an.",
        subtitle: ""
    },
    {id: "Se4", question: "Mein Fachgebiet liegt mir nicht besonders.", subtitle: ""},
    {id: "Iv1", question: "Mein Fachgebiet macht mir Spaß.", subtitle: ""},
    {
        id: "Co6",
        question:
            "Es wäre mir peinlich herauszufinden, wenn meine Leistungen im aktuellen Studium schlechter wären als die meiner Kommilitonen.",
        subtitle: ""
    },
    {id: "Av1", question: "Mein Fachgebiet entspricht meinen persönlichen Neigungen.", subtitle: ""}
]

let forms1 = [
    {name: "AIST", status: 2, item: 1},
    {name: "PANAS", status: 2, item: 2},
    {name: "Motivation", status: 1, item: 3}
]

export default function motivation_input({model}) {
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const router = useRouter()
    const [userRole, setUserRole] = useState(null)
    const [request, setRequest] = useState([])
    const [error_message, setErrorMessage] = useState("")

    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(`${url}/api/getUserType/${user.id}`)

                setUserRole(response.data)
            } catch (error) {
                console.log("error during login", error)
            }
        }

        getUserRole()
    })

    // Funky logic to only allow non-students to create modules, and to hide pre-rendering
    if (userRole === null) {
        return <p> </p>
    } else if (userRole !== 1) {
        router.push("/cockpit/")
    }

    const handleResponseChange = (question_id, newValue) => {
        console.log("Updating question:", question_id, "with value:", newValue) // Debugging output

        setRequest((prev) => {
            const existingResponseIndex = prev.findIndex(
                (response) => response.question_id === question_id
            )

            if (existingResponseIndex > -1) {
                // If found, update the existing response
                return prev.map((response, index) =>
                    index === existingResponseIndex ? {...response, value: newValue} : response
                )
            } else {
                // If not found, add a new response
                return [...prev, {question_id: question_id, value: newValue}]
            }
        })
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault()

        const unansweredQuestions = questions.filter(
            (question) => !request.some((response) => response.question_id === question.id)
        )

        if (unansweredQuestions.length > 0) {
            setErrorMessage("Bitte alle Fragen beantworten.")
            return
        }

        try {
            const response = await axios.post(`${url}/api/${user.id}/forms/7`, request)

            router.push("./input_complete")
        } catch (error) {
            console.log("error", error)
            setErrorMessage(error.message)
        }
    }

    return (
        <InputLayout show_main_links={false}>
            <div className='input_progbar'>
                <Progressbar forms={forms1} current_form='Motivation' />
            </div>
            <div className='input_mainbody'>
                <main className='flex-row justify-between px-10 pt-10'>
                    <form onSubmit={handleFormSubmission}>
                        <h1 className='tracking-wider text-xl mb-5'>{"Motivation"}</h1>
                        <p className='mb-10 text-lightgrey'>
                            Der Motivationsfragebogen zielt darauf ab, die unterschiedlichen
                            Motivationsmuster und -stärken von Personen systematisch zu erfassen.
                            Der Fragebogen untersucht die Unterschiede in Faktoren, die „Verhalten
                            am Arbeitsplatz aktivieren, lenken und aufrechterhalten“. Der
                            Motivationsfragebogen besteht aus 18 Skalen, die in fünf separate
                            Faktoren unterteilt sind: Selbstkonzept, Erreichungswert, Kosten,
                            intrinsische Motivation und extrinsische Motivation.
                        </p>
                        <div className='flex items-center w-full my-2'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Im Allgemeinen fühle ich mich:</p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-1'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Gar nicht
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Äußerst
                                </p>
                            </div>
                        </div>
                        {questions.map((question, index) => {
                            return (
                                <>
                                    <InputRow
                                        key={question.id}
                                        type='likert'
                                        item={question}
                                        maintext={question.question}
                                        options={[0, 1, 2, 3, 5]}
                                        subtitle={null}
                                        onChange={(e) =>
                                            handleResponseChange(question.id, e.target.value)
                                        }
                                    />
                                    <div
                                        className={`block ${
                                            (index + 1) % 5 === 0 ? "pb-5" : "pb-0"
                                        }`}
                                    />
                                </>
                            )
                        })}
                        {
                            /* Error block */
                            error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
                        }
                        <div className='flex justify-evenly w-3/5 mt-24'>
                            <FormButton
                                text='Zurück zur Übersicht'
                                onClick={(e) => router.push("../account_setup_overview")}
                                type='reset'
                            />
                            <FormButton
                                text='Überspringen'
                                onClick={(e) => router.push("../cockpit")}
                                type='reset'
                            />
                            <FormButton text='Weiter' highlighted='true' />
                        </div>
                    </form>
                </main>
            </div>
        </InputLayout>
    )
}
