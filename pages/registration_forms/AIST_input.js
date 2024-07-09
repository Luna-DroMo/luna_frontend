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
    {id: 1, question: "mit Maschinen oder technischen Geräten zu arbeiten.", subtitle: ""},
    {id: 2, question: "in einem Versuchslabor Experimente durchzuführen.", subtitle: ""},
    {
        id: 3,
        question: "etwas nach künstlerischen Gesichtspunkten zu gestalten.",
        subtitle: ""
    },
    {id: 4, question: "andere Personen zu betreuen oder zu pflegen.", subtitle: ""},
    {id: 5, question: "eine Diskussion zu leiten.", subtitle: ""},
    {id: 6, question: "eine Buchhaltung zu führen.", subtitle: ""},
    {id: 7, question: "in einen Computer Teile einzubauen.", subtitle: ""},
    {id: 8, question: "wissenschaftliche Artikel zu lesen.", subtitle: ""},
    {
        id: 9,
        question: "Dinge zu tun, bei denen es auf Kreativität und Phantasie ankommt.",
        subtitle: ""
    },
    {id: 10, question: "sich die Probleme anderer Menschen anzuhören.", subtitle: ""},
    {id: 11, question: "für eine Sache in der Öffentlichkeit aufzutreten.", subtitle: ""},
    {id: 12, question: "Geschäftsbriefe zu schreiben.", subtitle: ""},
    {id: 13, question: "Konstruktionspläne zu zeichnen.", subtitle: ""},
    {id: 14, question: "sich mit unerforschten Dingen zu beschäftigen.", subtitle: ""},
    {id: 15, question: "Dinge schön zu gestalten (Formen, Verzieren, Schmücken).", subtitle: ""},
    {id: 16, question: "sich für die Anliegen Anderer einzusetzen.", subtitle: ""},
    {
        id: 17,
        question: "Andere von Etwas zu überzeugen oder zu Etwas zu veranlassen.",
        subtitle: ""
    },
    {id: 18, question: "Angebote einzuholen und zu vergleichen.", subtitle: ""},
    {id: 19, question: "elektrische Geräte oder Anlagen zu bauen.", subtitle: ""},
    {
        id: 20,
        question: "chemische, physikalische oder biologische Versuche durchzuführen.",
        subtitle: ""
    },
    {id: 21, question: "Bilder zu malen, zu zeichnen.", subtitle: ""},
    {id: 22, question: "hilfsbedürftige Kinder oder Erwachsene zu betreuen.", subtitle: ""},
    {id: 23, question: "mit anderen Menschen zu verhandeln.", subtitle: ""},
    {id: 24, question: "über Etwas Aufzeichnungen oder Listen zu führen.", subtitle: ""},
    {id: 25, question: "Etwas nach einem Plan oder einer Skizze anzufertigen.", subtitle: ""},
    {id: 26, question: "die Ursache eines Problems zu erforschen.", subtitle: ""},
    {id: 27, question: "Etwas mit sprachlichen Mitteln künstlerisch zu gestalten.", subtitle: ""},
    {id: 28, question: "sich in die Situation anderer Menschen hineinzudenken.", subtitle: ""},
    {id: 29, question: "das Amt des Sprechers in einer Gruppe zu übernehmen.", subtitle: ""},
    {id: 30, question: "eine Abrechnung zu kontrollieren.", subtitle: ""}
]

const breadcrump = [
    {name: "Allgemeiner Interessen Struktur-Test", status: 1, item: 1},
    {name: "PANAS", status: 0, item: 2},
    {name: "Motivation", status: 0, item: 3}
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
        const unansweredQuestions = questions.filter(
            (question) => !request.some((response) => response.question_id === question.id)
        )

        if (unansweredQuestions.length > 0) {
            setErrorMessage("Bitte alle Fragen beantworten.")
            return
        }

        try {
            const response = await axios.post(`${url}/api/${user.id}/forms/3`, request)

            router.push("./panas_input")
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
                        <h1 className='tracking-wider text-xl mb-5'>
                            {"Allgemeiner Interessen Struktur-Test (AIST)"}
                        </h1>
                        <p className='mb-10 text-lightgrey'>
                            Der Allgemeine Interessen-Struktur-Test / Umwelt-Struktur-Test basiert
                            auf der Berufswahl- und Laufbahntheorie des amerikanischen Psychologen
                            John L. Holland. Diese Theorie geht davon aus, dass
                            Persönlichkeitsmerkmale und Berufscharakteristika miteinander in
                            Beziehung stehen. Holland meint, dass die Persönlichkeit eines Menschen
                            sich in der Wahl der beruflichen Laufbahn widerspiegelt. Sein Ansatz
                            lässt sich so zusammenfassen:
                            <ul className='list-disc ml-10 mt-5 text-lightgrey'>
                                <li className='pb-2'>
                                    Die Wahl eines Berufes ist Ausdruck der Persönlichkeit, obwohl
                                    auch günstige Gelegenheiten eine Rolle spielen.
                                </li>
                                <li className='pb-2'>
                                    Menschen in derselben Berufsgruppe haben ähnliche
                                    Persönlichkeitsmerkmale und Laufbahnmuster.
                                </li>
                                <li className='pb-2'>
                                    Menschen in derselben Berufsgruppe reagieren in bestimmten
                                    Berufssituationen ähnlich.
                                </li>
                                <li className='pb-2'>
                                    Berufliche Leistung, Stabilität in der Laufbahn und
                                    Zufriedenheit im Beruf hängen davon ab, wie gut
                                    Persönlichkeitsmerkmale und berufliches Umfeld übereinstimmen.
                                </li>
                            </ul>
                        </p>
                        <div className='flex items-center w-full my-2'>
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>
                                    Ich stimme den folgenden Aussagen zu: Ich mag es...
                                </p>
                            </div>
                            <div className='flex justify-between w-72 text-lunapurple pr-1'>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Nicht gerne
                                </p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'></p>
                                <p className='flex-1 grid py-1 justify-items-center rounded'>
                                    Gerne
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
                                        options={[0, 1, 2, 3, 4, 5]}
                                        maintext={question.question}
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
