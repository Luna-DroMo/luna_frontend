import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import React from "react"
import {useState} from "react"
import {hasNullValue} from "@/utils/utils"
import axios from "axios"
import {useRouter} from "next/router"
import {Button} from "@/components/Buttons"
import {useEffect} from "react"
import {useAuth} from "../components/AuthProvider"
import {faC} from "@fortawesome/free-solid-svg-icons"
import {url} from "@/utils/data"

export default function Main() {
    const [code, setCode] = useState("")
    const [moduleName, setModuleName] = useState("")
    const [faculty, setFaculty] = useState("")
    const [modulePassword, setModulePassword] = useState("")
    const [modulePassword_val, setModulePassword_val] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [error_message, setErrorMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [userRole, setUserRole] = useState(null)

    const router = useRouter()
    const {user, isAuthenticated, saveUser, clearUser} = useAuth()
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

    const FAKE_FACULTIES_FROM_ENDPOINT = {"----": 0, Stats: 1, "Non-Existent": 2}
    // Funky logic to only allow non-students to create modules, and to hide pre-rendering

    if (userRole === null) {
        return <></>
    } else if (userRole === 1) {
        router.push("/cockpit/")
    } else {
        const data = {
            code: code,
            name: moduleName,
            university: 2, // 1: Stats
            password: modulePassword,
            start_date: startDate,
            end_date: endDate,
            survey_days: "1" // 1: monday, 2: tuesday,... etc
        }

        const handleModuleCreation = async (e) => {
            e.preventDefault()
            console.log("Writing:", data)

            if (false) {
                //hasNullValue(data)) {
                setErrorMessage("Missing values")
                console.log("here")
            } else {
                if (modulePassword === modulePassword_val) {
                    try {
                        const response = await axios.post(
                            `${url}/api/${user.id}/module/create`,
                            data
                        )
                        console.log("Created Module?")
                        setSubmitted(true)
                        //router.push({pathname:"./moduleCreationSuccess/",query:{module: JSON.stringify(data)}},
                        //"./moduleCreationSuccess/")
                    } catch (error) {
                        console.log("error", error)
                        setErrorMessage(error.message)
                    }
                } else {
                    setErrorMessage("Passwords do not match")
                    console.log("Some error")
                }
            }
        }
        if (submitted) {
            return (
                <RootLayout>
                    <main className='flex-row justify-between px-10 pt-10'>
                        <h1 className='tracking-wider text-xl text-lunapurple mb-8'>
                            Modul Erstellt!
                        </h1>
                        <div className='h-8'></div>
                        <InputRow
                            value={data["code"]}
                            readOnly={true}
                            type='text'
                            maintext='Module ID'
                            subtitle='Universitäts-interne Identifikationsnummer. Z.B. CS101'
                        />
                        <InputRow
                            value={data["name"]}
                            readOnly={true}
                            type='text'
                            maintext='Module Name'
                            subtitle='Name des Moduls. Z.B. Einführung in die Datenanalyse'
                        />

                        <div className='h-8'></div>
                        <InputRow
                            value={data["password"]}
                            readOnly={true}
                            type='text'
                            maintext='Passwort'
                            subtitle='Das Passwort wird bei dem Beitreten des Moduls benötigt'
                        />
                        <div className='h-8'></div>
                        <InputRow
                            value={data["start_date"]}
                            readOnly={true}
                            type='date'
                            maintext='Startdatum'
                            subtitle='Begin der Veranstaltung'
                        />
                        <InputRow
                            value={data["end_date"]}
                            readOnly={true}
                            type='date'
                            maintext='Enddatum'
                            subtitle='End der Veranstaltung'
                        />

                        <div className='flex justify-evenly w-3/5 mt-24'>
                            <button
                                onClick={(e) => window.location.reload()}
                                className='border border-lunapurple rounded-xl w-44 h-10 px-4 text-lunapurple text-base leading-4 hover:border-lunagreen hover:bg-lunagreen'
                            >
                                Noch ein Module erstellen
                            </button>
                            <Button text='zum Cockpit' highlighted='True' href='/cockpit'></Button>
                        </div>
                    </main>
                </RootLayout>
            )
        } else {
            return (
                <RootLayout>
                    <main className='flex-row justify-between px-10 pt-10'>
                        <form onSubmit={handleModuleCreation}>
                            <h1 className='text-2xl'>Modul Erstellen</h1>
                            <h3 className='text-text-grey'>
                                Trage bitte alle Informationen ein, um ein Modul anzulegen.
                            </h3>

                            <div className='rounded-xl bg-white px-5 py-5 mb-4 mt-8'>
                                <InputRow
                                    type='text'
                                    maintext='Module ID'
                                    subtitle='Universitäts-interne Identifikationsnummer. Z.B. CS101'
                                    onChange={(e) => {
                                        setCode(e.target.value)
                                    }}
                                />
                                <InputRow
                                    type='text'
                                    maintext='Module Name'
                                    subtitle='Name des Moduls. Z.B. Einführung in die Datenanalyse'
                                    onChange={(e) => {
                                        setModuleName(e.target.value)
                                    }}
                                />
                            </div>

                            <div className='rounded-xl bg-white px-5 py-5 mb-4'>
                                <InputRow
                                    type='password'
                                    maintext='Passwort'
                                    subtitle='Das Passwort wird bei dem Beitreten des Moduls benötigt'
                                    onChange={(e) => {
                                        setModulePassword(e.target.value)
                                    }}
                                />
                                <InputRow
                                    type='password'
                                    maintext='Passwort wiederholen'
                                    subtitle={
                                        modulePassword !== modulePassword_val &&
                                        modulePassword_val.length >= 4 ? (
                                            <span className='text-lunared'>
                                                Passwörter stimmen nicht überein!
                                            </span>
                                        ) : (
                                            <span> &nbsp; </span>
                                        )
                                    }
                                    onChange={(e) => {
                                        setModulePassword_val(e.target.value)
                                    }}
                                />
                            </div>

                            <div className='rounded-xl bg-white px-5 py-5 mb-4'>
                                <InputRow
                                    type='date'
                                    maintext='Startdatum'
                                    subtitle='Begin der Veranstaltung'
                                    onChange={(e) => {
                                        setStartDate(e.target.value)
                                    }}
                                />
                                <InputRow
                                    type='date'
                                    maintext='Enddatum'
                                    subtitle='End der Veranstaltung'
                                    onChange={(e) => {
                                        setEndDate(e.target.value)
                                    }}
                                />
                            </div>

                            {/*
                            <div className='rounded-xl bg-white px-5 py-5 mb-4 hidden'>
                                <InputRow
                                    type='dropdown'
                                    options={["Vollständig", "Reduziert"]}
                                    maintext='Befragungsart'
                                    subtitle='Die Befragungsart kann nach der Erstellung nicht mehr geändert werden!'
                                />
                                <div className='w-100 h-15 py-2 px-5 bg-[#FFF0CB] rounded'>

                                    <p className='text-text-grey'>
                                        [NEEDS TO BE DYNAMIC] Achtung! Analysen und Prognosen
                                        eingeschränkt. Für vollständige Analysen, bitte “Standard”
                                        wählen.
                                    </p>
                                </div>
                                <div className='h-12' />
                                <div className='flex-grow'>
                                    <p>Eigene Frage festlegen</p>
                                    <p className='subtitle text-text-grey'>
                                        Du kannst bis zu 2 eigene Fragen zur Befragung hinzufügen.
                                        Die Antworten werden dir angezeigt aber nicht in unseren
                                        Analysen verwendet.{" "}
                                    </p>
                                </div>
                                <hr className='mt-5 border-lightgrey' />
                                
                            </div>
                                */}
                            {/* <div className='rounded-xl bg-white px-5 py-5 mb-4 hidden'>
                                <InputRow
                                    type='radio'
                                    options={["MO", "DI", "MI", "DO", "FR", "SA", "SO"]}
                                    maintext='Bitte die Tage wählen, an denen die Befragungen stattfinden sollen. '
                                    subtitle='Jede einzelne Befragung ist für 3 Tagen aktiv.'
                                />
                                <InputRow
                                    type='date'
                                    maintext='Ausnahme Tage [NEEDS PROPER IMPLEMENTATION]'
                                    subtitle='Falls die Befragung an manchen Tagen nicht stattfinden soll, können diese hier festgelegt werden.'
                                />
                            </div> */}
                            <div className='rounded-xl bg-white px-5 py-5 mb-4 hidden'>
                                <InputRow
                                    type='checkbox'
                                    options={["Privat"]}
                                    maintext='Modul als Privat markieren'
                                    subtitle='Private Module werden nicht in der Suche nach Modulen erscheinen. Ein Passwort wird weiterhin benötigt.'
                                />
                            </div>
                            <div className='flex justify-evenly w-3/5 mt-24'>
                                <FormButton
                                    text='Abbrechen'
                                    onClick={(e) => router.push("./cockpit")}
                                />
                                <FormButton
                                    text='Modul Erstellen'
                                    highlighted='true'
                                    type='submit'
                                />
                            </div>
                        </form>
                    </main>
                </RootLayout>
            )
        }
    }
}
