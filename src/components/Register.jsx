import { useState } from "react";
import axios from "axios";
import Header from "./Header";

function Register() {
    
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const response= await axios.post('http://localhost:3001/users', {nombre, edad, email, password})
      console.log(response);
      alert('registro exitoso');

      window.location.href="/#Login"
    } catch (error) {
      setError('Error al registrar el usuario')
    }
  }

    return (
      <div className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center bg-[url('/images/fondo.jpg')]">
        <Header />
        <form onSubmit={handleSubmit} className="bg-[#eaf3e8] p-8 rounded-lg shadow-lg md:w-[700px] max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Registro</h2>
  
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="Nombre"
              name="Nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={edad}
              onChange={(e)=> setEdad(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Edad"
              required
            />
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
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 pr-7 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 sm:text-sm transition-colors"
                placeholder="********"
                />
            </div>
          </div>
  
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Registrarse
          </button>
        </form>
      </div>
    );
  }

  export default Register;