export default function Navbar({theme}) {
    let logo_source = "Logo.png"
    let text_color = "white"
    if (theme === "dark") {
        logo_source = "Logo.png"
        text_color = "lunapurple"
    }

    return (
        <div id='nav-links' className={`text-${text_color} text-large w-full`}>
            <ul className='space-x-6 flex flex-row justify-end items-center'>
                <li className='hover:underline'>
                    <a href='#'>Über Uns</a>
                </li>
                <li className='hover:underline'>
                    <a href='#'>FAQs</a>
                </li>
                <li className='hover:underline'>
                    <a href='#'>Kontakt</a>
                </li>
                <li className='hover:underline'>
                    <a href='#'>Datenschutz</a>
                </li>
                <li className='pl-10'>
                    <a href='#' className="flex items-center">
                        <img src={logo_source} className='w-12 h-12 inline-block' alt='logo' />
                        <p className="text-xl align-middle">LUNA</p>                        
                    </a>
                    
                </li>
            </ul>
        </div>
    )
}
