import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post("http://localhost:3007/login",{
            email,password
          })
          .then(result=>{
            console.log(result)
            if(result.data === "Success"){
              navigate("/");
            }
          })
          .catch(err=>console.log(err))
  };
  return (
    <div className='flex justify-center'>
    <div className="bg-white p-8 rounded shadow-md w-96 mt-24">
      <h2 className="text-3xl font-bold mb-4">Login to Your Account</h2>
      <p className="mt-4 text-lg text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
      <form>
        <div className="mb-4 mt-4">
          <label className="block text-gray-600 text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-lg font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="w-full bg-amber-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleLogin}
        >
          Log In
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login
