import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleReg } from '@fortawesome/free-regular-svg-icons';
import React from 'react';






export default function ModuleTable() {

    const modules = [

        // dates must be year-mo-da
        { "moduleid": "CS504", "modulename": "Probabilistic Machine Learning", "nextsurveydue": "2023-09-08", "nextsurveypublished": "2023-09-15" },
        { "moduleid": "QDS432", "modulename": "Bayesian Modelling", "nextsurveydue": "2023-09-15", "nextsurveypublished": "2023-09-25" },
        { "moduleid": "FINC512", "modulename": "Advanced Time Series Analysis", "nextsurveydue": "2023-10-25", "nextsurveypublished": "2023-09-21" }
       
    ];


    if (modules.length > 0) {
        return (
            <div className="container rounded-lg mx-auto">
                <table className="table-fixed border-collapse  rounded min-w-full divide-y tracking-wider">

                    <thead>
                        <tr className=''>
                            <th className="border-b-[#dddddd] border-b-2 px-0 font-normal border-b dark:border-slate-600 p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"> </th>
                            <th className="border-b-[#dddddd] border-b-2 px-4 py-2 text-left font-normal text-base ">Modul ID</th>
                            <th className="border-b-[#dddddd] border-b-2 px-4 py-2 text-left w-40 font-normal text-base ">Modul</th>
                            <th className="border-b-[#dddddd] border-b-2 px-4 py-2 text-center font-normal text-base ">Umfragestatus</th>
                            <th className="border-b-[#dddddd] border-b-2 px-4 py-2 text-center font-normal text-base ">Nächste Umfrage</th>
                            <th className="border-b-[#dddddd] border-b-2 px-4 py-2 text-right font-normal text-base "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module) => (
                            <TableRow key={module.moduleid} module={module} />
                        ))}

                    </tbody>
                </table>
            </div>
        );
    } else {
        return <>
        <h3 className='text-center text-text-grey text-lg mt-10 tracking-wider'>Du bist noch keinen Modulen beigetreten.</h3>
        <img src="satellite.png" className='w-52 m-auto mt-16'/></>
    }

};



function TableRow({ module }) {

    const nextsurveypublished = new Date(module.nextsurveypublished);
    return (
        <tr className='hover:bg-pagebg text-text-grey text-base'>
            <td className="py-3 w-10 text-center"><img src="moon.png" className="w-8 m-0 p-0 inline-block" /></td>
            <td className="px-4 py-2 w-24">{module.moduleid}</td>
            <td className="px-4 py-2 max-w-72 overflow-hidden overflow-ellipsis whitespace-nowrap">{module.modulename}</td>
            <td className="px-4 py-2 text-center w-48"><StatusElement nextsurveyduedate={module.nextsurveydue} /></td>
            <td className="px-4 py-2 text-center">{formatDate(nextsurveypublished)}</td>
            <td className="px-4 py-2"><a href="#" className="rounded-lg border py-0.5 px-2 text-lunapurple tracking-wider text-base border-lunapurple hover:bg-lunapurple hover:text-white">Verwalten</a></td>
        </tr>
    );
};

// Sets the text and the colour of the Survey Status
function StatusElement({ nextsurveyduedate }) {
    let bgColorClass;
    let text;
    let icon;
    const currentDate = new Date();
    let dueDate = new Date(nextsurveyduedate);
    let days_between = dueDate - currentDate;

    // Calculate the time difference in milliseconds
    const timeDifference = dueDate - currentDate;

    // Calculate the number of days between the two dates
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === null) {
        bgColorClass = "uptodate";
        text = "Up to Date";
        icon = faCircleSolid;
    } else if (daysDifference >= 5) {
        bgColorClass = "uptodate";
        text = `Fällig in ${daysDifference} Tagen`;
        icon = faCircleReg;
    } else if (daysDifference >= 3) {
        bgColorClass = "pending";
        text = `Fällig in ${daysDifference} Tagen`;
        icon = faCircleReg;
    } else if (daysDifference >= 0) {
        bgColorClass = "urgent";
        text = `Fällig in ${daysDifference} Tagen`;
        icon = faCircleReg;
    } else {
        bgColorClass = "urgent";
        text = "Missed";
        icon = faXmarkCircle;

    }

    // Ensure you use backticks as the quotes
    return (
        <a href="#" className={`flex items-center pl-5 py-0.5 ${bgColorClass} rounded-lg`}>
            <FontAwesomeIcon icon={icon} className='inline-block w-3' /><p className="ml-3 inline text-left overflow-hidden overflow-ellipsis whitespace-nowrap">{text}</p>
        </a>
    );
};

// Function to format date as "MM/DD/YYYY"
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    return `${month}.${day}.${year}`;
}