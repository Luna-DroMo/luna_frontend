import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite, faMeteor, faUserAstronaut, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

/* Code for the side bar variable box. Contains typically the star collection */






export default function Billboard() {
    return (
        <div className="p-4 mt-3 mb-6 items-center text-center rounded-lg bg-lightpurple">

            <p className="mb-3 text-base text-center">
                Sternesammelung
            </p>
            <img src="/galaxy.png" className="w-24 inline-block spin"></img>
            <p className="text-large">215 Sterne!</p>
        </div>
    )
}