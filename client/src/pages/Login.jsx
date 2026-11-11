import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ShoppingBag,
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center p-6">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                {/* Left Section */}
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
                            Welcome Back!
                            <br />
                            Your Shopping Journey Continues.
                        </h2>

                        <p className="text-violet-200 mt-5 leading-7">
                            Sign in to explore exciting products, discover
                            exclusive collections and enjoy a better shopping
                            experience with Cartiva.
                        </p>
                    </div>

                    <p className="text-sm text-violet-300">
                        © 2026 CARTIVA. All rights reserved.
                    </p>

                </div>

                {/* Right Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Welcome Back
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Login to your Cartiva account.
                        </p>
                    </div>

                    <form className="space-y-6">

                        {/* Email */}
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
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="flex items-center border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-violet-500">
                                <Lock size={19} className="text-gray-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full p-3 outline-none bg-transparent"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-violet-700"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-violet-700 font-semibold hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-violet-700 text-white py-3.5 rounded-xl font-semibold hover:bg-violet-800 transition shadow-lg shadow-violet-200"
                        >
                            Sign In
                        </button>

                    </form>

                    <p className="text-center text-gray-500 mt-7">
                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-violet-700 font-semibold ml-1 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;