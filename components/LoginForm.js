// components/LoginForm.js
import { useState } from 'react';
import {useAuth} from "../contexts/auth"

export default function LoginForm() {
  const { login } = useAuth(); // Get the login function from the auth context.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    login(username, password); // Use the login function from the auth context.
  }

  return (
    <form className="max-w-md mx-auto mt-8 p-4 border rounded shadow" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-gray-300 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-gray-300 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
      >
        Log In
      </button>
    </form>
  );
}