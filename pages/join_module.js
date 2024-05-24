import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import React, {useEffect, useState} from "react"
import Link from "next/link"
import {useRouter} from "next/router"
import {Button} from "@/components/Buttons"
import Person from "@/components/PersonTag"
import axios from "axios"
import {useAuth} from "@/components/AuthProvider"
import {url} from "@/utils/data"

export default function Main() {
    const {user} = useAuth()
    const [module, setModule] = useState({})
    const [password, setPassword] = useState("")
    const router = useRouter()
    const data = router.query
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchModules = async () => {
            try {
                if (router.query.id) {
                    const response = await axios.get(`${url}/api/module/${router.query.id}`)
                    setModule(response.data)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log("error during fetching modules", error)
            }
        }
        fetchModules()
    }, [router.query.id]) // It's more specific to depend on router.query.id

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            module_code: module.code,
            password: password
        }
        console.log("formData", formData)

        try {
            const response = await axios.post(`${url}/api/${user.id}/enroll_module`, formData)

            router.push("/cockpit")
        } catch (error) {
            console.error("Fetch error:", error)
        }
    }

    if (isLoading){
        return <RootLayout/>
    }

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h3 className='mb-8'>Modul Beitreten</h3>

                <div className='rounded-xl bg-white px-5 py-5 mb-4'>
                    <div className='flex mb-4'>
                        <img src='asteroid.png' className='w-6 mr-4' />
                        <h3>{module.name}</h3>
                    </div>

                    <div className='flex  mb-3'>
                        <p className='text-lightgrey'>{module.code}</p>
                        <p className='mx-4 text-lightgrey'> | </p>
                        <p className='text-lightgrey'>{"Methods Center"}</p>
                        <p className='mx-4 text-lightgrey'> | </p>
                        <Person img={"user.png"} name={"Dennis Perrett"} />
                        <p className='mx-4 text-lightgrey'> | </p>
                        <p className='text-lightgrey'>
                            {module.start_date} - {module.end_date}
                        </p>
                    </div>
                    <div className='w-full inline-block bg-[#eeeeee] h-[1px] mb-3' />
                    <div className='w-4/6 mb-4 text-lightgrey'>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            viverra laoreet arcu, ullamcorper aliquam augue lobortis elementum.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas. Nulla aliquet accumsan libero, et porta erat.
                            Phasellus tristique purus non sapien elementum interdum. Suspendisse
                            tristique, lorem a dictum tincidunt, erat elit cursus sem, non rhoncus
                            elit urna ac arcu. Cras lacinia egestas sapien quis dignissim.
                        </p> */}
                    </div>
                </div>
                <div className='rounded-xl bg-white px-5 py-5'>
                    <div className='flex mb-3'>
                        <input type='checkbox' className='mr-4' />
                        <p>Ich bin einverstanden dass ... </p>
                    </div>

                    <div className='flex'>
                        <input
                            className='border border-lightgrey rounded-xl pl-4 mr-6'
                            type='password'
                            placeholder='Passwort'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>

                        <FormButton
                            text='Beitreten'
                            highlighted='false'
                            type='submit'
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </RootLayout>
    )
}
