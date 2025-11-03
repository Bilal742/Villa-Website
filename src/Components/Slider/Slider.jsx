import React, { useState, useEffect } from 'react';
import Slide1 from "../../assets/Slider-Img/Slide1.jpg";
import Slide2 from "../../assets/Slider-Img/Slide2.jpg";
import Slide3 from "../../assets/Slider-Img/slide3.jpg";


const FullScreenSliderDirect = () => {
    const [current, setCurrent] = useState(0);
    const slidesLength = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slidesLength);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Slide 1 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${current === 0 ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                <img
                    src={Slide1}
                    alt="Slide 1"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-32">
                    <h2 className="text-black bg-white bg-opacity-40 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] font-bold px-3 py-1 mb-4 rounded">
                        Toronto, <span className="text-[#BB4D00]">Canada</span>
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        HURRY
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        GET THE BEST
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        VILLA FOR YOU
                    </h2>
                </div>
            </div>

            {/* Slide 2 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${current === 1 ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                <img
                    src={Slide2}
                    alt="Slide 2"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-32">
                    <h2 className="text-black bg-white bg-opacity-40 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] font-bold px-3 py-1 mb-4 rounded">
                        Melbourne, <span className="text-[#BB4D00]">Australia</span>
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        LUXURY PROPERTIES
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        AWAIT YOU
                    </h2>
                </div>
            </div>

            {/* Slide 3 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${current === 2 ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                <img
                    src={Slide3}
                    alt="Slide 3"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-32">
                    <h2 className="text-black bg-white bg-opacity-40 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] font-bold px-3 py-1 mb-4 rounded">
                        Miami, <span className="text-[#BB4D00]">South Florida</span>
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        SCHEDULE A VISIT
                    </h2>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        TODAY
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default FullScreenSliderDirect;
