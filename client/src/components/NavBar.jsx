import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const navLinkStyle = ({ isActive }) =>
        `transition duration-200 ${
            isActive
                ? "text-violet-700 font-semibold"
                : "text-gray-600 hover:text-violet-700"
        }`;

    // SEARCH FUNCTION
    const handleSearch = (e) => {
        e.preventDefault();

        const search = searchTerm.trim();

        if (!search) return;

        navigate(`/products?search=${encodeURIComponent(search)}`);

        setMenuOpen(false);
    };

    return (

        <nav className="bg-white shadow-sm sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex justify-between items-center">

                    {/* LOGO */}

                    <Link to={"/"} className="text-3xl font-extrabold tracking-tight">

                        <span className="text-violet-700">CART</span>
                        <span className="text-gray-900">IVA</span>

                    </Link>

                    {/* DESKTOP NAVIGATION */}

                    <div className="hidden md:flex items-center gap-8">

                        <NavLink to={"/"} className={navLinkStyle}>
                            Home
                        </NavLink>

                        <NavLink to={"/products"} className={navLinkStyle}>
                            Shop
                        </NavLink>

                        <NavLink to={"/products"} className={navLinkStyle}>
                            Categories
                        </NavLink>

                    </div>

                    {/* DESKTOP SEARCH BAR */}

                    <form
                        onSubmit={handleSearch}
                        className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-violet-300 transition"
                    >

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent outline-none px-2 w-full text-sm"
                        />

                        <button type="submit" aria-label="Search products">
                            <Search
                                size={19}
                                className="text-gray-500 hover:text-violet-700 cursor-pointer"
                            />
                        </button>

                    </form>

                    {/* RIGHT SIDE */}

                    <div className="hidden md:flex items-center gap-5">

                        <Link
                            to={"/cart"}
                            className="relative text-gray-700 hover:text-violet-700 transition"
                        >

                            <ShoppingBag size={24} />

                            <span className="absolute -top-2 -right-2 bg-violet-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>

                        </Link>

                        <Link
                            to={"/login"}
                            className="text-gray-700 hover:text-violet-700 font-medium"
                        >
                            Login
                        </Link>

                        <Link
                            to={"/register"}
                            className="bg-violet-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-violet-800 transition shadow-md shadow-violet-200"
                        >
                            Sign Up
                        </Link>

                    </div>

                    {/* MOBILE MENU BUTTON */}

                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >

                        {menuOpen ? <X size={26} /> : <Menu size={26} />}

                    </button>

                </div>

                {/* MOBILE MENU */}

                {menuOpen && (

                    <div className="md:hidden mt-5 pb-4 flex flex-col gap-5">

                        {/* MOBILE SEARCH */}

                        <form
                            onSubmit={handleSearch}
                            className="flex items-center bg-gray-100 rounded-full px-4 py-3"
                        >

                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent outline-none w-full text-sm"
                            />

                            <button type="submit" aria-label="Search products">
                                <Search size={20} className="text-violet-700" />
                            </button>

                        </form>

                        <NavLink
                            to={"/"}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to={"/products"}
                            onClick={() => setMenuOpen(false)}
                        >
                            Shop
                        </NavLink>

                        <NavLink
                            to={"/products"}
                            onClick={() => setMenuOpen(false)}
                        >
                            Categories
                        </NavLink>

                        <Link
                            to={"/cart"}
                            onClick={() => setMenuOpen(false)}
                        >
                            Shopping Cart
                        </Link>

                        <Link
                            to={"/login"}
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </Link>

                        <Link
                            to={"/register"}
                            onClick={() => setMenuOpen(false)}
                            className="bg-violet-700 text-white text-center py-3 rounded-full"
                        >
                            Sign Up
                        </Link>

                    </div>

                )}

            </div>

        </nav>

    );
};

export default NavBar;