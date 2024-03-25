export default function Navbar({ theme }) {

    let logo_source = "crap_logo.png"
    let text_color = "white";
    if (theme === "dark") {
        logo_source = "crap_logo.png"
        text_color = "lunapurple"
    }


    return (


        <div id="nav-links" className={`text-${text_color} text-base w-full`}>
            <ul className='space-x-6 flex flex-row justify-end items-center'>
                <li className='hover:underline'><a href="#">Über Uns</a></li>
                <li className='hover:underline'><a href="#">FAQs</a></li>
                <li className='hover:underline'><a href="#">Kontakt</a></li>
                <li className='hover:underline'><a href="#">Datenschutz</a></li>
                <li className='pl-5'><a href="#"><img src={logo_source} className='w-6 h-6 inline-block' alt="logo" /></a></li>
            </ul>
        </div>


    )
}