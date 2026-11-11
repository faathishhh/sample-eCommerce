import { Link } from "react-router-dom";

import {
    ShoppingBag,
    Camera,
    Users,
    MessageCircle,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300">

            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Stay Updated with CARTIVA
                        </h2>

                        <p className="text-gray-400 text-sm">
                            Subscribe to discover exciting deals and new arrivals.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full md:w-80 px-4 py-3 rounded-l-lg bg-gray-900 border border-gray-700 text-white outline-none focus:border-violet-500"
                        />

                        <button
                            type="button"
                            className="bg-violet-600 hover:bg-violet-700 px-5 rounded-r-lg text-white transition"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>

                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div>

                    <Link to="/" className="flex items-center gap-2 mb-5">

                        <div className="bg-violet-600 p-2 rounded-lg">
                            <ShoppingBag className="text-white" size={23} />
                        </div>

                        <span className="text-2xl font-bold text-white">
                            CARTI<span className="text-violet-500">VA</span>
                        </span>

                    </Link>

                    <p className="text-sm text-gray-400 leading-7 mb-6">
                        Discover a better way to shop. Explore quality products,
                        exciting collections, and amazing deals — all in one place.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="p-2.5 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
                        >
                            <Camera size={19} />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="p-2.5 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
                        >
                            <Users size={19} />
                        </a>

                        <a
                            href="#"
                            aria-label="Twitter"
                            className="p-2.5 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
                        >
                            <MessageCircle size={19} />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}
                <div>

                    <h3 className="text-white font-semibold text-lg mb-6">
                        Quick Links
                    </h3>

                    <ul className="space-y-4 text-sm">

                        <li>
                            <Link to="/" className="hover:text-violet-400 transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/products" className="hover:text-violet-400 transition">
                                Shop Products
                            </Link>
                        </li>

                        <li>
                            <Link to="/cart" className="hover:text-violet-400 transition">
                                My Cart
                            </Link>
                        </li>

                        <li>
                            <Link to="/login" className="hover:text-violet-400 transition">
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to="/register" className="hover:text-violet-400 transition">
                                Create Account
                            </Link>
                        </li>

                    </ul>

                </div>

                {/* Customer Support */}
                <div>

                    <h3 className="text-white font-semibold text-lg mb-6">
                        Customer Support
                    </h3>

                    <ul className="space-y-4 text-sm">

                        <li>
                            <a href="#" className="hover:text-violet-400 transition">
                                Help Center
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-violet-400 transition">
                                Shipping Information
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-violet-400 transition">
                                Return Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-violet-400 transition">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-violet-400 transition">
                                Terms & Conditions
                            </a>
                        </li>

                    </ul>

                </div>

                {/* Contact Section */}
                <div>

                    <h3 className="text-white font-semibold text-lg mb-6">
                        Get in Touch
                    </h3>

                    <ul className="space-y-5 text-sm">

                        <li className="flex items-start gap-3">
                            <Mail size={19} className="text-violet-500 mt-1" />
                            <span>support@cartiva.com</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <Phone size={19} className="text-violet-500 mt-1" />
                            <span>+91 98765 43210</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <MapPin size={19} className="text-violet-500 mt-1" />
                            <span>Kerala, India</span>
                        </li>

                    </ul>

                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} CARTIVA. All rights reserved.
                    </p>

                    <p className="text-center">
                        Discover More.
                        <span className="text-violet-500"> Shop Better.</span>
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;