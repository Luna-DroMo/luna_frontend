import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faSatellite,
    faMeteor,
    faUserAstronaut,
    faGear,
    faSignOutAlt,
    faM,
    faAsterisk
} from "@fortawesome/free-solid-svg-icons"
import Billboard from "./Billboard"
import ProgressBar from "./ProgressBar"
import Link from "next/link"

import {useAuth} from "@/components/AuthProvider"

const main_links = [
   // {href: "/account_setup_overview/", icon: faUserAstronaut, text: "Hintergrund"},
    {href: "/cockpit/", icon: faSatellite, text: "Übersicht"},
    {href: "/analysis/", icon: faMeteor, text: "Analysen"}
]

export default function Sidebar({show_main_links, show_billboard, show_progress_bar, percentage}) {
    const bottom_links = [
        {href: "/cockpit/", icon: faSatellite, text: "Übersicht"},
        {href: "#", text: "Konto", icon: faGear},
        {href: "#", text: "Abmelden", icon: faSignOutAlt}
    ]

    return (
        <>
            <aside
                id='cta-button-sidebar'
                className='fixed top-0 left-0 z-40 w-64 h-screen'
                aria-label='Sidebar'
            >
                <div className='flex flex-col justify-between h-full p-6'>
                    <div className='flex items-center p-5 mb-2'>
                        <img src='/Logo.png' className='inline-block w-12 mr-2' />
                        <p className='text-3xl'>LUNA</p>
                    </div>
                    <SidebarContent
                        show_billboard={show_billboard}
                        show_main_links={show_main_links}
                        show_progress_bar={show_progress_bar}
                        percentage={percentage}
                    />
                </div>
            </aside>
        </>
    )
}

function SidebarContent({show_billboard, show_progress_bar, show_main_links, percentage}) {
    /* Returns the variable Sidebar content */
    const {clearUser} = useAuth()
    const handleLogout = async (e) => {
        e.preventDefault() // every time we submit, javascript wants to refresh. We stop this with this.
        try {
            // Axios helps us send data. Its an HTTP client. Makes things easy for us. Helps us gets the right datatype.

            const token = localStorage.getItem("token")
            if (token) {
                clearUser()
                console.log("logged out")
            }

            window.location.href = "/"
        } catch (error) {
            console.error("An error occurred during Log out:", error)
        }
    }
    return (
        <>
            {show_main_links && <SidebarNavLinks links={main_links} />}
            {show_progress_bar ? <ProgressBar percentage={percentage} /> : <Billboard />}

            <ul className='space-y-2 font-medium mb-2'>
                {/*<li className='group rounded-lg'>
                    <a
                        href={"#"}
                        className='flex items-center pl-5 p-2 tracking-wider text-gray-900 rounded-lg text-base group-hover:border-hidden'
                    >
                        <FontAwesomeIcon
                            icon={faGear}
                            className='group-hover:text-lunapurple inline-block w-4'
                        />
                        <span className='ml-3'>Konto</span>
                    </a>
                </li> */}
                <li className='group rounded-lg'>
                    <a
                        href={"/"}
                        onClick={handleLogout}
                        className='flex items-center pl-5 p-2 tracking-wider text-gray-900 rounded-lg text-base group-hover:border-hidden'
                    >
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className='group-hover:text-lunapurple inline-block w-4'
                        />
                        <span className='ml-3'>Abmelden</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

function SidebarNavLinks({links}) {
    return (
        <ul className='space-y-2 font-medium mb-2'>
            {links.map((link, index) => (
                <li key={index} className='group rounded-lg'>
                    <LinkContainer link_data={link} />
                </li>
            ))}
        </ul>
    )
}

function LinkContainer({link_data}) {
    /* Structural container for links */
    return (
        <Link
            href={link_data.href}
            className='flex items-center pl-5 p-2 tracking-wider text-gray-900 rounded-lg text-base group-hover:border-hidden'
        >
            <FontAwesomeIcon
                icon={link_data.icon}
                className='group-hover:text-lunapurple inline-block w-4'
            />
            <span className='ml-3'>{link_data.text}</span>
        </Link>
    )
}
