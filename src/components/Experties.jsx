import React from 'react';
import { CUSINES } from '../constants';

const Experties = () => {
    return (
        <div id='expertise'>
            <h2 className='my-8 text-center tracking-tighter 
            lg:text-4xl'>Our Expertise</h2>
            <div className='container mx-auto px-4'>
                {
                    CUSINES.map((cusine,index) =>(
                        <div key={index} className='flex items-center
                        border-b-4 border-dotted border-neutral-70040 py-2'>
                            <div className='flex-shrink-0 pr-8 text-2xl
                            '>{cusine.number}

                            </div>
                            <div className='w-1/3 flex-shrink-0'>
                              <img src={cusine.image} alt="" className='h-auto rounded-3xl'/>
                            </div>
                            <div className='pl-8 '>
                                <h3 className='text-2xl uppercase tracking-tighter text-rose-200'>{cusine.title}</h3>
                                <p className='mt-4 text-lg tracking-tighter'></p>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default Experties;