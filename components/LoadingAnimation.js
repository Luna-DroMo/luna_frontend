import Image from "next/image"
import {useState} from "react"



export default function LoadingAnimation() {
    const logo_source = `/Logo.png`
    return(
        <div className='w-screen min-h-screen bg-pagebg flex justify-center items-center'>
            <Image src={logo_source} width={256} height={360} className='inline-block' alt='logo' priority/>
            
            
        </div>
    )

}