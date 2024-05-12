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

const AIST_questions = [
    {id: 1, question: "Mit Maschinen oder technischen Geräten arbeiten.", subtitle: ""},
    {id: 2, question: "In einem Versuchslabor Experimente durchführen.", subtitle: ""},
    {
        id: 3,
        question: "Etwas nach künstlerischen Gesichtspunkten gestalten.",
        subtitle: ""
    },
    {id: 4, question: "Andere Personen betreuen oder pflegen.", subtitle: ""},
    {id: 5, question: "Eine Diskussion leiten", subtitle: ""},
    {id: 6, question: "Eine Buchhaltung führen.", subtitle: ""},
    {id: 7, question: "In einen Computer Teile einbauen.", subtitle: ""},
    {id: 8, question: "Wissenschaftliche Artikel lesen.", subtitle: ""},
    {
        id: 9,
        question: "Dinge tun, bei denen es auf Kreativität und Phantasie ankommt.",
        subtitle: ""
    },
    {id: 10, question: "Sich die Probleme anderer Menschen anhören.", subtitle: ""},
    {id: 11, question: "Für eine Sache in der Öffentlichkeit auftreten.", subtitle: ""},
    {id: 12, question: "Geschäftsbriefe schreiben.", subtitle: ""},
    {id: 13, question: "Konstruktionspläne zeichnen.", subtitle: ""},
    {id: 14, question: "Sich mit unerforschten Dingen beschäftigen.", subtitle: ""},
    {id: 15, question: "Dinge schön gestalten (formen, verzieren, schmücken).", subtitle: ""},
    {id: 16, question: "Sich für die Anliegen anderer einsetzen.", subtitle: ""},
    {id: 17, question: "Andere von etwas überzeugen oder etwas veranlassen.", subtitle: ""},
    {id: 18, question: "Angebote einholen und vergleichen.", subtitle: ""},
    {id: 19, question: "Elektrische Geräte oder Anlagen bauen.", subtitle: ""},
    {
        id: 20,
        question: "Chemische, physikalische oder biologische Versuche durchführen.",
        subtitle: ""
    },
    {id: 21, question: "Bilder malen, zeichnen.", subtitle: ""},
    {id: 22, question: "Hilfsbedürftige Kinder oder Erwachsene betreuen.", subtitle: ""},
    {id: 23, question: "Mit anderen Menschen verhandeln.", subtitle: ""},
    {id: 24, question: "Über etwas Aufzeichnungen oder Listen führen.", subtitle: ""},
    {id: 25, question: "Etwas nach einem Plan oder einer Skizze anfertigen.", subtitle: ""},
    {id: 26, question: "Die Ursache eines Problems erforschen.", subtitle: ""},
    {id: 27, question: "Etwas mit sprachlichen Mitteln künstlerisch gestalten.", subtitle: ""},
    {id: 28, question: "Sich in die Situation anderer Menschen hineindenken.", subtitle: ""},
    {id: 29, question: "Das Amt des Sprechers in einer Gruppe übernehmen.", subtitle: ""},
    {id: 30, question: "Eine Abrechnung kontrollieren.", subtitle: ""}
]

const breadcrump = [
    {name: "AIST", status: 1, item: 1},
    {name: "Kognitive Fähigkeiten", status: 0, item: 2},
    {name: "Internale-Externale Kontrollüberzeugung", status: 0, item: 3}
]

export default function Main({model}) {
    const router = useRouter()
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()

    const [request, setRequest] = useState([])

    const [ErrorMessage, setErrorMessage] = useState("")

    const [userRole, setUserRole] = useState(null)

    useEffect(() => {
        const getUserRole = async (e) => {
            try {
                const response = await axios.get(`https://mz-bdev.de/api/getUserType/${user.id}`)

                setUserRole(response.data)
            } catch (error) {
                console.log("error during login", error)
            }
        }

        getUserRole()
    })

    // Funky logic to only allow non-students to create modules, and to hide pre-rendering
    if (userRole === null) {
        return <p></p>
    } else if (userRole !== 1) {
        router.push("/cockpit")
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
            const response = await axios.post(`https://mz-bdev.de/api/${user.id}/forms/3`, request)

            router.push("./kognitive_faehigkeiten_input")
        } catch (error) {
            console.log("error", error)
            setErrorMessage(error.message)
        }
    }

    return (
        <InputLayout show_main_links={false}>
            <div className='input_progbar'>
                <Progressbar
                    forms={breadcrump}
                    current_form={"Allgemeiner Interessen Struktur-Test"}
                />
            </div>
            <div className='input_mainbody'>
                <main className='flex-row justify-between px-10 pt-10'>
                    <form onSubmit={handleFormSubmission}>
                        <h1 className='tracking-wider text-xl'>
                            {"Allgemeiner Interessen Struktur-Test"}
                        </h1>
                        <p className='mb-10'>
                            This section covers questions about the AIST questionnaire.
                        </p>
                        {AIST_questions.map((question, index) => {
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
                            ErrorMessage !== "" && <ErrorBanner>{ErrorMessage}</ErrorBanner>
                        }
                        <div className='flex justify-evenly w-3/5 mt-24'>
                            <FormButton
                                text='Zurück zur Übersicht'
                                onClick={(e) => router.push("../account_setup_overview")}
                                type='reset'
                            />
                            <FormButton
                                text='Überspringen'
                                onClick={(e) => router.push("./kognitive_faehigkeiten_input")}
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
