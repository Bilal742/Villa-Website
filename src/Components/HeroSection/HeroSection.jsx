import React from "react";
import background from "../../assets/Img/background1.jpg";
import videoFrame from "../../assets/Img/video-frame.jpg";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mt-32">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-center bg-cover filter blur-md scale-110"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            {/* Content */}
            <div className="relative text-center text-white px-4">
                {/* Small Heading */}
                <h6 className="text-[#ee626b] font-bold mb-4 text-sm sm:text-base md:text-lg">
                    | Video View
                </h6>

                {/* Main Headings */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                    Get Closer View &
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] font-bold mb-10 sm:mb-16 md:mb-20">
                    Different Feeling
                </h2>

                {/* Video Thumbnail with Play Icon */}
                <div className="relative w-full max-w-6xl mx-auto px-2">
                    <img
                        src={videoFrame}
                        alt="Video Thumbnail"
                        className="w-full rounded-2xl shadow-lg"
                    />

                    {/* Play Icon */}
                    <Link
                        to={"https://www.youtube.com/watch?v=QmGVInnk0Zk"}
                        target="_blank"
                    >
                        <PlayCircle className="absolute inset-0 m-auto text-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-90 hover:scale-110 transition-transform cursor-pointer" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

