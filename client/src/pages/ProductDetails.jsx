import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ShoppingCart,
    Heart,
    Star,
    Truck,
    ShieldCheck,
    RotateCcw,
    Minus,
    Plus,
    ArrowLeft,
    Check,
} from "lucide-react";

import { initialProducts } from "./Products";

const ProductDetails = () => {
    // Get product ID from URL
    const { id } = useParams();

    // Find the selected product
    const product = initialProducts.find(
        (item) => item._id === id
    );

    const [selectedImage, setSelectedImage] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [message, setMessage] = useState("");

    // Reset selections when the product changes
    useEffect(() => {
        if (product) {
            setSelectedImage(product.images?.[0] || "");
            setSelectedColor(product.colors?.[0] || "Default");
            setSelectedSize(product.sizes?.[0] || "Standard");
            setQuantity(1);
            setIsFavorite(false);
            setMessage("");
        }
    }, [id]);

    // Handle invalid product ID
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-5">
                <h1 className="text-3xl font-bold text-gray-800">
                    Product Not Found
                </h1>

                <p className="text-gray-500 mt-3">
                    Sorry, this product is not available.
                </p>

                <Link
                    to="/products"
                    className="mt-6 bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-800 transition"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    // Product images
    const images = product.images || [];

    // Optional colors and sizes
    const colors = product.colors?.length
        ? product.colors
        : ["Default"];

    const sizes = product.sizes?.length
        ? product.sizes
        : ["Standard"];

    // Price calculation
    const hasDiscount =
        product.discountPrice != null &&
        product.discountPrice < product.price;

    const finalPrice = hasDiscount
        ? product.discountPrice
        : product.price;

    const discountPercentage = hasDiscount
        ? Math.round(
            ((product.price - finalPrice) / product.price) * 100
        )
        : 0;

    // Add to cart demonstration
    const handleAddToCart = () => {
        if (product.stock === 0) {
            setMessage("Sorry! This product is out of stock.");
            return;
        }

        setMessage(`${quantity} ${product.productName} added to cart!`);

        setTimeout(() => {
            setMessage("");
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-6">

                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-600 transition"
                >
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>

                <div className="text-sm text-gray-400 mt-4">
                    Home / Products / {product.category} /{" "}
                    <span className="text-violet-600">
                        {product.productName}
                    </span>
                </div>

            </div>

            {/* Product Details */}
            <div className="max-w-7xl mx-auto px-6 pb-16">

                <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Product Images */}
                    <div>

                        <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[350px] md:h-[500px] flex items-center justify-center">

                            <img
                                src={selectedImage || images[0]}
                                alt={product.productName}
                                className="w-full h-full object-contain p-6"
                            />

                            {hasDiscount && (
                                <span className="absolute top-5 left-5 bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                                    {discountPercentage}% OFF
                                </span>
                            )}

                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="absolute top-5 right-5 bg-white p-3 rounded-full shadow hover:scale-110 transition"
                            >
                                <Heart
                                    size={21}
                                    className={
                                        isFavorite
                                            ? "text-red-500 fill-red-500"
                                            : "text-gray-600"
                                    }
                                />
                            </button>

                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex gap-4 mt-5 flex-wrap">

                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(image)}
                                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition ${selectedImage === image
                                            ? "border-violet-600"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Product Information */}
                    <div>

                        <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
                            {product.brand}
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            {product.productName}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mt-5">

                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={18} fill="currentColor" />

                                <span className="font-semibold text-gray-800">
                                    {product.ratings}
                                </span>
                            </div>

                            <span className="text-gray-400 text-sm">
                                ({product.numReviews} customer reviews)
                            </span>

                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4 mt-7 flex-wrap">

                            <span className="text-3xl font-bold text-violet-700">
                                ₹{finalPrice.toLocaleString("en-IN")}
                            </span>

                            {hasDiscount && (
                                <>
                                    <span className="text-xl text-gray-400 line-through">
                                        ₹{product.price.toLocaleString("en-IN")}
                                    </span>

                                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                                        Save {discountPercentage}%
                                    </span>
                                </>
                            )}

                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-7 mt-7">
                            {product.description}
                        </p>

                        <div className="border-t border-gray-100 my-7" />

                        {/* Color Selection */}
                        <div>

                            <h3 className="font-semibold text-gray-800 mb-3">
                                Select Color:
                                <span className="text-violet-600 ml-2">
                                    {selectedColor}
                                </span>
                            </h3>

                            <div className="flex gap-3 flex-wrap">

                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-5 py-2 rounded-lg border text-sm transition ${selectedColor === color
                                                ? "border-violet-600 bg-violet-50 text-violet-700"
                                                : "border-gray-200 hover:border-violet-400"
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}

                            </div>

                        </div>

                        {/* Size Selection */}
                        <div className="mt-6">

                            <h3 className="font-semibold text-gray-800 mb-3">
                                Select Size:
                            </h3>

                            <div className="flex gap-3 flex-wrap">

                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 rounded-lg border text-sm transition ${selectedSize === size
                                                ? "border-violet-600 bg-violet-50 text-violet-700"
                                                : "border-gray-200 hover:border-violet-400"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}

                            </div>

                        </div>

                        {/* Stock */}
                        <div className="mt-6">

                            {product.stock > 0 ? (
                                <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                                    <Check size={17} />
                                    In Stock ({product.stock} available)
                                </p>
                            ) : (
                                <p className="text-red-500 text-sm font-medium">
                                    Out of Stock
                                </p>
                            )}

                        </div>

                        {/* Quantity */}
                        <div className="mt-7">

                            <h3 className="font-semibold text-gray-800 mb-3">
                                Quantity
                            </h3>

                            <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden">

                                <button
                                    onClick={() =>
                                        setQuantity((prev) => Math.max(1, prev - 1))
                                    }
                                    className="p-3 hover:bg-gray-100"
                                    disabled={quantity <= 1}
                                >
                                    <Minus size={17} />
                                </button>

                                <span className="px-5 font-semibold">
                                    {quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.min(product.stock, prev + 1)
                                        )
                                    }
                                    className="p-3 hover:bg-gray-100"
                                    disabled={quantity >= product.stock}
                                >
                                    <Plus size={17} />
                                </button>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                                className="flex-1 flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-violet-200"
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>

                            <Link
                                to="/cart"
                                className="flex-1 flex items-center justify-center border-2 border-violet-600 text-violet-600 hover:bg-violet-50 font-semibold py-4 rounded-xl transition"
                            >
                                View Cart
                            </Link>

                        </div>

                        {message && (
                            <p className="mt-4 text-green-600 font-medium text-sm">
                                {message}
                            </p>
                        )}

                        {/* Delivery Information */}
                        <div className="border-t border-gray-100 mt-9 pt-7 space-y-5">

                            <div className="flex items-center gap-4">
                                <Truck className="text-violet-600" size={23} />

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Free Delivery
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        On eligible orders.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <ShieldCheck className="text-violet-600" size={23} />

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Secure Payment
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Safe and secure checkout.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <RotateCcw className="text-violet-600" size={23} />

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Easy Returns
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Return policy applies.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;