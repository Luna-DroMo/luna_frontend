import {useState} from 'react'
import axios from 'axios'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('Logging in with username:', username, 'and password:', password);
    // Redirect to the index.js page after login
    // You can replace 'index' with your actual route path
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleLogin} className="mx-auto mt-16 p-4 w-1/2 borderrounded">
      
      <div className="mb-10">
        
        <input
          type="text"
          id="username"
          name="username"
          placeholder='Emailadresse'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <a href="/register_account" class="block text-left text-white px-6 mb-10 hover:underline">Noch kein Konto? </a>
        <button type="submit" className="text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple">
          Anmelden
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
