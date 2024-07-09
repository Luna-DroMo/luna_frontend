import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Button} from "@/components/Buttons"
import Overview from "@/components/MyDataOverview"
import React from "react"

const account_setup_progress = 0
const data_models_to_use = [
    {modelname: "Personenprofil", setup_status: 2, href: "#", img: "personal.png"},
    {modelname: "AIST", setup_status: 2, href: "#", img: "curious.png"},
    {modelname: "Kognitive Fähigkeiten", setup_status: 2, href: "#", img: "brain.png"},
    {
        modelname: "Internale-Externale-Kontrollüberzeugung",
        setup_status: 1,
        href: "#",
        img: "specification.png"
    },
    {modelname: "Fachwissenstest Mathematik", setup_status: 1, href: "#", img: "function.png"},
    {modelname: "Motivation", setup_status: 1, href: "#", img: "motivation.png"},
    {modelname: "Persönlichkeitsskalen", setup_status: 0, href: "#", img: "personality.png"},
    {modelname: "PANAS", setup_status: 0, href: "#", img: "mood.png"}
]

export default function Main() {
    const setupStatusList = data_models_to_use.map((model) => model.setup_status)
    const current_progress =
        setupStatusList.reduce((partialSum, a) => partialSum + a, 0) / (setupStatusList.length * 2)

    return (
        <RootLayout>
            <main className='flex-row justify-between px-10 pt-10'>
                <h1>Meine Daten</h1>
                {
                    //} <Overview data_models={data_models_to_use} />
                }
            </main>
        </RootLayout>
    )
}
