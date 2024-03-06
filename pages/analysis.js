import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/Buttons';
import Overview from '@/components/SetupDataModelOverview';
import React from 'react';
import Dropdown from '@/components/Dropdown';
import LineChart from '@/components/SampleChart';



export default function Main() {

    const mean_line = [54, 45, 42, 48, 58, 68, 65, 62, 41, 43, 78, 54, 32, 11, 33, 55, 77, 44, 33]
    const st_dev = [10, 11, 8, 6, 14, 2, 13, 15, 6, 7, 4, 8, 10, 2, 11, 14, 32, 35, 25]
    const students_at_risk = [
        {id: "12345",
        data: [54, 45, 66, 77, 82, 85, 90, 84, 73, 63, 78, 88, 85, 82, 80, 87, 88, 92, 95]
    }
]

    return (
        <RootLayout>

            <main className="flex-row justify-between px-10 pt-10">
                <div className='flex flex-row justify-between'>
                    <h1 className='tracking-wider text-xl w-48'>Analysen</h1>
                    <div id="Dropdown-container" className=''>
                        <Dropdown header={"Probabilistic Machine Learning"} dropdown_options={['Probabilistic Machine Learning', "Statistical Machine Learning", "Statistics of Financial Markets"]} />
                    </div>
                </div>

                <div className='flex flex-row justify-between mt-4'>
                    <a href="" className='text-lunapurple text-base'>Daten Herunterladen</a>
                    <a href="" className='text-lunapurple text-base'>Vollständigen Bericht Herunterladen</a>
                </div>


                <div id='dropoutChartContainer' className='h-[850px] mt-8'>
                    <h1>Durchschnittsrisiko das Modul abzubrechen</h1>
                    <p>Die <span className='text-lunapurple'>blaue</span> Linie stellt das durchschnittliche Risiko deiner Studenten dar, das Modul abzubrechen. In <span className='text-lunared'>rot</span> werden Studierende angezeigt, die ein erhöhtes Risiko zeigen.</p>
                    <div className='relativ h-[250px] px-12 mt-8'>
                        <LineChart title="Durschnittsrisiko das Modul abzubrechen" line={mean_line} deviation={st_dev} students_at_risk={students_at_risk} />
                    </div>
                </div>


            </main>


        </RootLayout >
    )
}

