import Image from 'next/image'
import InputLayout from '@/components/InputLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FormButton } from '@/components/Buttons';
import { FormInput, InputRow } from '@/components/FormElements';
import { Progressbar } from '@/components/InputProgressTracker';
import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { ErrorBanner } from '@/components/Errors';
import { hasNullValue } from '@/utils/utils';
import { useEffect } from 'react';

export default function Main({ model }) {
  const { user, isAuthenticated, saveUser, clearUser } = useAuth();
  const router = useRouter();
  const [userRole, setUserRole] = useState(null)
  // Data points
  const [IQ, setIQ] = useState('')
  const [error_message, setErrorMessage] = useState('')


  useEffect(() => {
    const getUserRole = async (e) => {
      //e.preventDefault()

      try {
        const response = await axios.get(
          `http://localhost:8000/api/getUserType/${user.id}`
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
    return (<p> </p>)
  } else if (userRole !== 1) {
    router.push("/cockpit/")
  } else {
    
    

    let data = {
      name: "IQ",
      user: user.id,
      content: {
        IQ: IQ
      }
    }

    const handleUserDataUpdate = async (e) => {
      e.preventDefault()
      console.log("Writing:", data)

      if (hasNullValue(data.content)) {
        setErrorMessage("Missing values")
      } else {
        try {
          const response = await axios.post(
            `http://localhost:8000/api/student/save_form/${user.id}`,
            data
          )

          router.push("./IntExt_input")
        } catch (error) {
          console.log("error", error)
          setErrorMessage(error.message)
        }
      }
    }


    let forms1 = [
      { "name": "AIST", "status": 2, "item": 1 },
      { "name": "Kognitive Fähigkeiten", "status": 1, "item": 2 },
      { "name": "Internale-Externale Kontrollüberzeugung", "status": 0, "item": 3 }];

    model = { "name": "Kognitive Fähigkeiten (IQ)" };

    return (
      <InputLayout show_main_links={false} >
        <div className="input_progbar">
          <Progressbar forms={forms1} current_form={model.name} />
        </div>
        <div className="input_mainbody">
          <main className="flex-row justify-between px-10 pt-10">
            <form onSubmit={handleUserDataUpdate}>
              <h1 className='tracking-wider text-xl'>{model.name}</h1>
              <p className='mb-10'>This section covers stuff about the IQ questionnaire</p>
              <InputRow type="number" maintext="IQ Score" subtitle="Subtitle" value={IQ} onChange={(e) => setIQ(e.target.value)} />
              { /* Error block */
                error_message !== "" && <ErrorBanner>{error_message}</ErrorBanner>
              }
              <div className="flex justify-evenly w-3/5 mt-24">
                <FormButton text="Zurück zur Übersicht" onClick={(e) => router.push("../account_setup_overview")} type="reset" />
                <FormButton text="Überspringen" onClick={(e) => router.push("./IntExt_input")} type="reset" />
                <FormButton text="Weiter" highlighted="true" />
              </div>
            </form>
          </main>
        </div>
      </InputLayout>
    )
  }

}