import Image from 'next/image'
import ModuleTable from '@/components/Table.js'
import AlertSection from '@/components/Alerts.js'
import RootLayout from '@/components/RootLayout.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider.js'
import { useRouter } from 'next/router';
import { SignupReminderBanner } from '@/components/Banners.js'
import axios from 'axios'
import { useEffect } from 'react'

export default function Cockpit_student() {

  const router = useRouter();
  const { user, isAuthenticated, saveUser, clearUser } = useAuth();
  const [modules, setModules] = useState([])


  useEffect(() => {
    const getModules = async (e) => {
      //e.preventDefault()

      try {
        const response = await axios.get(
          `http://52.5.114.46/api/student/${user.id}/modules`
        )

        setModules(response.data)
      } catch (error) {
        console.log("error during login", error)
      }

    }

    getModules()
    console.log(modules)
  }, [])


  if (modules.length == 0) {
    setModules([

    // dates must be year-mo-da
    { "moduleid": "CS504", "modulename": "Probabilistic Machine Learning", "nextsurveydue": "2023-09-08", "nextsurveypublished": "2023-09-15" },
    { "moduleid": "QDS432", "modulename": "Bayesian Modelling", "nextsurveydue": "2023-09-15", "nextsurveypublished": "2023-09-25" },
    { "moduleid": "FINC512", "modulename": "Advanced Time Series Analysis", "nextsurveydue": "2023-10-25", "nextsurveypublished": "2023-09-21" }

    ])
  }

  return (
    <RootLayout show_billboard={true}>
      <main className='flex-row justify-between px-10 pt-10'>
        <SignupReminderBanner />
        <div className='flex items-center'>
          <img src='alien.png' className='ml-2 w-10 mr-4' />
          <h1 className='tracking-wider text-xl'>
            Hey {user.first_name}, willkommen bei Luna!
          </h1>
        </div>

        <AlertSection />
        <div className='mt-8 flex space-x-2 mb-12'>
          <div className='flex-1 items-center rounded-xl p-2 bg-lightpurple pl-6'>
            <div className='flex items-center'>
              <div className='metric my-1 bg-lunapurple w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4'>
                {modules.length}
              </div>
              <div className='metric-text tracking-wider '>
                <p>Modulen beigetreten</p>
              </div>
            </div>
          </div>
          <div className='flex-1 items-center rounded-xl p-2 bg-lightgreen pl-6'>
            <div className='flex items-center'>
              <div className='metric my-1 bg-green w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4'>
                15%
              </div>
              <div className='metric-text tracking-wider '>
                <p>Rückmeldequote</p>
              </div>
            </div>
          </div>
          <div
            className='flex-1 relative items-center rounded-xl p-2 bg-zoom bg-center pl-6 bg-lunapurple'
            style={{ backgroundImage: 'url("solarsystem.png")' }}
          >
            <div className='absolute inset-0 bg-white opacity-10'></div>
            <div className='flex items-center'>
              <div className='metric my-1 bg-orange z-10 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white mr-4'>
                84
              </div>
              <div className='tracking-wider metric-text z-10 '>
                <p>Highlight-text</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full items-end'>
          <h5 className='tracking-wider items-center flex-grow'>
            Meine Module
          </h5>
          <a href='#' className='flex-none text-lunapurple text-base pb-0.5'>
            Module verwalten
            <FontAwesomeIcon
              icon={faChevronRight}
              className='flex group-hover:text-lunapurple inline-block w-2 mx-1.5'
            />
          </a>
        </div>

        <a
          href='#'
          className='cursor-pointer flex border border-lightpurple rounded-full my-5 s-50 py-3 pl-5 hover:border-lunapurple z-1'
        >
          <div className='inline-block w-3 h-3 relative items-center z-10 my-1'>
            <div className='absolute bg-lunapurple w-full h-0.5 top-1/2 left-0 transform -translate-y-1/2 rounded-full z-10'></div>
            <div className='absolute bg-lunapurple w-0.5 h-full top-0 left-1/2 transform -translate-x-1/2 rounded-full z-10'></div>
          </div>

          <h4 className='ml-5 text-lunapurple tracking-wider text-base z-10'>
            Modul beitreten
          </h4>
        </a>

        <ModuleTable modules={modules}/>
      </main>
    </RootLayout>
  )

}
