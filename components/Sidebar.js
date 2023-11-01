import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite, faMeteor, faUserAstronaut, faGear, faSignOutAlt, faM } from '@fortawesome/free-solid-svg-icons';
import Billboard from './Billboard';
import Link from 'next/link'

const main_links = [{ "href": "/", "icon": faSatellite, "text": "Übersicht" },
{ "href": "/analysis/", "icon": faMeteor, "text": "Analysen" },
{ "href": "/my_data/", "icon": faUserAstronaut, "text": "Meine Daten" }
];

const bottom_links = [{ "href": "#", "text": "Konto", "icon": faGear }, { "href": "#", "text": "Abmelden", "icon": faSignOutAlt }];

export default function Sidebar({ show_main_links, show_billboard }) {
  return (
    <>
      <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
        <div className="flex flex-col justify-between h-full p-6">
          <div className="flex items-center p-5 mb-2">
            <img src="/LogoPurple3.svg" className="inline-block w-32 mr-4 mt-5" />
          </div>
        <SidebarContent show_billboard={show_billboard} show_main_links={show_main_links}/>


        </div>
      </aside>
    </>
  )
}

function SidebarContent({ show_billboard, show_main_links}) {
  /* Returns the variable Sidebar content */

  return (
    <>
      {show_main_links && <SidebarNavLinks links={main_links} />}
      {show_billboard && <Billboard />}
      <SidebarNavLinks links={bottom_links} />
    </>
  )

}

function SidebarNavLinks({ links }) {
  return (
    <ul className="space-y-2 font-medium mb-2">
      {links.map((link, index) => (
        <li key = {index} className='group rounded-lg'>
          <LinkContainer link_data={link} />
        </li>
      ))}
    </ul>
  )
}

function LinkContainer({ link_data }) {
  /* Structural container for links */
  return (
    <Link href={link_data.href} className="flex items-center pl-5 p-2 tracking-wider text-gray-900 rounded-lg dark:text-white text-sm group-hover:border-hidden dark:hover:bg-gray-700">
      <FontAwesomeIcon icon={link_data.icon} className='group-hover:text-lunapurple inline-block w-4' />
      <span className="ml-3">{link_data.text}</span>
    </Link>
  )
}