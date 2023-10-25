import Image from 'next/image'
import LoginForm from '@/components/LoginForm'

export default function Home() {


    const callAPI = async () => {
        try {
            const res = await fetch(`http://0.0.0.0:8000/authentication/users/get_all_users/`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    let apidata = callAPI();

    return (
        <div className='flex w-screen h-screen bg-lunapurple'>
            <div className='flex-1 flex items-center h-full'>
                <div id="left-container" className='mx-auto'>
                    <h1 className="text-center text-3xl text-white tracking-wider">Willkommen bei Luna!</h1>
                    <img src="rocket.png" className='w-48 mx-auto my-8' alt="Rocket" />
                    <p className="text-center text-white tracking-wider">Lass uns gemeinsam nach den Sternen greifen!</p>
                </div>
            </div>
            <div className='flex-1 flex items-center h-full'>
                <p className="text-white">{apidata[1]}</p>
                <div id="right-container" className='mx-auto w-full h-full flex flex-col pt-16 pb-48 items-center'>
                    <div id="nav-links" className='text-white text-sm mt-4 flex-grow'>
                        <ul className='flex space-x-6'>
                            <li className='hover:underline'><a href="#">Über Uns</a></li>
                            <li className='hover:underline'><a href="#">FAQs</a></li>
                            <li className='hover:underline'><a href="#">Kontakt</a></li>
                            <li className='hover:underline'><a href="#">Datenschutz</a></li>
                            <li className='pl-5'><a href="#"><img src="logowhite2.svg" className='w-20 inline-block' alt="logo"/></a></li>
                        </ul>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div >
    )
}