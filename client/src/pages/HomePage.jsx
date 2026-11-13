import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Headphones, Star, Sparkles, CreditCard, Heart, MoveRight, Zap, Clock, Gift, CheckCircle, } from "lucide-react";
import { initialProducts } from "./Products";

const categories = [
    {
        name: "Electronics",
        subtitle: "Technology made simple",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",
        number: "01",
    },
    {
        name: "Fashion",
        subtitle: "Style that speaks",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        number: "02",
    },
    {
        name: "Home & Living",
        subtitle: "Make yourself at home",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
        number: "03",
    },
];

const benefits = [
    {
        icon: Truck,
        title: "Free & Fast Delivery",
        description: "Enjoy convenient delivery on eligible orders.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Shopping",
        description: "Shop confidently with secure transactions.",
    },
    {
        icon: CreditCard,
        title: "Easy Payments",
        description: "A convenient shopping experience from start to finish.",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description: "We're always ready to help you.",
    },
];

const Home = () => {

    const featuredProducts = initialProducts
        .filter((product) => product.isFeatured && product.isActive !== false)
        .slice(0, 4);

    const displayProducts =
        featuredProducts.length > 0
            ? featuredProducts
            : initialProducts.filter(
                (product) => product.isActive !== false
            ).slice(0, 4);

    return (

        <main className="bg-[#FAF9FE] min-h-screen overflow-hidden">

            {/* HERO SECTION */}

            <section className="px-4 sm:px-6 lg:px-10 pt-6">

                <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#321064] via-[#5822A5] to-[#8655D8]">

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* HERO CONTENT */}

                        <div className="relative z-10 p-7 sm:p-10 lg:p-16 text-white">

                            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm mb-7">

                                <Sparkles size={16} />

                                Your favourite shopping destination

                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.12] tracking-tight">

                                Discover More.

                                <span className="block text-violet-200 mt-2">
                                    Shop Better.
                                </span>

                            </h1>

                            <p className="text-violet-100 text-base sm:text-lg leading-8 mt-7 max-w-lg">

                                Explore products you'll love, discover exciting
                                collections and enjoy a shopping experience
                                that makes every purchase special.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-9">

                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-3 bg-white text-violet-800 px-7 py-4 rounded-xl font-bold hover:bg-violet-100 transition duration-300 shadow-xl"
                                >

                                    Start Shopping

                                    <ArrowRight size={20} />

                                </Link>

                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
                                >

                                    Explore Collection

                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-7 sm:gap-10 mt-12 pt-8 border-t border-white/20">

                                <div>
                                    <h3 className="text-3xl font-extrabold">
                                        100%
                                    </h3>
                                    <p className="text-violet-200 text-sm mt-1">
                                        Shopping Experience
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-extrabold">
                                        24/7
                                    </h3>
                                    <p className="text-violet-200 text-sm mt-1">
                                        Customer Support
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-extrabold">
                                        Easy
                                    </h3>
                                    <p className="text-violet-200 text-sm mt-1">
                                        Online Shopping
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* HERO IMAGE */}

                        <div className="relative min-h-[350px] lg:min-h-[650px] p-5 sm:p-8">

                            <img
                                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200"
                                alt="CARTIVA shopping collection"
                                className="w-full h-full min-h-[350px] lg:min-h-[590px] object-cover rounded-3xl"
                            />

                            <div className="absolute inset-5 sm:inset-8 rounded-3xl bg-gradient-to-t from-purple-950/50 to-transparent"></div>

                            <div className="absolute bottom-12 left-10 sm:left-14 bg-white rounded-2xl p-5 shadow-2xl max-w-[240px]">

                                <div className="flex items-center gap-2 text-violet-700">

                                    <Sparkles size={18} />

                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        CARTIVA COLLECTION
                                    </span>

                                </div>

                                <h3 className="text-xl font-extrabold text-gray-900 mt-3">
                                    Find Your Next Favourite.
                                </h3>

                                <Link
                                    to="/products"
                                    className="text-violet-700 font-semibold text-sm flex items-center gap-2 mt-3"
                                >
                                    Shop Now <ArrowRight size={16} />
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* TRUST HIGHLIGHTS */}

            <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                    {[
                        {
                            icon: Truck,
                            title: "Fast Delivery",
                            text: "Convenient delivery",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Secure Shopping",
                            text: "Shop with confidence",
                        },
                        {
                            icon: CreditCard,
                            title: "Easy Payments",
                            text: "Simple checkout",
                        },
                        {
                            icon: Headphones,
                            title: "24/7 Support",
                            text: "We're here to help",
                        },
                    ].map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                            >

                                <div className="w-12 h-12 shrink-0 rounded-xl bg-violet-100 flex items-center justify-center">

                                    <Icon size={23} className="text-violet-700" />

                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                        {item.text}
                                    </p>
                                </div>

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* CATEGORY SECTION */}

            <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-9">

                    <div>

                        <p className="text-violet-700 font-bold uppercase tracking-[3px] text-xs">
                            Explore our collections
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
                            Shop by Category
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Discover something special in every collection.
                        </p>

                    </div>

                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-violet-700 font-bold hover:gap-4 transition-all"
                    >
                        View All Categories <MoveRight size={19} />
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {categories.map((category) => (

                        <Link
                            to="/products"
                            key={category.name}
                            className="group relative h-[350px] rounded-3xl overflow-hidden"
                        >

                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                            <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-4 py-2 text-xs font-bold">
                                COLLECTION {category.number}
                            </div>

                            <div className="absolute bottom-0 left-0 p-7 text-white">

                                <p className="text-violet-200 text-sm font-medium">
                                    {category.subtitle}
                                </p>

                                <h3 className="text-3xl font-extrabold mt-2">
                                    {category.name}
                                </h3>

                                <span className="inline-flex items-center gap-2 mt-5 font-semibold group-hover:gap-4 transition-all">
                                    Explore Collection
                                    <ArrowRight size={18} />
                                </span>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>


            {/* FEATURED PRODUCTS */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-5 sm:px-8">

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">

                        <div>

                            <div className="flex items-center gap-2 text-violet-700">

                                <Zap size={18} />

                                <p className="font-bold uppercase tracking-[3px] text-xs">
                                    Trending now
                                </p>

                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
                                Featured Products
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Handpicked products worth exploring.
                            </p>

                        </div>

                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 text-violet-700 font-bold hover:gap-4 transition-all"
                        >
                            View All Products <ArrowRight size={19} />
                        </Link>

                    </div>


                    {displayProducts.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                            {displayProducts.map((product) => {

                                const image = product.images?.[0];

                                const hasDiscount =
                                    product.discountPrice != null &&
                                    product.discountPrice < product.price;

                                return (

                                    <div
                                        key={product._id}
                                        className="group bg-[#FAF9FE] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                                    >

                                        <Link
                                            to={`/products/${product._id}`}
                                            className="block relative h-64 overflow-hidden"
                                        >

                                            {image ? (

                                                <img
                                                    src={image}
                                                    alt={product.productName}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                                />

                                            ) : (

                                                <div className="w-full h-full flex items-center justify-center bg-violet-100">
                                                    <ShoppingBag size={45} className="text-violet-400" />
                                                </div>

                                            )}

                                            <span className="absolute top-4 left-4 bg-violet-700 text-white px-3 py-1.5 rounded-full text-xs font-bold">
                                                {product.isFeatured ? "FEATURED" : "POPULAR"}
                                            </span>

                                            <div className="absolute top-4 right-4 bg-white p-2.5 rounded-full text-gray-500 shadow-md">
                                                <Heart size={17} />
                                            </div>

                                        </Link>


                                        <div className="p-5">

                                            <p className="text-xs uppercase tracking-wider text-violet-600 font-bold">
                                                {product.brand || product.category}
                                            </p>

                                            <Link to={`/products/${product._id}`}>

                                                <h3 className="font-bold text-gray-900 text-lg mt-2 line-clamp-1 hover:text-violet-700 transition">
                                                    {product.productName}
                                                </h3>

                                            </Link>


                                            <div className="flex items-center gap-1 mt-3">

                                                <Star
                                                    size={16}
                                                    fill="currentColor"
                                                    className="text-yellow-400"
                                                />

                                                <span className="text-sm font-semibold text-gray-700">
                                                    {product.ratings || 0}
                                                </span>

                                                <span className="text-xs text-gray-400">
                                                    ({product.numReviews || 0} reviews)
                                                </span>

                                            </div>


                                            <div className="flex items-center gap-3 mt-4">

                                                <span className="text-xl font-extrabold text-violet-700">
                                                    ₹{(hasDiscount
                                                        ? product.discountPrice
                                                        : product.price
                                                    ).toLocaleString("en-IN")}
                                                </span>

                                                {hasDiscount && (

                                                    <span className="text-sm text-gray-400 line-through">
                                                        ₹{product.price.toLocaleString("en-IN")}
                                                    </span>

                                                )}

                                            </div>


                                            <Link
                                                to={`/products/${product._id}`}
                                                className="mt-5 w-full bg-violet-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-violet-800 transition"
                                            >

                                                View Product

                                                <ArrowRight size={17} />

                                            </Link>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    ) : (

                        <div className="text-center py-16 bg-[#FAF9FE] rounded-2xl">

                            <ShoppingBag size={45} className="mx-auto text-violet-400" />

                            <h3 className="text-xl font-bold mt-4">
                                Products Coming Soon
                            </h3>

                            <p className="text-gray-500 mt-2">
                                We're preparing something special for you.
                            </p>

                            <Link
                                to="/products"
                                className="inline-flex mt-5 bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold"
                            >
                                Explore Shop
                            </Link>

                        </div>

                    )}

                </div>

            </section>


            {/* SPECIAL OFFER SECTION */}

            <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">

                <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#321064] to-[#7540C5] p-8 sm:p-12 lg:p-16">

                    <div className="absolute -right-20 -top-32 w-80 h-80 rounded-full bg-white/10"></div>

                    <div className="absolute right-20 -bottom-40 w-80 h-80 rounded-full bg-white/10"></div>

                    <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">

                        <div className="text-white">

                            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold">
                                <Gift size={17} />
                                A better way to shop
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-6">
                                Great Finds.
                                <br />
                                Better Choices.
                            </h2>

                            <p className="text-violet-100 leading-7 mt-5 max-w-lg">
                                From everyday essentials to special finds,
                                discover products that make your life better.
                            </p>

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-3 bg-white text-violet-800 px-7 py-4 rounded-xl font-bold mt-8 hover:bg-violet-100 transition"
                            >
                                Explore Products
                                <ArrowRight size={19} />
                            </Link>

                        </div>


                        <div className="hidden md:flex justify-center">

                            <div className="w-64 h-64 rounded-full border border-white/30 bg-white/10 flex items-center justify-center">

                                <div className="w-48 h-48 rounded-full border border-white/40 bg-white/10 flex flex-col items-center justify-center text-white">

                                    <Sparkles size={45} />

                                    <h3 className="text-3xl font-extrabold mt-4">
                                        CARTIVA
                                    </h3>

                                    <p className="text-violet-200 text-xs tracking-widest mt-2">
                                        DISCOVER MORE
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* WHY CHOOSE CARTIVA */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-5 sm:px-8">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-violet-700 font-bold uppercase tracking-[3px] text-xs">
                            The CARTIVA experience
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4">
                            Shopping Made Better
                        </h2>

                        <p className="text-gray-500 mt-4 leading-7">
                            We believe shopping should be simple,
                            comfortable and enjoyable.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (

                                <div
                                    key={benefit.title}
                                    className="text-center p-8 rounded-2xl bg-[#FAF9FE] hover:bg-violet-50 hover:-translate-y-1 transition duration-300"
                                >

                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-100 flex items-center justify-center">

                                        <Icon size={30} className="text-violet-700" />

                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mt-6">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6 mt-3">
                                        {benefit.description}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* NEWSLETTER SECTION */}

            <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">

                <div className="bg-violet-50 border border-violet-100 rounded-3xl p-8 sm:p-12 text-center">

                    <div className="w-14 h-14 rounded-2xl bg-violet-100 mx-auto flex items-center justify-center">

                        <Sparkles size={27} className="text-violet-700" />

                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-6">
                        Stay in the Loop
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-lg mx-auto leading-7">
                        Discover new arrivals, exciting collections and
                        updates from CARTIVA.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Newsletter subscription will be available soon!");
                        }}
                        className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 mt-8"
                    >

                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="flex-1 min-w-0 px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 bg-white"
                        />

                        <button
                            type="submit"
                            className="bg-violet-700 text-white px-7 py-4 rounded-xl font-bold hover:bg-violet-800 transition"
                        >
                            Subscribe
                        </button>

                    </form>

                    <p className="text-xs text-gray-400 mt-5 flex items-center justify-center gap-2">
                        <CheckCircle size={14} />
                        Stay updated with CARTIVA.
                    </p>

                </div>

            </section>

        </main>

    );

};

export default Home;