import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="fixed w-screen bg-gradient-to-t from-[#caf3c3] to-[#5caa09] py-4 z-10 top-0 px-8">
            <div className="flex max-w-5xl mx-auto items-center justify-between h-16">
                <div className="hidden sm:flex justify-center w-[150px]">
                <img src='/images/Logo.png' alt="Logo"/>
                </div>
                    <nav className="flex flex-1 justify-center gap-4">
                    <ul className="flex gap-4 items-center">
                        <Link to={"/Email"} className="hover:text-white hover:scale-110 transition-colors">
                            Contactanos
                        </Link>
                        <Link to={"/MembershipPlans"} className="hover:text-white hover:scale-110 transition-colors">
                            Membresia
                        </Link>
                    </ul>
                </nav>
                <Link to={"/Register"} className="border rounded-full inline-block border-white px-6 py-2 hover:bg-white hover:text-black duration-300">
                    PERFIL
                </Link>
            </div>
        </header>

    )
}

export default Header;