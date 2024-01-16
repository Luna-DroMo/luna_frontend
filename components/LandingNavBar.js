export default function Navbar({theme}) {

    let logo_source = "LogoWhite2.svg"
    let text_color="white";
    if (theme === "dark"){
        logo_source = "LogoPurple2.svg"
        text_color = "lunapurple"
    }


    return (
        <>
        <div className="w-screen pt-20 flex-none">
            <div id="nav-links" className={`text-${ text_color } text-base`}>
                <ul className='space-x-6 flex flex-row justify-end mr-52'>
                    <li className='hover:underline'><a href="#">Über Uns</a></li>
                    <li className='hover:underline'><a href="#">FAQs</a></li>
                    <li className='hover:underline'><a href="#">Kontakt</a></li>
                    <li className='hover:underline'><a href="#">Datenschutz</a></li>
                    <li className='pl-5'><a href="#"><img src={logo_source} className='w-20 inline-block' alt="logo" /></a></li>
                </ul>
            </div>
        </div>
        </>
    )
}