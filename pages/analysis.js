import Image from 'next/image'
import RootLayout from '@/components/RootLayout.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/Buttons';
import Overview from '@/components/SetupDataModelOverview';
import { useState, useEffect, React } from 'react';
import { useAuth } from '../components/AuthProvider';
import axios from 'axios';

import Dropdown from '@/components/Dropdown';
import { LineChartWithDeviation, PieChart, ModuleDropoutRiskPlot } from '@/components/CustomCharts';


export default function Main() {
    const { user, isAuthenticated, saveUser, clearUser } = useAuth();
    const [userRole, setUserRole] = useState(null)
    // If not authenticated, the utility function would have handled the redirection


    useEffect(() => {
        const getUserRole = async (e) => {
            //e.preventDefault()

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
    }, [])

    // Students
    if (userRole === 1) {
        const mean_line = [54, 45, 42, 48, 58, 68, 65, 62, 41, 43, 78, 54, 32, 11, 33, 55, 77, 44, 33]
        const st_dev = [10, 11, 8, 6, 14, 2, 13, 15, 6, 7, 4, 8, 10, 2, 11, 14, 32, 35, 25]
        const students_at_risk = [
            {
                id: "Meine Noten",
                data: [54, 45, 66, 77, 82, 85, 90, 84, 73, 63, 78, 88, 85, 82, 80, 87, 88, 92, 95]
            }
        ]

        const turn_in_percent = 0.93;
        const class_turn_in_percent = 0.85;

        const pie_data = {

            datasets: [
                {
                    label: 'Meine Quote',
                    data: [turn_in_percent, 1 - turn_in_percent],
                    borderRadius: 8,
                    backgroundColor: ["rgba(82,16,220,.9)", "rgba(0,0,0,0)"],
                    borderColor: ["transparent"],
                },
                {
                    label: 'Klassendurchschnitt',
                    data: [class_turn_in_percent, 1 - class_turn_in_percent],
                    borderRadius: 8,
                    backgroundColor: ["rgba(217,217,217,1)", "rgba(0,0,0,0)"],
                    borderColor: ["transparent"],

                }
            ]
        };

        return (
            <RootLayout>
                <main className="flex-row justify-between px-10 pt-10 overflow-hidden">
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
                        <h1 className='font-bold'>Übungen</h1>
                        <p className='text-text-grey'>Hier werden deine Noten aus den Übungen dargestellt (in blau). Die graue Linie zeigt den Durchschnitt und die Standardabweichung wird durch das graue Band dargestellt.</p>
                        <div className='flex flex-row justify-between mt-4'>
                            <div className='relativ h-[250px] px-12 mt-8 flex-auto' >
                                <LineChartWithDeviation title="Übungsnoten" line={mean_line} deviation={st_dev} extra_lines={students_at_risk} />
                            </div>
                            <div className='relativ h-[220px] px-12 mt-8 flex-auto'>
                                <PieChart data={pie_data} />
                                <p className='text-center text-lunapurple mt-3'>{Math.round(turn_in_percent * 100)}%</p>
                            </div>
                        </div>
                    </div>
                </main>
            </RootLayout>
        )

    }
    // Lecturers
    if (userRole === 2) {
        const mean_line = [54, 45, 42, 48, 58, 68, 65, 62, 41, 43, 78, 54, 32, 11, 33, 55, 77, 44, 33]
        const st_dev = [10, 11, 8, 6, 14, 2, 13, 15, 6, 7, 4, 8, 10, 2, 11, 14, 32, 35, 25]
        const students_at_risk = [
            {
                id: "12345",
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
                            <ModuleDropoutRiskPlot title="Durschnittsrisiko das Modul abzubrechen" line={mean_line} deviation={st_dev} extra_lines={students_at_risk} />
                        </div>
                    </div>
                </main>


            </RootLayout >
        )
    }
    // Course Admins
    if (userRole === 3) {
        return (
            <RootLayout show_billboard={true}>Page for Admins</RootLayout>
        )
    }

}

