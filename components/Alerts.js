"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';



export default function AlertSection() {
    const [expanded, setExpanded] = useState(false);

    const alerts = [
        // dates must be year-mo-da
        { "module": "Probabilistic Machine Learning", "surveyno": 1, "duedate": "2023-09-08", "publishdate": "2023-08-10" },
        { "module": "Probabilistic Machine Learning", "surveyno": 2, "duedate": "2023-09-10", "publishdate": "2023-08-15" },
        { "module": "Probabilistic Machine Learning", "surveyno": 3, "duedate": "2023-09-15", "publishdate": "2023-08-20" },
        { "module": "Bayesian Modelling", "surveyno": 1, "duedate": "2023-09-15", "publishdate": "2023-08-10" },
        { "module": "Bayesian Modelling", "surveyno": 2, "duedate": "2023-09-25", "publishdate": "2023-08-15" },
        { "module": "Bayesian Modelling", "surveyno": 3, "duedate": "2023-09-26", "publishdate": "2023-08-09" },
        { "module": "Bayesian Modelling", "surveyno": 4, "duedate": "2023-09-27", "publishdate": "2023-08-01" },
        { "module": "Advanced Time Series Analysis", "surveyno": 5, "duedate": "2023-10-10", "publishdate": "2023-08-05" },
        { "module": "Advanced Time Series Analysis", "surveyno": 6, "duedate": "2023-10-15", "publishdate": "2023-07-03" },
        { "module": "Advanced Time Series Analysis", "surveyno": 7, "duedate": "2023-10-25", "publishdate": "2023-08-09" }
        // ... (other alerts)
    ];

    // sort the alert array in order of due next.
    alerts.sort((a, b) => {
        // Convert the date strings to actual Date objects for comparison
        const dateA = new Date(a["duedate"]);
        const dateB = new Date(b["duedate"]);
        
        // Compare the dates
        return dateA - dateB;
      });


    function toggleExpand() {
        setExpanded(prevExpanded => !prevExpanded);
    };

    const visibleAlerts = expanded ? alerts : alerts.slice(0, 3);
    if (alerts.length > 0){
    return (
        <div className="my-5">
            <h5 className='tracking-wider flex-grow mb-3'>Meine laufenden Befragungen</h5>
            
          <div>
            {visibleAlerts.map((alert, index) => (
              <Alert key={index} survey={alert} />
            ))}
          </div>
    
          <button
            className="text-lunapurple text-base ml-5 hover:underline"
            onClick={toggleExpand}
          >
            {!expanded ? `Alle ${alerts.length} anzeigen` : 'Weniger anzeigen'}
          </button>
        </div>
      );
            }else{
                return <></>
            }
    }

function Alert({ survey }) {
    let module = survey.module;
    let surveyno = survey.surveyno;

    let due_date = new Date(survey.duedate);
    let publish_date = new Date(survey.publishdate);
    let cur_date = new Date(); // fine
    

    let avaiable_time = due_date - publish_date;
    let time_remaining = due_date - cur_date;

    /* // For checking date parsing
    console.log("current date",cur_date);
    console.log("due_date", due_date);
    console.log("publish_date",publish_date);
    console.log("availtime",avaiable_time);
    console.log("time_remaining",time_remaining);
    */

    let rel_time_remaining = Math.round((time_remaining * 100) / avaiable_time);
    //rel_time_remaining = 66;
    let bg_col = "bg-progred";
    if (rel_time_remaining >= 66) {
        bg_col = "bg-proggreen";
    } else if (rel_time_remaining >= 33) {
        bg_col = "bg-progyellow";
    }

    
    
    return (
        <a href="#" className='flex items-center w-full h-14 bg-alertpurple rounded-xl my-1 hover:bg-[#5C27CC] shadow-md'>
            <div className="date relative ml-5">
                <img src="alertdateshape.svg" className='w-12' />
                <p className='absolute top-0 text-[9px] text-lightgrey ml-2 mt-0.5'>{getDayOfWeek(due_date.getDay())}</p>
                <p className='absolute bottom-2.5 ml-2 text-[14px]'>{due_date.getDate()}</p>
                <p className='absolute bottom-0.5 text-[9px] text-lightgrey ml-2 mt-0'>{getMonthOfYear(due_date.getMonth())}</p>
            </div>
            <h3 className='flex-grow text-white ml-8 text-base tracking-wide'>Befragung {surveyno}: {module}</h3>
            <div className="progress flex-none mr-5 w-40">
                <p className='text-white text-sm tracking-wider'>Verbleibende Zeit</p>

                <div className="w-full bg-white rounded-full h-2 dark:bg-gray-700">
                    <div className={`float-right ${bg_col} h-2 rounded-full`} style={{ 'width': `${rel_time_remaining}%` }}></div>
                </div>
            </div>
        </a>
    );
}


// Helper function to get day of week text
function getDayOfWeek(dayOfWeek) {
    return isNaN(dayOfWeek) ? null :
        ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'][dayOfWeek];
}

// Helper function to get month of year text
function getMonthOfYear(dayOfWeek) {
    return isNaN(dayOfWeek) ? null :
        ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'][dayOfWeek];
}