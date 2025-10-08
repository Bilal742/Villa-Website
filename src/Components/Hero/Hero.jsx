import { Link } from "react-router-dom";

export default function Hero({ image, title, homeText, currentPage }) {
    return (
        <section className={`relative w-full h-96 overflow-hidden`}>
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${image})` }}
            />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[17px] mb-8 bg-white text-black p-2 ps-7 pe-7 font-medium">
                    <Link
                        to="/"
                    >
                        {homeText}
                    </Link>
                    <span>/ {currentPage}</span>
                </div>

                {/* Page Title */}
                <h1 className="text-5xl uppercase font-extrabold">{title}</h1>
            </div>
        </section>
    );
}
