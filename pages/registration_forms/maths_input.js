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
import {useEffect} from "react"
import {url} from "@/utils/data"

const questions = [{id: 1, question: "MATH", subtitle: "What is your maths score"}]

export default function Main({model}) {
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const router = useRouter()

    // Data points
    const [math, setMath] = useState("")
    const [error_message, setErrorMessage] = useState("")
    const [userRole, setUserRole] = useState(null)
    const [request, setRequest] = useState([
        {
            question_id: 1,
            value: ""
        }
    ])

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
    } else {
        // pass
    }

    const handleUserDataUpdate = async (e) => {
        e.preventDefault()
        console.log("Writing:", request)
        try {
            const response = await axios.post(`${url}/api/${user.id}/forms/6`, request)

            router.push("./motivation_input")
        } catch (error) {
            console.log("error", error)
            setErrorMessage(error.message)
        }
    }
    const handleResponseChange = (question_id, newValue) => {
        setRequest((prevResponses) =>
            prevResponses.map((response) =>
                response.question_id === question_id ? {...response, value: newValue} : response
            )
        )
    }

    let forms1 = [
        {name: "Internale-Externale Kontrollüberzeugung", status: 2, item: 3},
        {name: "Fachwissen Mathematik", status: 1, item: 4},
        {name: "Motivation", status: 0, item: 5}
    ]

    model = {name: "Maths Skills"}

    return (
        <InputLayout show_main_links={false}>
            <div className='input_progbar'>
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className='input_mainbody'>
                <main className='flex-row justify-between px-10 pt-10'>
                    <form onSubmit={handleUserDataUpdate}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
                        <p className='mb-10'>This section covers stuff about Maths Skills</p>
                        {request.map((response) => {
                            const question = questions.find((q) => q.id === response.question_id)
                            return (
                                <InputRow
                                    key={response.question_id}
                                    type='number' // or "number", depending on your data
                                    maintext={
                                        question
                                            ? question.question
                                            : `Question ${response.question_id}`
                                    }
                                    subtitle={question.subtitle}
                                    value={response.value}
                                    onChange={(e) =>
                                        handleResponseChange(response.question_id, e.target.value)
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
