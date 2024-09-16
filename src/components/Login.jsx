import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from "react";
import Header from "./Header";


const Login = () => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError]= useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true });
      const { userid } = response.data;

      localStorage.setItem('userid', userid);

      navigate('/MembershipPlans')

    } catch (err) {
      setError('Credenciales invalidas')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/images/fondo.jpg')]">
      <Header />
      <div className="md:w-[700px] max-w-md bg-[#eaf3e8] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-4 ">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex gap-1 items-center relative">
                <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 pr-7  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 sm:text-sm"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                /><FaUser className="absolute right-2" />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex gap-1 items-center relative">
                <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 pr-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 sm:text-sm transition-colors"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                /><FaLock className="absolute right-2" />
            </div>
          </div>
          <div className="flex justify-between px-1 pb-1">
              <label className="flex gap-1"><input type="checkbox"/>Recordar</label>
              <a className="hover:underline text-blue-600" href="#">¿Olvidaste tu Contraseña?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 pb-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <div className="register-link flex justify-center pt-2 transition-colors">
            <p className="pr-3">¿No tiene cuenta?</p><Link className="hover:underline text-blue-600" to={"/Register"}>Registrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
