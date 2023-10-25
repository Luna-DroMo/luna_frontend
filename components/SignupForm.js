import { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here
    console.log('Signing up with email:', email, 'password:', password);
    // Redirect to the index.js page after sign-up or perform any necessary actions
    // You can replace 'index' with your actual route path
    window.location.href = '/account_setup_overview';
  };

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
      <a href="/welcome" class="block text-left text-white px-6 mb-10 hover:underline">Bereits ein Konto? </a>
        <button type="submit" className="text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple">
          Registrieren
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
