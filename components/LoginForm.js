import {useState} from "react"
import axios from "axios"
import {useRouter} from "next/router"
import {useAuth} from "@/components/AuthProvider"
import {url} from "@/utils/data"

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {saveUser, setError} = useAuth()
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${url}/login`, {email, password})
            console.log("logged in")
            console.log(response.data)
            saveUser(response.data.user, response.data.token)
            // Assuming the token is set in a secure, HttpOnly cookie by the server.

            // Redirect using Next.js Router
            console.log("redirecting")
            router.push("/cockpit")
        } catch (error) {
            console.log("error during login")
        }
    }

    return (
        <form onSubmit={handleLogin} className='mt-4 w-full rounded'>
            <div className='flex w-full space-x-4'>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Emailadresse'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-6 text-base border border-lightgrey placeholder-text-grey rounded-lg h-4 tracking-wider'
                    required
                />

                <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Passwort'
                    onChange={(e) => setPassword(e.target.value)}
                    className='flex-auto text-base p-6 border border-lightgrey placeholder-text-grey rounded-lg h-4 tracking-wider'
                    required
                />
                <button
                    type='submit'
                    className='flex-auto text-black text-base bg-lunapurple px-12 py-2 rounded-lg text-white hover:bg-lunagreen'
                >
                    Anmelden
                </button>
            </div>
            <div className='mt-4'>
                <a
                    href='/register_account'
                    className='block text-left text-lightgrey mb-10 hover:underline'
                >
                    Noch kein Konto?
                </a>
            </div>
        </form>
    )
}

export default LoginForm
