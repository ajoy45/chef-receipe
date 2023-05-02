import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../src/126364-cooking.json";
const Banner = () => {
    
    return (
        <div className='md:flex justify-center  items-center  bg-slate-100 px-12'>
            <div >
                <h4 className='text-2xl italic text-lime-500 font-thin py-3'>Wellcome to Cafe India</h4>
                <p className='text-4xl text-black py-3 leading-relaxed'> FOOD TASTES BETTER <br /> WHEN YOU EAT IT WITH YOUR FAMILY.</p>
                <button className='bg-red-500 px-4 py-2 text-white'>Book Now</button>
            </div>
            <div className='md:w-2/5'>
               <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Banner;