
import { Link, useNavigate } from "react-router-dom";
import {
    ShoppingBag,
    Eye,
    EyeOff,
    User,
    Mail,
    Lock,
    Phone,
} from "lucide-react";

import { useState } from "react";
import API from "../services/api";

const Register = () => {

    const navigate = useNavigate();

    // Password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    // Loading and message states
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    // HANDLE INPUT CHANGE

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };


    // HANDLE FORM SUBMISSION

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        //server logic

        const res = await fetch("http://localhost:5000/register", {
            method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData)
        })
        

        console.log("User Data:", formData);



        // Password validation
        if (formData.password !== formData.confirmPassword) {

            setError("Passwords do not match!");

            return;

        }


        // Phone validation
        if (!/^[6-9]\d{9}$/.test(formData.phone)) {

            setError("Please enter a valid 10-digit Indian phone number.");

            return;

        }


        try {

            setLoading(true);

            // Send registration data to backend
            const response = await API.post("/register", {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            });


            if (response.data.success) {

                setMessage(
                    response.data.message || "Registration successful!"
                );

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                });

                // Redirect to login after successful registration
                setTimeout(() => {
                    navigate("/login");
                }, 1500);

            } else {

                setError(
                    response.data.message || "Registration failed."
                );

            }

        } catch (err) {

            console.error("Registration error:", err);

            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center p-6">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">


                {/* LEFT SECTION */}

                <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-violet-700 to-purple-950 text-white p-12">

                    <div>

                        <h1 className="text-3xl font-extrabold tracking-tight">
                            CARTIVA
                        </h1>

                        <p className="text-violet-200 mt-2">
                            Discover More. Shop Better.
                        </p>

                    </div>


                    <div>

                        <ShoppingBag size={55} className="mb-8 text-violet-200" />

                        <h2 className="text-4xl font-bold leading-tight">
                            Your next favorite thing is just a click away.
                        </h2>

                        <p className="text-violet-200 mt-5 leading-7">
                            Join Cartiva and discover a world of amazing products,
                            exclusive collections and exciting shopping experiences.
                        </p>

                    </div>


                    <p className="text-sm text-violet-300">
                        © 2026 CARTIVA. All rights reserved.
                    </p>

                </div>



                {/* RIGHT SECTION */}

                <div className="p-8 md:p-12">

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Create Account
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Start your shopping journey with us.
                        </p>

                    </div>



                    <form onSubmit={handleSubmit} className="space-y-5">


                        {/* NAME */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <User size={19} className="text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                            </div>

                        </div>



                        {/* EMAIL */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <Mail size={19} className="text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                            </div>

                        </div>



                        {/* PHONE NUMBER */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <Phone size={19} className="text-gray-400" />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your 10-digit phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={10}
                                    required
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                            </div>

                        </div>



                        {/* PASSWORD */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <Lock size={19} className="text-gray-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    minLength={6}
                                    required
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >

                                    {showPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />
                                    }

                                </button>

                            </div>

                        </div>



                        {/* CONFIRM PASSWORD */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <Lock size={19} className="text-gray-400" />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    minLength={6}
                                    required
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >

                                    {showConfirmPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />
                                    }

                                </button>

                            </div>

                        </div>



                        {/* SUCCESS MESSAGE */}

                        {message && (

                            <p className="text-green-600 text-sm font-medium bg-green-50 p-3 rounded-lg">
                                {message}
                            </p>

                        )}



                        {/* ERROR MESSAGE */}

                        {error && (

                            <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg">
                                {error}
                            </p>

                        )}



                        {/* REGISTER BUTTON */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-violet-700 text-white py-3.5 rounded-xl font-semibold hover:bg-violet-800 transition shadow-lg shadow-violet-200 disabled:bg-violet-400 disabled:cursor-not-allowed"
                        >

                            {loading ? "Creating Account..." : "Create Account"}

                        </button>

                    </form>



                    {/* LOGIN LINK */}

                    <p className="text-center text-gray-500 mt-7">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-violet-700 font-semibold ml-1 hover:underline"
                        >
                            Sign In
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

};

export default Register;
