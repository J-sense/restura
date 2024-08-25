import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
    return (
        <div className='mb-8 mt-20'>
            <div className='flex items-center
            justify-center gap-8'>{
                SOCIAL_MEDIA_LINKS.map((link,index)=>(
                    <a href={link.href} key={index}>
                        {link.icon}
                    </a>
                ))
            }
                
            </div>
            
            <p className='mt-8 text-center tracking-tighter
            text-neutral-500 '>All rights reserved</p>
            
        </div>
    );
};

export default Footer;