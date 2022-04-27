import { useState } from "react"
import CrowdfundLogo from "../images/logo.svg"
import NavOpen from "../images/icon-hamburger.svg"
import NavClose from "../images/icon-close-menu.svg"

export default function Header() {
    const [navExpanded, setNavExpanded] = useState(false)

    function toggleNav() {
        setNavExpanded(prevState => !prevState)
    }

    return (
        <header className="relative py-8 px-6 md:py-12 md:px-40">
            <div className={`bg-gradient-to-b from-black to-transparent absolute top-0 left-0 w-full pointer-events-none ${navExpanded ? "opacity-90 h-[500px]" : "opacity-60 h-full"} duration-500 transition-all z-10`} />
            <nav className="flex justify-between items-center relative z-20">
                <a href="." className="scale-110 ml-3"><img className="pointer-events-none" src={CrowdfundLogo} alt="Crowdfund Logo" /></a>
                <button className="md:hidden focus:outline-none" onClick={toggleNav}><img className="pointer-events-none" src={navExpanded ? NavClose : NavOpen} alt="Toggle Nav Icon" /></button>
                <div className={`${navExpanded ? "scale-y-100" : "scale-y-0"} md:scale-y-100 transition duration-500 origin-top md:flex justify-end absolute md:static left-0 w-full top-12`}>
                    <ul className="md:flex md:gap-8 bg-white md:bg-transparent md:text-white rounded-lg font-medium text-lg md:text-sm md:font-normal">
                        <li className="px-6 py-5 md:p-0 cursor-pointer">About</li>
                        <div className="w-full md:hidden h-px bg-dark-gray opacity-10" />
                        <li className="px-6 py-5 md:p-0 cursor-pointer">Discover</li>
                        <div className="w-full md:hidden h-px bg-dark-gray opacity-10" />
                        <li className="px-6 py-5 md:p-0 cursor-pointer">Get Started</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}