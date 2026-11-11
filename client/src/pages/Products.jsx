import { useState } from "react";
import {
    ShoppingCart,
    Search,
    Star,
    Heart,
    SlidersHorizontal,
    PackageSearch,
} from "lucide-react";

const initialProducts = [
    {
        _id: "1",
        productName: "Premium Wireless Headphones",
        description: "Experience high-quality sound with premium wireless headphones.",
        price: 3499,
        discountPrice: 2499,
        category: "Electronics",
        brand: "Sony",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        ],
        stock: 15,
        ratings: 4.8,
        numReviews: 120,
        isFeatured: true,
        isActive: true,
    },
    {
        _id: "2",
        productName: "Classic Wrist Watch",
        description: "A stylish watch designed for everyday elegance.",
        price: 2499,
        discountPrice: 1899,
        category: "Fashion",
        brand: "Fossil",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        ],
        stock: 10,
        ratings: 4.5,
        numReviews: 85,
        isFeatured: false,
        isActive: true,
    },
    {
        _id: "3",
        productName: "Modern Backpack",
        description: "A spacious and comfortable backpack for everyday use.",
        price: 1999,
        discountPrice: 1499,
        category: "Fashion",
        brand: "Skybags",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        ],
        stock: 20,
        ratings: 4.6,
        numReviews: 95,
        isFeatured: true,
        isActive: true,
    },
    {
        _id: "4",
        productName: "Smartphone",
        description: "Powerful performance with an impressive camera.",
        price: 21999,
        discountPrice: 18999,
        category: "Electronics",
        brand: "Samsung",
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        ],
        stock: 8,
        ratings: 4.9,
        numReviews: 210,
        isFeatured: true,
        isActive: true,
    },
    {
        _id: "5",
        productName: "Modern Lounge Chair",
        description: "A comfortable chair that adds elegance to your home.",
        price: 4499,
        discountPrice: 3499,
        category: "Home",
        brand: "Urban Living",
        images: [
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
        ],
        stock: 5,
        ratings: 4.7,
        numReviews: 65,
        isFeatured: false,
        isActive: true,
    },
    {
        _id: "6",
        productName: "Stylish Sunglasses",
        description: "Modern sunglasses with a timeless design.",
        price: 1499,
        discountPrice: 999,
        category: "Fashion",
        brand: "Ray-Ban",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
        ],
        stock: 0,
        ratings: 4.4,
        numReviews: 48,
        isFeatured: false,
        isActive: true,
    },
];

const Products = () => {
    const [products] = useState(initialProducts);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [wishlist, setWishlist] = useState([]);

    const categories = ["All", "Electronics", "Fashion", "Home"];

    // Search and category filtering
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.productName.toLowerCase().includes(search.toLowerCase()) ||
            product.brand.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return product.isActive && matchesSearch && matchesCategory;
    });

    // Wishlist functionality
    const toggleWishlist = (productId) => {
        setWishlist((previous) =>
            previous.includes(productId)
                ? previous.filter((id) => id !== productId)
                : [...previous, productId]
        );
    };

    // Add to cart (UI demonstration only)
    const handleAddToCart = (product) => {
        if (product.stock === 0) {
            alert("Sorry! This product is out of stock.");
            return;
        }

        alert(`${product.productName} added to cart!`);
    };

    return (
        <div className="min-h-screen bg-[#F8F7FC] px-5 py-10 md:px-12">

            {/* Page Heading */}
            <div className="max-w-7xl mx-auto mb-10">
                <p className="text-violet-700 font-semibold uppercase tracking-widest text-sm">
                    Explore CARTIVA
                </p>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
                    Discover Our{" "}
                    <span className="text-violet-700">Products.</span>
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Find your favourites. Shop your style. Love every purchase.
                </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-7xl mx-auto mb-10">

                <div className="flex flex-col lg:flex-row gap-5 justify-between">

                    {/* Search */}
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 lg:w-96 focus-within:ring-2 focus-within:ring-violet-500">
                        <Search size={20} className="text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search products or brands..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full outline-none bg-transparent px-3 text-gray-700"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <SlidersHorizontal size={19} className="text-violet-700 mr-1" />

                        {categories.map((item) => (
                            <button
                                key={item}
                                onClick={() => setCategory(item)}
                                className={`px-5 py-2.5 rounded-xl font-semibold transition ${category === item
                                        ? "bg-violet-700 text-white shadow-lg shadow-violet-200"
                                        : "bg-white text-gray-600 hover:bg-violet-100"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* Product Count */}
            <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
                <p className="text-gray-600 font-medium">
                    Showing{" "}
                    <span className="text-violet-700 font-bold">
                        {filteredProducts.length}
                    </span>{" "}
                    products
                </p>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
                        >

                            {/* Image */}
                            <div className="relative h-64 bg-gray-100 overflow-hidden">

                                <img
                                    src={product.images?.[0]}
                                    alt={product.productName}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Featured Badge */}
                                {product.isFeatured && (
                                    <span className="absolute top-4 left-4 bg-violet-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                        FEATURED
                                    </span>
                                )}

                                {/* Wishlist */}
                                <button
                                    onClick={() => toggleWishlist(product._id)}
                                    className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md hover:scale-110 transition"
                                    aria-label="Toggle wishlist"
                                >
                                    <Heart
                                        size={19}
                                        className={
                                            wishlist.includes(product._id)
                                                ? "text-red-500 fill-red-500"
                                                : "text-gray-500"
                                        }
                                    />
                                </button>

                                {/* Stock Badge */}
                                {product.stock === 0 && (
                                    <span className="absolute bottom-4 left-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full">
                                        OUT OF STOCK
                                    </span>
                                )}

                            </div>

                            {/* Product Details */}
                            <div className="p-5">

                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-violet-700 font-semibold">
                                        {product.brand}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        {product.category}
                                    </p>
                                </div>

                                <h2 className="text-lg font-bold text-gray-900 mt-3">
                                    {product.productName}
                                </h2>

                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Ratings */}
                                <div className="flex items-center gap-1 mt-3">
                                    <Star
                                        size={16}
                                        fill="currentColor"
                                        className="text-yellow-400"
                                    />

                                    <span className="text-sm font-semibold text-gray-700">
                                        {product.ratings}
                                    </span>

                                    <span className="text-xs text-gray-400">
                                        ({product.numReviews} reviews)
                                    </span>
                                </div>

                                {/* Price and Cart */}
                                <div className="flex items-center justify-between mt-5">

                                    <div>
                                        <p className="text-xl font-extrabold text-gray-900">
                                            ₹{(product.discountPrice ?? product.price).toLocaleString("en-IN")}
                                        </p>

                                        {product.discountPrice != null && (
                                            <p className="text-sm text-gray-400 line-through">
                                                ₹{product.price.toLocaleString("en-IN")}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={product.stock === 0}
                                        className="bg-violet-700 text-white p-3 rounded-xl hover:bg-violet-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                                        aria-label={`Add ${product.productName} to cart`}
                                    >
                                        <ShoppingCart size={20} />
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-white rounded-2xl">
                        <PackageSearch
                            size={55}
                            className="mx-auto text-violet-300 mb-4"
                        />

                        <h2 className="text-2xl font-bold text-gray-800">
                            No Products Found
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Try another search or category.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Products;