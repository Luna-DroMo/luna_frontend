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
    {id: "bfi_01", question: "Ich bin eher ruhig.", subtitle: ""},
    {id: "bfi_02", question: "Ich bin einfühlsam, warmherzig.", subtitle: ""},
    {id: "bfi_03", question: "Ich bin unordentlich.", subtitle: ""},
    {id: "bfi_04", question: "Ich mache mir oft Sorgen.", subtitle: ""},
    {
        id: "bfi_05",
        question: "Ich kann mich für Kunst, Musik und Literatur begeistern.",
        subtitle: ""
    },
    {id: "bfi_06", question: "Ich neige dazu, die Führung zu übernehmen.", subtitle: ""},
    {id: "bfi_07", question: "Ich bin manchmal unhöflich und schroff.", subtitle: ""},
    {id: "bfi_08", question: "Ich neige dazu, Aufgaben vor mir herzuschieben.", subtitle: ""},
    {id: "bfi_09", question: "Ich bin oft deprimiert, niedergeschlagen.", subtitle: ""},
    {id: "bfi_10", question: "Mich interessieren abstrakte Überlegungen wenig.", subtitle: ""},
    {id: "bfi_11", question: "Ich bin voller Energie und Tatendrang.", subtitle: ""},
    {
        id: "bfi_12",
        question: "Ich schenke anderen leicht Vertrauen, glaube an das Gute im Menschen.",
        subtitle: ""
    },
    {id: "bfi_13", question: "Ich bin verlässlich, auf mich kann man zählen.", subtitle: ""},
    {
        id: "bfi_14",
        question: "Ich bin ausgeglichen, nicht leicht aus der Ruhe zu bringen.",
        subtitle: ""
    },
    {id: "bfi_15", question: "Ich bin originell, entwickle neue Ideen.", subtitle: ""}
]

export default function Main({model}) {
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const router = useRouter()
    const [userRole, setUserRole] = useState(null)

    const [error_message, setErrorMessage] = useState("")
    const [request, setRequest] = useState([])

    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

            try {
                const response = await axios.get(
                    `
                    ${url}/api/getUserType/${user.id}`
                )

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
    } else {
        // Data points

        const handleUserDataUpdate = async (e) => {
            e.preventDefault()
            console.log("Writing:", request)

            try {
                const response = await axios.post(`${url}/api/${user.id}/forms/8`, request)

                router.push("/cockpit")
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

        let forms1 = [
            {name: "Motivation", status: 2, item: 2},
            {name: "Positive - Negative", status: 2, item: 3},
            {name: "Persönlichkeitsskala", status: 1, item: 4}
        ]

        model = {name: "Persönlichkeit"}

        return (
            <InputLayout show_main_links={false}>
                <div className='input_progbar'>
                    <Progressbar forms={forms1} current_form={model.name} />
                </div>
                <div className='input_mainbody'>
                    <main className='flex-row justify-between px-10 pt-10'>
                        <form onSubmit={handleUserDataUpdate}>
                            <h1 className='tracking-wider text-xl'>{model.name}</h1>
                            <p className='mb-10'>
                                This section covers stuff about BFI Personality questionnaire
                            </p>
                            {request.map((response) => {
                                const question = questions.find(
                                    (q) => q.id === response.question_id
                                )
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
                                    onClick={(e) => router.push("./panas_input")}
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
}
