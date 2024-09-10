import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiMessengerLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { CgTwilio } from "react-icons/cg";
import { Link } from 'react-router-dom'

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (menuItem) => {
        setActiveMenu(menuItem);
        setIsOpen(false);
    }

    useEffect(() => {
        console.log(`menuitem es : ${activeMenu}`);
        
    }, [activeMenu])

    return (
        <>
            
            <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-md md:hidden"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`fixed border-r-8 border-[#76cc54] top-0 left-0 w-64 h-screen bg-[#e1ecdf] text-Black transform transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-64'
                } md:translate-x-0 md:relative md:w-64`}>
                <div className="p-4">
                <h2 className="text-2xl font-bold">Menu</h2>
                </div>
                <ul className="cursor-pointer">
                    <li
                        onClick={() => handleMenuClick("facebook")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "facebook" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/Facebook"} className="flex place-items-center gap-2 hover:text-white"><FaFacebook />Facebook</Link></li>
                    <li
                        onClick={() => handleMenuClick("instagram")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "instagram" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/Instagrams"} className="flex place-items-center gap-2"><FaInstagram />Instagram</Link></li>
                    <li
                        onClick={() => handleMenuClick("whatsapp")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "whatsapp" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/WhatsApps"} className="flex place-items-center gap-2"><FaWhatsapp />Whatsapp</Link></li>
                    <li
                        onClick={() => handleMenuClick("messenger")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "messenger" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/Messenger"} className="flex place-items-center gap-2"><RiMessengerLine />Messenger</Link></li>
                    <li
                        onClick={() => handleMenuClick("twilio")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "twilio" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/Twilio"} className="flex place-items-center gap-2"><CgTwilio />
                    twilio</Link></li>
                    <li
                        onClick={() => handleMenuClick("chatgpt")}
                        className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "chatgpt" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}
                    ><Link to={"/Settings/Chatgpt"} className="flex place-items-center gap-2"><BsChatDots />
                    ChatGPT</Link></li>
                </ul>
            </div>
        </>   
    )
}

export default Menu;