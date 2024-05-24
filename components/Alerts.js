"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, {useState, useEffect} from "react"
import Link from "next/link"
import {useAuth} from "./AuthProvider"
import {url} from "@/utils/data"
import axios from "axios"

export default function AlertSection() {
    const {user} = useAuth()
    const [surveys, setSurveys] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axios.get(`${url}/api/${user.id}/surveys/active`)
                setSurveys(response.data)
            } catch (error) {
                console.log("error during fetching surveys", error)
            }
        }
        fetchSurveys()
    }, [])

    function toggleExpand() {
        setExpanded((prevExpanded) => !prevExpanded)
    }

    const visibleSurveys = expanded ? surveys : surveys.slice(0, 3)

    if (surveys.length > 0) {
        return (
            <div className='my-5'>
                <h5 className='tracking-wider flex-grow mb-3'>Meine laufenden Befragungen</h5>
                <div>
                    {visibleSurveys.map((survey, index) => (
                        <Alert key={index} survey={survey} />
                    ))}
                </div>
                {surveys.length > 3 ? 
                <button
                    className='text-lunapurple text-base ml-5 hover:underline'
                    onClick={toggleExpand}
                >
                    {!expanded ? `Alle ${surveys.length} anzeigen` : "Weniger anzeigen"}
                </button>
                : null}
            </div>
        )
    } else {
        return null
    }
}

function Alert({survey}) {
    const module = survey.module.name
    const surveyno = survey.survey_number
    const due_date = new Date(survey.end_date)
    const publish_date = new Date(survey.start_date)
    const cur_date = new Date()

    const available_time = due_date - publish_date
    const time_remaining = due_date - cur_date

    const rel_time_remaining = Math.round((time_remaining * 100) / available_time)
    let bg_col = "bg-progred"
    if (rel_time_remaining >= 66) {
        bg_col = "bg-proggreen"
    } else if (rel_time_remaining >= 33) {
        bg_col = "bg-progyellow"
    }

    return (
        <Link
            href={{pathname: "survey", query: {id: survey.id}}}
            className='flex items-center w-full h-14 bg-alertpurple rounded-xl my-1 hover:bg-[#5C27CC] shadow-md'
        >
            <div className='date relative ml-5'>
                <img src='alertdateshape.svg' className='w-12' />
                <p className='absolute top-0 text-[9px] text-lightgrey ml-2 mt-0.5'>
                    {getDayOfWeek(due_date.getDay())}
                </p>
                <p className='absolute bottom-2.5 ml-2 text-[14px]'>{due_date.getDate()}</p>
                <p className='absolute bottom-0.5 text-[9px] text-lightgrey ml-2 mt-0'>
                    {getMonthOfYear(due_date.getMonth())}
                </p>
            </div>
            <h3 className='flex-grow text-white ml-8 text-base tracking-wide'>
                Befragung {surveyno}: {module}
            </h3>
            <div className='progress flex-none mr-5 w-40'>
                <p className='text-white text-sm tracking-wider'>Verbleibende Zeit</p>
                <div className='w-full bg-white rounded-full h-2 dark:bg-gray-700'>
                    <div
                        className={`float-right ${bg_col} h-2 rounded-full`}
                        style={{width: `${rel_time_remaining}%`}}
                    ></div>
                </div>
            </div>
        </Link>
    )
}

// Helper function to get day of week text
function getDayOfWeek(dayOfWeek) {
    return isNaN(dayOfWeek) ? null : ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."][dayOfWeek]
}

// Helper function to get month of year text
function getMonthOfYear(month) {
    return isNaN(month)
        ? null
        : [
              "Jan.",
              "Feb.",
              "Mär.",
              "Apr.",
              "Mai",
              "Jun.",
              "Jul.",
              "Aug.",
              "Sep.",
              "Okt.",
              "Nov.",
              "Dez."
          ][month]
}
