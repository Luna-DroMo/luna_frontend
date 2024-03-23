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
            <div className='rounded-xl overflow-hidden  mt-4'>
                    <div className='flex h-15 px-4 py-3 bg-white ' >
                        <h3>Beigetretene Module</h3>
                        <div className={`ml-5 border-none rounded-full bg-[#F4F3FF] px-4 items-center`}>
                            <span className='text-base text-lunapurple'>{modules.length} Modul{modules.length !== 1 ? ('e') : ("")}</span>
                        </div>

                    </div>
                <table className="table-auto w-full rounded-xl text-left">

                    <thead className='bg-[#f7f7f7] text-lunapurple h-8 text-base'>
                        <tr className='text-left border-none'>
                            <th className=""> </th>
                            <th className="">Modul ID</th>
                            <th className="">Modul</th>
                            <th className="">Umfragestatus</th>
                            <th className="text-center">Nächste Umfrage</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className='rounded-b-lg'>
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
        <tr className='items-center h-12 odd:bg-white even:bg-[#fafafa] hover:bg-[#f0f0f0]'>
            <td className="text-[#4a4a4a] text-base tracking-wide text-center"><img src="moon.png" className="w-8 m-0 p-0 inline-block" /></td>
            <td className="text-[#4a4a4a] text-base tracking-wide w-24">{module.moduleid}</td>
            <td className="text-[#4a4a4a] text-base tracking-wide max-w-72 overflow-hidden overflow-ellipsis whitespace-nowrap">{module.modulename}</td>
            <td className="text-[#4a4a4a] text-base tracking-wide text-center w-48"><StatusElement nextsurveyduedate={module.nextsurveydue} /></td>
            <td className="text-[#4a4a4a] text-base tracking-wide text-center">{formatDate(nextsurveypublished)}</td>
            <td className="text-[#4a4a4a] text-base tracking-wide"><a href="#" className="rounded-lg border py-0.5 px-2 text-lunapurple tracking-wider text-base border-lunapurple hover:bg-lunapurple hover:text-white">Verwalten</a></td>
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


