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

    return (
        <>
            <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-md md:hidden"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`fixed border-r-8 border-[#76cc54] top-0 left-0 w-64 h-screen bg-[#e1ecdf] text-Black transform transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-64'
                } md:translate-x-0 md:relative md:w-44`}>
                <div className="p-4">
                <h2 className="text-2xl font-bold">Menu</h2>
                </div>
                <ul className="cursor-pointer">
                    <Link to={"/Settings/Facebook"} className={`p-4 transition-colors flex items-center gap-2  ${activeMenu === "facebook" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><FaFacebook />
                        <li
                            onClick={() => handleMenuClick("facebook")}
                            className={`flex place-items-center gap-2 hover:text-white`}>Facebook
                        </li>
                    </Link>
                    <Link to={"/Settings/Instagrams"} className={`p-4 transition-colors flex items-center gap-2  ${activeMenu === "instagram" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><FaInstagram />
                        <li
                            onClick={() => handleMenuClick("instagram")}
                            className={`flex place-items-center gap-2`}
                            >Instagram
                        </li>
                    </Link>
                    <Link to={"/Settings/WhatsApps"} className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "whatsapp" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><FaWhatsapp />
                        <li
                            onClick={() => handleMenuClick("whatsapp")}
                            className={`flex place-items-center gap-2`}
                            >Whatsapp
                        </li>
                    </Link>
                    <Link to={"/Settings/Messenger"} className={`p-4 transition-colors flex items-center gap-2  ${activeMenu === "messenger" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><RiMessengerLine />
                        <li
                            onClick={() => handleMenuClick("messenger")}
                            className={`flex place-items-center gap-2`}
                            >Messenger
                        </li>
                    </Link>
                    <Link to={"/Settings/Twilio"} className={`p-4 transition-colors flex items-center gap-2 ${activeMenu === "twilio" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><CgTwilio />
                        <li
                            onClick={() => handleMenuClick("twilio")}
                            className={`flex place-items-center gap-2`}
                            >twilio
                        </li>
                    </Link>
                    <Link to={"/Settings/Chatgpt"} className={`p-4 transition-colors flex items-center gap-2  ${activeMenu === "chatgpt" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}`}><BsChatDots />
                        <li
                            onClick={() => handleMenuClick("chatgpt")}
                            className={`flex place-items-center gap-2`}
                            >ChatGPT
                        </li>
                    </Link>
                </ul>
            </div>
        </>   
    )
}

export default Menu;