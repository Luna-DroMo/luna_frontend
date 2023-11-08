import { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignUp = async (e) => {
    e.preventDefault() // every time we submit, javascript wants to refresh. We stop this with this.
    try {
      // Axios helps us send data. Its an HTTP client. Makes things easy for us. Helps us gets the right datatype.
      const response = await axios.post(
        'http://localhost:8000/authentication/signup',
        {
          email: email,
          password: password,
          user_type: 1,
          first_name: 'John',
          last_name: 'Doe'
        }
      )

      window.location.href = '/account_setup_overview'
    } catch (error) {
      console.error('An error occurred during sign up:', error)
    }
  }

  return (
    <form onSubmit={handleSignUp} className="mx-auto mt-16 p-4 w-1/2 rounded">
      <div className="mb-6">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Emailadresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider"
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
          className="w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider"
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
          className="w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider"
          required
        />
      </div>
      <div className="text-center">
      <a href="/welcome" className="block text-left text-white px-6 mb-10 hover:underline">Bereits ein Konto? </a>
        <button type="submit" className="text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple">
          Registrieren
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
