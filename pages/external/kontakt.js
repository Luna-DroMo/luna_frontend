import Navbar from "@/components/LandingNavBar"


export default function Main({ model }) {
    return (
        <div className='w-screen min-h-screen bg-pagebg'>
            <div className='px-48 py-12'>
                <Navbar theme={"dark"} />
                <h1 className="text-center mt-48">Kommt bald</h1>
            </div>
        </div>
    )
}
