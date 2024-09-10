import { FaRegCircleCheck } from "react-icons/fa6";
import { TbXboxX } from "react-icons/tb";
import Header from "./Header";
import { Link } from 'react-router-dom'


function MembershipPlans() {

  return (
    
    <div className="justify-center min-h-screen grid bg-[#e1f1dd]">
        <Header />
        <div className="mt-10">
            <div>
                <h1 className="text-4xl font-bold pt-16">Planes de membresia</h1>
                <p className="text-lg">Estos son los planes de membresia</p>
            </div>
            <div className="flex flex-nowrap w-[900px] h-[700px] pt-5 justify-between">
                <Link to={"/Register"} className="bg-gradient-to-t from-[#e4f5d1] to-[#bbf383] w-[300px] rounded-lg flex flex-col gap-10 cursor-pointer hover:shadow-lg hover:scale-105 duration-300 relative"> 
                
                    <h1 className="text-4xl font-bold py-6 flex justify-center">Basico</h1>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><TbXboxX className="text-red-500"/>
                    texto </p>
                    
                        <button className="w-[100px] mx-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-60 transition-colors absolute  -translate-x-1/2 -translate-y-1/2 -bottom-0.5 left-1/2 hover:bg-green-600 ">Registrarse</button>
                </Link>
                <Link to={"/Register"} className="bg-gradient-to-t from-[#c4f293] to-[#5caa09] w-[300px] rounded-lg flex flex-col gap-10 cursor-pointer hover:shadow-lg hover:scale-105 duration-300 relative"> 
                    <h1 className="text-4xl font-bold py-6 flex justify-center ">Estandar</h1>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><TbXboxX className="text-red-500"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><TbXboxX className="text-red-500"/>texto </p>
                    
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-60 transition-colors absolute  -translate-x-1/2 -translate-y-1/2 -bottom-0.5 left-1/2 hover:bg-green-600  ">Registrarse</button>
                </Link>
                <Link to={"/Register"} className="bg-gradient-to-t from-[#e4f5d1] to-[#bbf383] w-[300px] rounded-lg flex flex-col gap-10 cursor-pointer hover:shadow-lg hover:scale-105 duration-300 relative"> 
                    <h1 className="text-4xl font-bold py-6 flex justify-center ">Alta calidad</h1>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    <p className="flex items-center gap-2 pl-3"><FaRegCircleCheck className="text-green-700"/>texto </p>
                    
                        <button className="w-[100px] mx-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-60 transition-colors absolute  -translate-x-1/2 -translate-y-1/2 -bottom-0.5 left-1/2 hover:bg-green-600 ">Registrarse</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default MembershipPlans;
