import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { LINKS } from '../constants';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlescroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className='fixed top-4 z-50 flex w-full flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
                <motion.img 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                    src={logo} 
                    alt="logo" 
                    width={80} 
                    height={22} 
                />
                <div className='hidden space-x-6 lg:flex'>
                    {LINKS.map((Link, index) => (
                        <a 
                            key={index} 
                            href={`#${Link.targetId}`} 
                            className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} 
                            onClick={(e) => handlescroll(e, Link.targetId)}>
                            {Link.text}
                        </a>
                    ))}
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='w-full backdrop-blur-lg lg:hidden'>
                    {LINKS.map((Link, index) => (
                        <a 
                            key={index} 
                            href={`#${Link.targetId}`}
                            className='block p-4 uppercase tracking-tighter' 
                            onClick={(e) => handlescroll(e, Link.targetId)}>
                            {Link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
