import { useState } from 'react'
import axios from 'axios'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault() // every time we submit, javascript wants to refresh. We stop this with this.
    try {
      // Axios helps us send data. Its an HTTP client. Makes things easy for us. Helps us gets the right datatype.
      const response = await axios.post(
        'http://localhost:8000/authentication/login',
        {
          email: email,
          password: password,

        }
      )
      
      const token  = response.data.token
      

      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        console.log(token)
      }

    window.location.href = '/'
    } catch (error) {
      console.error('An error occurred during Log In:', error)
    }
    
  }

  return (
    <form onSubmit={handleSignUp} className="mx-auto mt-16 p-4 w-1/2 borderrounded">

      <div className="mb-10">

        <input
          type="text"
          id="username"
          name="username"
          placeholder='Emailadresse'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider"
          required
        />
      </div>
      <div className="mb-10">

        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Passwort"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider"
          required
        />
      </div>
      <div className="text-center">
        <a href="/register_account" className="block text-left text-white px-6 mb-10 hover:underline">Noch kein Konto? </a>
        <button type="submit" className="text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple">
          Anmelden
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
