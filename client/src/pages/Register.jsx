import { Link } from "react-router-dom";
import { ShoppingBag, Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useState } from "react";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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


                    <form className="space-y-5">

                        {/* NAME */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">

                                <User size={19} className="text-gray-400" />

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
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
                                    placeholder="Enter your email"
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
                                    placeholder="Create a password"
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
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
                                    placeholder="Confirm your password"
                                    className="w-full p-3 outline-none bg-transparent"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                </button>

                            </div>

                        </div>


                        {/* REGISTER BUTTON */}

                        <button
                            type="submit"
                            className="w-full bg-violet-700 text-white py-3.5 rounded-xl font-semibold hover:bg-violet-800 transition shadow-lg shadow-violet-200"
                        >
                            Create Account
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