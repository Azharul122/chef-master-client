import React from 'react';
import nightBg from "../../assets/Images/night-bg2.jpeg";
import { FaPlay } from 'react-icons/fa';


const Magic_Night = () => {
    return (
        <div className='w-full h-[700px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${nightBg})` }}>
            <div className="flex flex-col gap-5  justify-center items-center h-full">
                <div className="h-24 w-24 shadow-2xl rounded-full border-[5px] z-30 border-[#000] flex justify-center items-center">
                    <FaPlay className='text-3xl font-bold text-[#f5f5f5] z-20 cursor-pointer'/>
                    
                </div>
                <p className='text-white font-extrabold text-2xl'>MAGIC OF THE NIGHT</p>
            </div>
        </div>
    );
};

export default Magic_Night;