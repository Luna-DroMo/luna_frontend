import Image from "next/image"
import InputLayout from "@/components/InputLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FormButton} from "@/components/Buttons"
import {FormInput, InputRow} from "@/components/FormElements"
import {Progressbar} from "@/components/InputProgressTracker"
import React from "react"
import {useAuth} from "../contexts/AuthProvider"
import {useState} from "react"
import axios from "axios"
import Router, {useRouter} from "next/router"
import {ErrorBanner} from "@/components/Errors"
import {hasNullValue} from "@/utils/utils"
import {useEffect} from "react"
import {url} from "@/utils/data"

const AIST_questions = [
  {id: 1, question: "AIST_R", subtitle: "Realistic (Your Practical Side)"},
  {id: 2, question: "AIST_I", subtitle: "Investigative (Your Analytical Mind)"},
  {id: 3, question: "AIST_A", subtitle: "Artistic (Your Creative Spirit)"},
  {id: 4, question: "AIST_S", subtitle: "Social (Your Helping Heart)"},
  {
    id: 5,
    question: "AIST_C",
    subtitle: "Enterprising (Your Leadership Qualities)"
  },
  {
    id: 6,
    question: "AIST_E",
    subtitle: "Conventional (Your Organizational Skills) "
  }
]

const breadcrump = [
  {name: "AIST", status: 1, item: 1},
  {name: "Kognitive Fähigkeiten", status: 0, item: 2},
  {name: "Internale-Externale Kontrollüberzeugung", status: 0, item: 3}
]

export default function Main({model}) {
  const router = useRouter()
  const {user, isAuthenticated, saveUser, clearUser} = useAuth()

  const [request, setRequest] = useState([
    {
      question_id: 1,
      value: ""
    },
    {
      question_id: 2,
      value: ""
    },
    {
      question_id: 3,
      value: ""
    },
    {
      question_id: 4,
      value: ""
    },
    {
      question_id: 5,
      value: ""
    },
    {
      question_id: 6,
      value: ""
    }
  ])

  const [ErrorMessage, setErrorMessage] = useState("")

  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const getUserRole = async (e) => {
      try {
        const response = await axios.get(
          `http://52.5.114.46/api/getUserType/${user.id}`
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
    return <p></p>
  } else if (userRole !== 1) {
    router.push("/cockpit")
  }

  const handleResponseChange = (question_id, newValue) => {
    setRequest((prevResponses) =>
      prevResponses.map((response) =>
        response.question_id === question_id
          ? {...response, value: newValue}
          : response
      )
    )
  }

  const handleFormSubmission = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${url}/api/${user.id}/forms/3`,
        request
      )

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
            {request.map((response) => {
              const question = AIST_questions.find(
                (q) => q.id === response.question_id
              )
              return (
                <InputRow
                  key={response.question_id}
                  type='text' // or "number", depending on your data
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
