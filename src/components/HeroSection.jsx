import React from 'react';
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className='relative flex h-screen items-center justify-center'>
            <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
                <video
                    src={video}
                    autoPlay muted playsInline poster={video}
                    className='h-full w-full object-cover'
                ></video>
            </div>
            <div className='absolute inset-0 -z-20 bg-gradient-to-b from-transparent from-70% to-black'></div>
            <div className='relative z-20 flex h-screen flex-col justify-end pb-7 sm:pb-10'>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    src={logo}
                    alt="restura"
                    className='w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto p-4'
                />
                <p className='ps-8 sm:ps-16 md:ps-32 text-sm sm:text-base md:text-lg tracking-tighter text-white'>Paris</p>
            </div>
        </div>
    );
};

export default HeroSection;
