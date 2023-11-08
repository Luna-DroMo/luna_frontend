import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import {useAuth} from '@/pages/contexts/AuthProvider'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {saveUser, setError} = useAuth()
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8000/authentication/login',
        {email, password}
      )

      saveUser(response.data.user)
      // Assuming the token is set in a secure, HttpOnly cookie by the server.

      // Redirect using Next.js Router
      router.push('/')
    } catch (error) {
      setError(
        error.response?.data?.message || 'An error occurred during Log In'
      )
    }
  }

  return (
    <form
      onSubmit={handleSignUp}
      className='mx-auto mt-16 p-4 w-1/2 borderrounded'
    >
      <div className='mb-10'>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Emailadresse'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider'
          required
        />
      </div>
      <div className='mb-10'>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          placeholder='Passwort'
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider'
          required
        />
      </div>
      <div className='text-center'>
        <a
          href='/register_account'
          className='block text-left text-white px-6 mb-10 hover:underline'
        >
          Noch kein Konto?{' '}
        </a>
        <button
          type='submit'
          className='text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple'
        >
          Anmelden
        </button>
      </div>
    </form>
  )
}

export default LoginForm
