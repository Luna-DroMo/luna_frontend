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
import {hasNullValue} from "@/utils/utils"
import {ErrorBanner} from "@/components/Errors"
import {useEffect} from "react"
import { SurveyQuestion } from "@/components/FormElements"

export default function Main({model}) {
  const {user, isAuthenticated, saveUser, clearUser} = useAuth()
  const router = useRouter()
  const [userRole, setUserRole] = useState(null)
  const [PA, setPA] = useState(null)
  const [NA, setNA] = useState(null)
  const [error_message, setErrorMessage] = useState("")
  const [blockFilled, setBlockFilled] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});



  // Function to handle change in selected option for a question
  const handleOptionChange = (questionIndex, optionIndex, isChecked) => {
    setSelectedOptions(prevOptions => ({
        ...prevOptions,
        [questionIndex]: true, // Store whether the option is checked
}));
    console.log("updating")
    console.log("SelOp", selectedOptions)
};


useEffect(() => {
    const indicesToCheck = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17],
        [18],
        [19, 20, 21, 22, 23, 24, 25]
    ];

    const updatedBlockFilled = indicesToCheck.map(block =>
        block.every(index => selectedOptions[index])
    );

    
    setBlockFilled(updatedBlockFilled);
}, [selectedOptions]);



  useEffect(() => {
    const getUserRole = async (e) => {
      //e.preventDefault()

      try {
        const response = await axios.get(
          `https://mz-bdev.de/api/getUserType/${user.id}`
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
    return <p> </p>
  } else if (userRole !== 1) {
    router.push("/cockpit/")
  } else {
    // Data points

    let data = {
      name: "PANAS",
      user: user.id,
      content: {
        PA: 3,
        NA: 2  // THIS NEEDS TO BE IMPLEMENTED CORRECTLY
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
            `https://mz-bdev.de/api/student/save_form/${user.id}`,
            data
          )

          router.push("./input_complete")
        } catch (error) {
          console.log("error", error)
          setErrorMessage(error.message)
        }
      }
    }

    let forms1 = [
      {name: "Motivation", status: 2, item: 6},
      {name: "Persönlichkeitsskala", status: 2, item: 7},
      {name: "Postive-Negative", status: 1, item: 8}
    ]
    model = {name: "Postive-Negative"}

    return (
      <InputLayout show_main_links={false}>
        <div className='input_progbar'>
          <Progressbar forms={forms1} current_form={model.name} />
        </div>
        <div className='input_mainbody'>
          <main className='flex-row justify-between px-10 pt-10'>
            <form onSubmit={handleUserDataUpdate}>
              <h1 className='tracking-wider text-xl'>{model.name}</h1>
              <p className='mb-10'>
                This section covers stuff about PANAS questionnaire
              </p>
              <div className={`bg-white overflow-hidden transition ease-in-out delay-250 rounded-lg px-2 pt-3 pb-7 mb-12 mt-8 border border-2 ${blockFilled[0] ? 'border-lunagreen' : 'border-transparent'}`}>
                        <div className='flex my-2 px-4'>
                            <h3>Items:</h3>
                            
                        </div>
                        <div className="flex items-center w-full my-2 px-4">
                            <div className='flex-grow'>
                                <p className='text-lunapurple'>Zeige an, wie sehr du dich in der letzten Woche so gefühlt hast...</p>
                            </div>
                            <div className="flex justify-between w-72 text-lunapurple pr-3">
                                <p className="flex-1 grid py-1 justify-items-center rounded">Gar nicht</p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded"></p>
                                <p className="flex-1 grid py-1 justify-items-center rounded">Sehr</p>
                            </div>
                        </div>

                        <SurveyQuestion maintext="Interessiert" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Bekümmert" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Aufgeregt" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Verärgert" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Gereizt" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Verschämt" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        <SurveyQuestion maintext="Entschlossen" subtitle="" onChange={(isChecked) => handleOptionChange(0, isChecked)} />
                        
                    </div>

              {
                /* Error block */
                error_message !== "" && (
                  <ErrorBanner>{error_message}</ErrorBanner>
                )
              }
              <div className='flex justify-evenly w-3/5 mt-24'>
                <FormButton
                  text='Zurück zur Übersicht'
                  onClick={(e) => router.push("../account_setup_overview")}
                  type='reset'
                />
                <FormButton
                  text='Überspringen'
                  onClick={(e) => router.push("./input_complete")}
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
}
