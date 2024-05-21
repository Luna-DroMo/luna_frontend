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
    {id: "Se2", question: "Ich bin gut in Mathematik.", subtitle: ""},
    {id: "Iv2", question: "Ich beschäftige mich gerne mit Mathematik.", subtitle: ""},
    {id: "Iv4", question: "Ich finde Mathematik spannend.", subtitle: ""},
    {id: "Uv3", question: "Mit Mathe-Kenntnissen kann ich andere beeindrucken.", subtitle: ""},
    {id: "Av4", question: "Gute Leistungen in Mathe sind mir wichtig.", subtitle: ""},
    {
        id: "Uv1",
        question: "Für meine berufliche Zukunft wird es sich auszahlen, gut in Mathematik zu sein.",
        subtitle: ""
    },
    {
        id: "Iv3",
        question: "Es macht mir Spaß, mich mit mathematischen Themen zu beschäftigen.",
        subtitle: ""
    },
    {
        id: "Co1",
        question:
            "Ich befürchte, durch den zeitlichen Aufwand im Mathematikstudium wertvolle Freundschaften zu verlieren.",
        subtitle: ""
    },
    {
        id: "Co5",
        question:
            "Ich befürchte, dass ich mit dem Stress, den das Mathematikstudium mit sich bringt, nicht umgehen kann.",
        subtitle: ""
    },
    {id: "Av2", question: "Mathematik hat für mich keine große Bedeutung.", subtitle: ""},
    {id: "Av3", question: "Es ist mir wichtig, mathematische Inhalte zu meistern.", subtitle: ""},
    {id: "Se1", question: "Für Mathematik fehlt mir die notwendige Begabung.", subtitle: ""},
    {
        id: "Co4",
        question:
            "Ich habe den Eindruck, als müsse man für den Abschluss eines Mathematikstudiums mehr Anstrengung investieren, als ich das möchte.",
        subtitle: ""
    },
    {
        id: "Co2",
        question:
            "Ich befürchte, dass mir durch das Mathematikstudium Zeit für andere Aktivitäten, die ich gerne verfolgen möchte, verloren geht.",
        subtitle: ""
    },
    {
        id: "Uv2",
        question:
            "Gute Leistungen in Mathematik werden mir für Beruf und Karriere viele Vorteile bringen.",
        subtitle: ""
    },
    {
        id: "Co3",
        question: "Die Beschäftigung mit Mathe kostet mich eine Menge Energie.",
        subtitle: ""
    },
    {id: "Se3", question: "Mathematik fällt mir leicht.", subtitle: ""},
    {
        id: "Uv4",
        question: "Wenn ich in Mathe viel weiß, komme ich damit bei meinen Kommilitonen gut an.",
        subtitle: ""
    },
    {id: "Se4", question: "Mathematik liegt mir nicht besonders.", subtitle: ""},
    {id: "Iv1", question: "Mathematik macht mir Spaß.", subtitle: ""},
    {
        id: "Co6",
        question:
            "Es wäre mir peinlich herauszufinden, wenn meine Leistungen im Mathematikstudium schlechter wären als die meiner Kommilitonen.",
        subtitle: ""
    },
    {id: "Av1", question: "Mathematik entspricht meinen persönlichen Neigungen.", subtitle: ""}
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
    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("Writing:", request)

        try {
            const response = await axios.post(`${url}/api/${user.id}/forms/7`, request)

            router.push("./cockpit")
        } catch (error) {
            console.log("error", error)
            setErrorMessage(error.message)
        }
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
        try {
            const response = await axios.post(`${url}/api/${user.id}/forms/7`, request)

            router.push("./bfi_input")
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
                        <h1 className='tracking-wider text-xl'>{"Motivation"}</h1>
                        <p className='mb-10'>This section covers stuff about PANAS questionnaire</p>
                        {questions.map((question, index) => {
                            return (
                                <InputRow
                                    key={question.id}
                                    type='likert'
                                    item={question}
                                    maintext={question.question}
                                    subtitle={null}
                                    onChange={(e) =>
                                        handleResponseChange(question.id, e.target.value)
                                    }
                                />
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
                                onClick={(e) => router.push("./motivation_input")}
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
