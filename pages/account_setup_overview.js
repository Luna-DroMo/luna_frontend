import Image from "next/image"
import RootLayout from "@/components/RootLayout.js"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Button} from "@/components/Buttons"
import SetupOverview from "@/components/SetupDataModelOverview"
import React from "react"
import {useEffect} from "react"
import {useState} from "react"
import axios from "axios"
import {useAuth} from "../components/AuthProvider"
import {useRouter} from "next/router"
import {data_models_to_use} from "../utils/data.js"

const account_setup_progress = 0

export default function Main() {
  // States defined below
  const [userRole, setUserRole] = useState(null)
  const [backgroundStatus, setBackgroundStatus] = useState({})
  const [enrichedDataModels, setEnrichedDataModels] = useState([])
  const {user, isAuthenticated, saveUser, clearUser} = useAuth()

  // Packages defined below
  const router = useRouter()

  // Functions defined below
  const setupStatusList = data_models_to_use.map((model) => model.setup_status)
  const current_progress =
    setupStatusList.reduce((partialSum, a) => partialSum + a, 0) /
    (setupStatusList.length * 2)

  useEffect(() => {
    async function fetchData() {
      try {
        // Assuming user.id is available and correct
        const userTypeResponse = await axios.get(
          `https://mz-bdev.de/api/getUserType/${user.id}`
        )
        setUserRole(userTypeResponse.data)

        const backgroundStatusResponse = await axios.get(
          `http://mz-bdev.de/api/${5}/background`
        )
        const {completed_forms, not_completed_forms} =
          backgroundStatusResponse.data

        // Enrich data_models_to_use with resolution status
        const enrichedModels = data_models_to_use.map((model) => {
          let status = "" // Default status
          if (completed_forms.includes(model.type)) {
            status = "completed"
          } else if (not_completed_forms.includes(model.type)) {
            status = "not_completed"
          }

          return {...model, status: status} // Add status field to the model
        })

        setEnrichedDataModels(enrichedModels)
        setBackgroundStatus(backgroundStatusResponse.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [user.id])

  console.log(typeof backgroundStatus.personal_onboarding)

  useEffect(() => {
    if (backgroundStatus.personal_info === "not_completed") {
      router.push("/registration_forms/benutzerdaten_input")
    } else if (
      backgroundStatus.completed_forms &&
      backgroundStatus.completed_forms.length === 7
    ) {
      router.push("/cockpit/")
      //   } else {
      //     const firstNotCompletedForm = enrichedDataModels.find(
      //       (model) => model.status === "not_completed"
      //     )
      //     if (firstNotCompletedForm) {
      //       router.push(`/registration_forms/${firstNotCompletedForm.redirect_url}`)
      //     }
    }
  }, [backgroundStatus, enrichedDataModels, router])

  if (userRole === null) {
    return <p> </p>
  } else if (userRole !== 1) {
    router.push("/cockpit/")
  } else {
    return (
      <RootLayout
        show_main_links={false}
        show_progress_bar={true}
        show_billboard={false}
        percentage={backgroundStatus.percentage}
      >
        <main className='flex-row justify-between px-10 pt-10'>
          <Greeting user = {user} account_setup_progress={account_setup_progress} />
          <div className=' my-10  w-full text-center'>
            <h1 className='mb-5 text-2xl'>Prozess jetzt starten!</h1>
            <Button
              text='Loslegen!'
              highlighted={true}
              href='./registration_forms/AIST_input/'
            ></Button>

            <a
              href='/'
              className='text-xs text-lightgrey mt-5 block hover:underline'
            >
              <p>Ich habe gerade keine Zeit</p>
            </a>
          </div>
          <h3> Oder in einen Fragebogen direkt einsteigen!</h3>
          <SetupOverview data_models={enrichedDataModels} />
        </main>
      </RootLayout>
    )
  }
}

function Greeting({user, account_setup_progress}) {
  if (account_setup_progress == 0) {
    return (
      <>
        <div className='flex items-center'>
          <img src='alien.png' className='ml-2 w-10 mr-4' />
          <h1 className='tracking-wider text-xl'>
            Hey {user.first_name}, willkommen bei Luna!
          </h1>
        </div>
        <div className='text-text-grey text-sm mt-5'>
          <p className='mb-3'>
            Für unsere Analysen brauchen wir eine Menge Daten. Wir wissen, dass
            es viel ist, und wir haben versucht, den Prozess für dich so einfach
            wie möglich zu machen. Dein Fortschritt wird automatisch
            gespeichert, sodass du die Seite verlassen und später wiederkommen
            kannst, ohne deine bisherigen Daten zu verlieren!
          </p>
          <p className='mb-3'>
            Es ist nicht zwingend erforderlich, alle Daten einzugeben, aber
            unsere Modelle benötigen bestimmte Daten, um ordnungsgemäß zu
            funktionieren. Wenn du dich entscheidest, die notwendigen Daten für
            ein bestimmtes Modell nicht zu teilen, wird dieses Modell leider
            nicht für dich funktionieren.
          </p>
          <p className='mb-3'>
            Als Anreiz für diesen Prozess werden wir dir wissenschaftliche
            Analysen bereitstellen, die speziell für dich erstellt wurden!
          </p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='flex items-center'>
          <img src='alien.png' className='ml-2 w-10 mr-4' />
          <h1 className='tracking-wider text-xl'>Übersicht</h1>
        </div>
        <div className='text-text-grey text-sm mt-5'>
          <p className='mb-3'>
            Für unsere Analysen brauchen wir eine Menge Daten. Wir wissen, dass
            es viel ist, und wir haben versucht, den Prozess für dich so einfach
            wie möglich zu machen. Dein Fortschritt wird automatisch
            gespeichert, sodass du die Seite verlassen und später wiederkommen
            kannst, ohne deine bisherigen Daten zu verlieren!
          </p>
          <p className='mb-3'>
            Es ist nicht zwingend erforderlich, alle Daten einzugeben, aber
            unsere Modelle benötigen bestimmte Daten, um ordnungsgemäß zu
            funktionieren. Wenn du dich entscheidest, die notwendigen Daten für
            ein bestimmtes Modell nicht zu teilen, wird dieses Modell leider
            nicht für dich funktionieren.
          </p>
          <p className='mb-3'>
            Als Anreiz für diesen Prozess werden wir dir wissenschaftliche
            Analysen bereitstellen, die speziell für dich erstellt wurden!
          </p>
        </div>
      </>
    )
  }
}
