import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useAuth } from '@/pages/contexts/AuthProvider'

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { saveUser, setError } = useAuth()
  const router = useRouter()


  const handleSignUp = async (e) => {
    e.preventDefault() // every time we submit, javascript wants to refresh. We stop this with this.
    try {
      // Axios helps us send data. Its an HTTP client. Makes things easy for us. Helps us gets the right datatype.
      const register_response = await axios.post(
        'http://localhost:8000/signup',
        {
          email: email,
          password: password,
          user_type: 1,
          first_name: 'John',
          last_name: 'Doe'
        }
      )
    } catch (error) {
      console.error('An error occurred during sign up:', error)
    }

    // Log user in
    try {
      const response = await axios.post(
        'http://localhost:8000/login',
        { email, password }
      )
      localStorage.setItem('token', response.data.token);
      console.log(response.data.user)
      saveUser(response.data.user);
      // Assuming the token is set in a secure, HttpOnly cookie by the server.

      // Redirect using Next.js Router
      router.push('/registration_forms/benutzerdaten_input/')

    } catch (error) {
      console.log("error during login", error)
    }
  }

  return (
    <form onSubmit={handleSignUp} className="mx-auto mt-16 p-8 w-[36rem] min-w-[24rem] border rounded bg-white">
      <h1 className='text-2xl text-lunapurple mb-2'>Willkommen!</h1>
      <legend className='mb-2'>Rolle Auswählen: </legend>
      <div className="flex w-full mb-12 justify-stretch">

        <input id="student" className="hidden peer/student" name="role" type="radio" defaultChecked value="1" />
        <label htmlFor="student" className='text-center bg-[#FCFAFE] border border-[#e5e7eb] w-1/3 rounded-l-xl p-3 peer-checked/student:bg-lunapurple peer-checked/student:text-white hover:bg-[#F7F3FE]'>Student</label>

        <input id="admin" className="hidden peer/admin" name="role" type="radio" value="2" />
        <label htmlFor="admin" className='text-center bg-[#FCFAFE] border-t border-b border-[#e5e7eb] w-1/3 p-3 peer-checked/admin:bg-lunapurple peer-checked/admin:text-white hover:bg-[#F7F3FE]'>Verwaltung</label>

        <input id="lecturer" className="hidden peer/lecturer" name="role" type="radio" value="3" />
        <label htmlFor="lecturer" className='text-center bg-[#FCFAFE] border border-[#e5e7eb] w-1/3 rounded-r-xl p-3 peer-checked/lecturer:bg-lunapurple peer-checked/lecturer:text-white hover:bg-[#F7F3FE]'>Dozent</label>
      </div>

      <legend className='mb-2'>Anmeldedaten:</legend>
      <div className="mb-6">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Emailadresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-6 border border-[#e5e7eb] bg-[#FCFAFE] placeholder-text-grey rounded-xl h-14 tracking-wider"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-6 border border-[#e5e7eb] bg-[#FCFAFE] placeholder-text-grey rounded-xl h-14 tracking-wider"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-6 border border-[#e5e7eb] bg-[#FCFAFE] placeholder-text-grey rounded-xl h-14 tracking-wider"
          required
        />
      </div>
      <div className="text-center">
        <a href="/" className="block text-left text-text-grey px-6 mb-10 hover:underline">Bereits ein Konto? </a>
        <button type="submit" className="text-white bg-lunapurple px-12 py-2 rounded-xl">
          Registrieren
        </button>
      </div>
    </form >
  );
}

export default SignUpForm;
