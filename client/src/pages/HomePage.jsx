import { Link } from "react-router-dom";
import {
    ArrowRight,
    ShoppingBag,
    Truck,
    ShieldCheck,
    Headphones,
    Star,
    Sparkles,
} from "lucide-react";

const categories = [
    {
        name: "Electronics",
        description: "Upgrade your everyday life",
        image:
            "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    },
    {
        name: "Fashion",
        description: "Find your perfect style",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
        name: "Home & Living",
        description: "Make your space beautiful",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600",
    },
];

const featuredProducts = [
    {
        _id: "1",
        productName: "Premium Wireless Headphones",
        price: 3499,
        discountPrice: 2499,
        ratings: 4.8,
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        ],
    },
    {
        _id: "2",
        productName: "Classic Wrist Watch",
        price: 2499,
        discountPrice: 1899,
        ratings: 4.5,
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        ],
    },
    {
        _id: "3",
        productName: "Modern Backpack",
        price: 1999,
        discountPrice: 1499,
        ratings: 4.6,
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        ],
    },
    {
        _id: "4",
        productName: "Stylish Sunglasses",
        price: 1499,
        discountPrice: 999,
        ratings: 4.4,
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
        ],
    },
];

const HomePage = () => {
    return (
        <div className="bg-[#F8F7FC] min-h-screen">

            {/* HERO SECTION */}
            <section className="px-5 md:px-12 pt-8">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-violet-800 via-violet-700 to-purple-950 rounded-[30px] overflow-hidden">

                    <div className="grid md:grid-cols-2 items-center">

                        {/* Hero Content */}
                        <div className="p-8 md:p-14 lg:p-16 text-white">

                            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-medium mb-7">
                                <Sparkles size={16} />
                                Discover a better way to shop
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                                Everything You Love,
                                <span className="block text-violet-200">
                                    All in One Place.
                                </span>
                            </h1>

                            <p className="text-violet-100 mt-6 leading-7 max-w-lg">
                                Discover amazing collections, explore trending products
                                and enjoy a shopping experience designed around you.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-9">

                                <Link
                                    to="/products"
                                    className="bg-white text-violet-800 px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-violet-100 transition"
                                >
                                    Shop Now
                                    <ArrowRight size={19} />
                                </Link>

                                <Link
                                    to="/products"
                                    className="border border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition"
                                >
                                    Explore Collections
                                </Link>

                            </div>

                            <div className="flex gap-8 mt-12">

                                <div>
                                    <h3 className="text-2xl font-bold">1000+</h3>
                                    <p className="text-violet-200 text-sm">Products</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">500+</h3>
                                    <p className="text-violet-200 text-sm">Happy Customers</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">24/7</h3>
                                    <p className="text-violet-200 text-sm">Support</p>
                                </div>

                            </div>

                        </div>

                        {/* Hero Image */}
                        <div className="h-80 md:h-full min-h-[450px] relative">

                            <img
                                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1000"
                                alt="Shopping collection"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-violet-800/30 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">

                                <p className="text-sm text-gray-500">
                                    Your shopping destination
                                </p>

                                <h3 className="text-xl font-bold text-violet-800 mt-1">
                                    Discover CARTIVA
                                </h3>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="px-5 md:px-12 py-20">

                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-10">

                        <div>
                            <p className="text-violet-700 font-semibold uppercase tracking-widest text-sm">
                                Explore collections
                            </p>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
                                Shop by Category
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Find everything you need in one place.
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="hidden sm:flex items-center gap-2 text-violet-700 font-semibold hover:underline"
                        >
                            View All
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

                        {categories.map((category) => (

                            <Link
                                to="/products"
                                key={category.name}
                                className="group relative h-80 rounded-2xl overflow-hidden shadow-sm"
                            >

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-7 text-white">

                                    <h3 className="text-2xl font-bold">
                                        {category.name}
                                    </h3>

                                    <p className="text-gray-200 mt-2">
                                        {category.description}
                                    </p>

                                    <span className="inline-flex items-center gap-2 mt-4 font-semibold">
                                        Explore Now
                                        <ArrowRight size={18} />
                                    </span>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="px-5 md:px-12 py-16 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-10">

                        <div>
                            <p className="text-violet-700 font-semibold uppercase tracking-widest text-sm">
                                Handpicked for you
                            </p>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
                                Featured Products
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Discover some of our most-loved picks.
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="hidden sm:flex items-center gap-2 text-violet-700 font-semibold hover:underline"
                        >
                            View All
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                        {featuredProducts.map((product) => (

                            <div
                                key={product._id}
                                className="group bg-[#F8F7FC] rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                            >

                                <div className="h-64 overflow-hidden relative">

                                    <img
                                        src={product.images[0]}
                                        alt={product.productName}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    <span className="absolute top-4 left-4 bg-violet-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                        FEATURED
                                    </span>

                                </div>

                                <div className="p-5">

                                    <h3 className="font-bold text-gray-900 text-lg">
                                        {product.productName}
                                    </h3>

                                    <div className="flex items-center gap-1 mt-2">
                                        <Star
                                            size={16}
                                            fill="currentColor"
                                            className="text-yellow-400"
                                        />

                                        <span className="text-sm text-gray-600">
                                            {product.ratings}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 mt-4">

                                        <span className="text-xl font-extrabold text-violet-700">
                                            ₹{product.discountPrice.toLocaleString("en-IN")}
                                        </span>

                                        <span className="text-sm text-gray-400 line-through">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </span>

                                    </div>

                                    <Link
                                        to="/products"
                                        className="mt-5 w-full bg-violet-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-violet-800 transition"
                                    >
                                        <ShoppingBag size={18} />
                                        Shop Now
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* SPECIAL OFFER BANNER */}
            <section className="px-5 md:px-12 py-20">

                <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-purple-950 to-violet-700 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="text-white">

                        <p className="text-violet-200 font-semibold uppercase tracking-widest text-sm">
                            Special shopping experience
                        </p>

                        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
                            Great Finds.
                            <br />
                            Better Prices.
                        </h2>

                        <p className="text-violet-200 mt-5 max-w-lg leading-7">
                            Discover exciting deals and amazing collections.
                            Your next favourite product is waiting for you.
                        </p>

                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 mt-8 bg-white text-violet-800 px-7 py-3.5 rounded-xl font-bold hover:bg-violet-100 transition"
                        >
                            Explore Deals
                            <ArrowRight size={19} />
                        </Link>

                    </div>

                    <div className="bg-white/10 border border-white/20 rounded-3xl p-10 text-center text-white">

                        <Sparkles size={55} className="mx-auto text-violet-200" />

                        <h3 className="text-4xl font-extrabold mt-5">
                            CARTIVA
                        </h3>

                        <p className="text-violet-200 mt-2">
                            Discover More. Shop Better.
                        </p>

                    </div>

                </div>

            </section>

            {/* WHY CHOOSE CARTIVA */}
            <section className="px-5 md:px-12 py-16 bg-white">

                <div className="max-w-7xl mx-auto text-center">

                    <p className="text-violet-700 font-semibold uppercase tracking-widest text-sm">
                        The CARTIVA experience
                    </p>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
                        Why Shop With Us?
                    </h2>

                    <p className="text-gray-500 mt-3">
                        We make shopping simple, comfortable and enjoyable.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                        {[
                            {
                                icon: ShoppingBag,
                                title: "Quality Products",
                                description: "Explore carefully selected products.",
                            },
                            {
                                icon: Truck,
                                title: "Fast Delivery",
                                description: "Get your favourite products delivered.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Secure Shopping",
                                description: "Enjoy a safe shopping experience.",
                            },
                            {
                                icon: Headphones,
                                title: "Customer Support",
                                description: "We're here whenever you need help.",
                            },
                        ].map((feature) => {

                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="p-7 rounded-2xl bg-[#F8F7FC] hover:bg-violet-50 transition"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto">
                                        <Icon size={30} className="text-violet-700" />
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mt-5">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2 leading-6">
                                        {feature.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* <footer className="bg-purple-950 text-white px-5 md:px-12 py-14">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                        <div className="md:col-span-2">

                            <h2 className="text-3xl font-extrabold tracking-tight">
                                CARTIVA
                            </h2>

                            <p className="text-violet-300 mt-3">
                                Discover More. Shop Better.
                            </p>

                            <p className="text-gray-300 mt-5 leading-7 max-w-sm">
                                Your favourite shopping destination.
                                Discover products you love and enjoy
                                a better way to shop.
                            </p>

                        </div>

                        <div>

                            <h3 className="font-bold text-lg mb-5">
                                Quick Links
                            </h3>

                            <div className="flex flex-col gap-3 text-gray-300">

                                <Link to="/" className="hover:text-white">Home</Link>
                                <Link to="/products" className="hover:text-white">Shop</Link>
                                <Link to="/cart" className="hover:text-white">My Cart</Link>
                                <Link to="/login" className="hover:text-white">Login</Link>

                            </div>

                        </div>

                        <div>

                            <h3 className="font-bold text-lg mb-5">
                                Account
                            </h3>

                            <div className="flex flex-col gap-3 text-gray-300">

                                <Link to="/register" className="hover:text-white">
                                    Create Account
                                </Link>

                                <Link to="/login" className="hover:text-white">
                                    Sign In
                                </Link>

                                <Link to="/products" className="hover:text-white">
                                    Explore Products
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="border-t border-white/15 mt-12 pt-7 text-center text-sm text-gray-400">
                        © 2026 CARTIVA. All rights reserved.
                    </div>

                </div>

            </footer> */}

        </div>
    );
};

export default HomePage;