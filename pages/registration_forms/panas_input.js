import Image from "next/image"
import InputLayout from "@/components/InputLayout.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import {Progressbar} from "@/components/InputProgressTracker"
import React from "react"
import {useAuth} from "../../components/AuthProvider"
import {useState} from "react"
import axios from "axios"
import Router, {useRouter} from "next/router"
import {hasNullValue} from "@/utils/utils"
import {ErrorBanner} from "@/components/Errors"
import {useEffect} from "react"

const questions = [
    {id: "panp_01", question: "Aufmerksam", subtitle: ""},
    {id: "pann_01", question: "Nervös", subtitle: ""},
    {id: "panp_02", question: "Entschlossen", subtitle: ""},
    {id: "pann_02", question: "Erschrocken", subtitle: ""},
    {id: "panp_03", question: "Stolz", subtitle: ""},
    {id: "pann_03", question: "Schuldig", subtitle: ""},
    {id: "panp_04", question: "Stark", subtitle: ""},
    {id: "pann_04", question: "Gereizt", subtitle: ""},
    {id: "panp_05", question: "Aktiv", subtitle: ""},
    {id: "pann_05", question: "Ängstlich", subtitle: ""},
    {id: "panp_06", question: "Interessiert", subtitle: ""},
    {id: "pann_06", question: "Feindselig", subtitle: ""},
    {id: "panp_07", question: "Begeistert", subtitle: ""},
    {id: "pann_07", question: "Beschämt", subtitle: ""},
    {id: "panp_08", question: "Angeregt", subtitle: ""},
    {id: "pann_08", question: "Durcheinander", subtitle: ""},
    {id: "panp_09", question: "Wach", subtitle: ""},
    {id: "pann_09", question: "Bekümmert", subtitle: ""},
    {id: "panp_10", question: "Freudig erregt", subtitle: ""},
    {id: "pann_10", question: "Verärgert", subtitle: ""}
]

export default function Main({model}) {
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
    const router = useRouter()
    const [userRole, setUserRole] = useState(null)
    const [PA, setPA] = useState(null)
    const [NA, setNA] = useState(null)
    const [error_message, setErrorMessage] = useState("")
    const [blockFilled, setBlockFilled] = useState([])
    const [selectedOptions, setSelectedOptions] = useState({})

    const [request, setRequest] = useState([])

    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

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
        return <p> </p>
    } else if (userRole !== 1) {
        router.push("/cockpit/")
    }

    // Function to handle change in selected option for a question
    const handleOptionChange = (questionIndex, optionIndex, isChecked) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [questionIndex]: true // Store whether the option is checked
        }))
        console.log("updating")
        console.log("SelOp", selectedOptions)
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

            router.push("./motivation_input")
        } catch (error) {
            console.log("error", error)
            setErrorMessage(error.message)
        }
    }

    let forms1 = [
        {name: "AIST", status: 2, item: 1},
        {name: "PANAS", status: 1, item: 2},
        {name: "MOTIVATION", status: 0, item: 3}
    ]
    model = {name: "Postive-Negative"}

    return (
        <InputLayout show_main_links={false}>
            <div className='input_progbar'>
                <Progressbar forms={forms1} current_form={model.name} />
            </div>
            <div className='input_mainbody'>
                <main className='flex-row justify-between px-10 pt-10'>
                    <form onSubmit={handleFormSubmission}>
                        <h1 className='tracking-wider text-xl'>{model.name}</h1>
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
