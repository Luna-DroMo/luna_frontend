import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import React, {useState} from "react"
import Link from "next/link"
import {useRouter} from "next/router"
import {Button} from "@/components/Buttons"
import Person from "@/components/PersonTag"
import axios from "axios"
import {url} from "@/utils/data"
import {useAuth} from "@/components/AuthProvider"

export default function Main() {
    const {user} = useAuth()
    const router = useRouter()
    const data = router.query

    const [moduleCode, setModuleCode] = useState("")
    const [password, setPassword] = useState("")
    console.log("PAGE RENDERED")

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent default form submission
        console.log("Form Submitted")

        const data = {
            module_code: moduleCode,
            password: password,
            action: "enroll"
        }
        console.log("Clicked", data)

        try {
            const response = await axios.post(`${url}/api/${user.id}/enroll_module`, data)
            console.log("Response:", response)
            // Handle successful response here, e.g., redirect or display a message
        } catch (error) {
            console.error("Fetch error:", error)
        }
    }

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h3 className='mb-8'>Modul Beitreten</h3>

                <div className='rounded-xl bg-white px-5 py-5'>
                    <h3>Nicht gelistetes Modul beitreten</h3>
                    <p className='text-lightgrey'>
                        Um ein nicht gelistetes Module beizutreten, benötigst du von deinem Dozenten
                        ein Anmeldecode und ein Passwort.
                    </p>
                    <p className='text-lightgrey'>
                        Trage diese unten bitte ein. Dein Dozent wird dein Antrag prüfen und dich
                        zulassen.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className='flex h-8 mt-4'>
                            <input
                                className='border border-lightgrey rounded-xl pl-4 mr-6'
                                type='text'
                                placeholder='Module ID'
                                value={moduleCode}
                                onChange={(e) => setModuleCode(e.target.value)}
                                required
                            />
                            <input
                                className='border border-lightgrey rounded-xl pl-4 mr-6'
                                type='password'
                                placeholder='Passwort'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex my-3 items-center'>
                            <input type='checkbox' className='mr-4' required />
                            <p>Ich bin einverstanden dass ... </p>
                        </div>
                        <Button text='Beitreten' highlighted={false} type='submit' href='' />
                    </form>
                </div>
            </main>
        </RootLayout>
    )
}
