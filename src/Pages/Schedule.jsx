import { useState } from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Schedule() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        note: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {   // ✅ async function
        e.preventDefault();
        console.log("Booking Data:", formData);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "9b95e7ea-7c60-426b-845a-582adfed67a2", // Web3Forms Access Key
                    ...formData,   // ✅ formData ko spread kar rahe hain
                }),
            });

            const data = await response.json();
            console.log("Response:", data);

            if (data.success) {
                setSuccess(true);
                setFormData({ name: "", email: "", date: "", time: "", note: "" });
            } else {
                alert("Form submission failed. Try again!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <>
            <MainNavbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 px-4">
                <div className="bg-white shadow-2xl p-6 sm:p-10 md:p-12 rounded-2xl w-full max-w-7xl mt-20 mb-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-gray-800">
                        🏡 Schedule a Visit
                    </h1>
                    <p className="text-center text-gray-500 mb-6 sm:mb-8 text-base sm:text-lg">
                        Fill out the form below and we will get back to you shortly.
                    </p>

                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center text-base sm:text-lg font-semibold">
                            ✅ Booking Successful! We will contact you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-semibold mb-2 text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2 text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-semibold mb-2 text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2 text-gray-700">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold mb-2 text-gray-700">
                                Special Request
                            </label>
                            <textarea
                                name="note"
                                placeholder="Any special request?"
                                value={formData.note}
                                onChange={handleChange}
                                className="w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                rows="4"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-orange-700 transition duration-300"
                        >
                            🚀 Book Now
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}


// service_nit6ljh