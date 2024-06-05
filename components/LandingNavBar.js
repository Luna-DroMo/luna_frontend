import Image from 'next/image';

export default function Navbar({ theme }) {
    let logo_source = `/Logo.png`
    let text_color = "white"
    if (theme === "dark") {
        logo_source = `/Logo.png`
        text_color = "lunapurple"
    }

    return (
        <div id='nav-links' className={`text-${text_color} text-large w-full`}>
            <ul className='space-x-6 flex flex-row justify-end items-center'>
                <li className='hover:underline'>
                    <a href='/external/about_us'>Über Uns</a>
                </li>
                <li className='hover:underline'>
                    <a href='/external/FAQ'>FAQs</a>
                </li>
                <li className='hover:underline'>
                    <a href='/external/kontakt'>Kontakt</a>
                </li>
                {/*<li className='hover:underline'>
                    <a href='#'>Datenschutz</a>
                </li>*/}
                <li className='pl-10'>
                    <a href='/' className='flex items-center'>
                        <Image src={logo_source} width={128} height={40} className='h-10 mr-5 my-3 inline-block' alt='logo' priority/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
