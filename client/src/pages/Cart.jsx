import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ShoppingBag,
    Plus,
    Minus,
    Trash2,
    ArrowRight,
    ShoppingCart,
    Tag,
} from "lucide-react";

const initialCart = [
    {
        _id: "1",
        productName: "Premium Wireless Headphones",
        brand: "Sony",
        price: 3499,
        discountPrice: 2499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        quantity: 1,
        stock: 10,
    },
    {
        _id: "2",
        productName: "Classic Wrist Watch",
        brand: "Fossil",
        price: 2499,
        discountPrice: 1899,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        quantity: 1,
        stock: 10,
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCart);

    // Increase quantity
    const increaseQuantity = (id) => {
        setCartItems((previous) =>
            previous.map((item) =>
                item._id === id && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (id) => {
        setCartItems((previous) =>
            previous
                .map((item) =>
                    item._id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Remove product
    const removeItem = (id) => {
        setCartItems((previous) =>
            previous.filter((item) => item._id !== id)
        );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) =>
            total + (item.discountPrice ?? item.price) * item.quantity,
        0
    );

    const originalTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = subtotal === 0 || subtotal >= 1000 ? 0 : 50;
    const total = subtotal + delivery;
    const savings = originalTotal - subtotal;

    return (
        <div className="min-h-screen bg-[#F8F7FC] px-5 py-10 md:px-12">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-10">
                    <p className="text-violet-700 font-semibold uppercase tracking-widest text-sm">
                        Your Shopping Bag
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
                        My <span className="text-violet-700">Cart.</span>
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Review your items and get ready to shop.
                    </p>
                </div>

                {cartItems.length === 0 ? (

                    /* Empty Cart */
                    <div className="bg-white rounded-3xl p-12 text-center shadow-sm">

                        <div className="bg-violet-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={45} className="text-violet-700" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900">
                            Your cart is empty!
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Looks like you haven't added anything to your cart yet.
                        </p>

                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 mt-8 bg-violet-700 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-violet-800 transition"
                        >
                            Start Shopping
                            <ArrowRight size={19} />
                        </Link>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-5">

                            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm">

                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Cart Items
                                    </h2>

                                    <span className="text-sm text-violet-700 font-semibold">
                                        {cartItems.length} Products
                                    </span>
                                </div>

                                {cartItems.map((item) => (

                                    <div
                                        key={item._id}
                                        className="flex flex-col sm:flex-row gap-5 py-6 border-t border-gray-100"
                                    >

                                        {/* Image */}
                                        <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.productName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">

                                            <p className="text-sm text-violet-700 font-semibold">
                                                {item.brand}
                                            </p>

                                            <h3 className="text-lg font-bold text-gray-900 mt-1">
                                                {item.productName}
                                            </h3>

                                            <p className="text-gray-900 font-bold mt-2">
                                                ₹{(item.discountPrice ?? item.price).toLocaleString("en-IN")}
                                            </p>

                                            <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                                                {/* Quantity */}
                                                <div className="flex items-center border border-gray-200 rounded-lg">

                                                    <button
                                                        onClick={() => decreaseQuantity(item._id)}
                                                        className="p-2 hover:text-violet-700"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <Minus size={17} />
                                                    </button>

                                                    <span className="px-4 font-semibold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() => increaseQuantity(item._id)}
                                                        disabled={item.quantity >= item.stock}
                                                        className="p-2 hover:text-violet-700 disabled:text-gray-300"
                                                        aria-label="Increase quantity"
                                                    >
                                                        <Plus size={17} />
                                                    </button>

                                                </div>

                                                {/* Remove */}
                                                <button
                                                    onClick={() => removeItem(item._id)}
                                                    className="flex items-center gap-2 text-red-500 text-sm font-semibold hover:text-red-700"
                                                >
                                                    <Trash2 size={17} />
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                        {/* Item Total */}
                                        <div className="sm:text-right">
                                            <p className="text-xs text-gray-400">
                                                Item Total
                                            </p>

                                            <p className="font-bold text-gray-900 mt-1">
                                                ₹{((item.discountPrice ?? item.price) * item.quantity).toLocaleString("en-IN")}
                                            </p>
                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Continue Shopping */}
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 text-violet-700 font-semibold hover:underline"
                            >
                                <ShoppingCart size={19} />
                                Continue Shopping
                            </Link>

                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">

                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">

                                <h2 className="text-xl font-bold text-gray-900 mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4">

                                    <div className="flex justify-between text-gray-600">
                                        <span>Original Price</span>
                                        <span>₹{originalTotal.toLocaleString("en-IN")}</span>
                                    </div>

                                    <div className="flex justify-between text-green-600">
                                        <span>Discount</span>
                                        <span>- ₹{savings.toLocaleString("en-IN")}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery</span>
                                        <span>
                                            {delivery === 0 ? "FREE" : `₹${delivery}`}
                                        </span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                                        <span className="font-bold text-gray-900">
                                            Total Amount
                                        </span>

                                        <span className="text-xl font-extrabold text-violet-700">
                                            ₹{total.toLocaleString("en-IN")}
                                        </span>
                                    </div>

                                </div>

                                {/* Savings */}
                                {savings > 0 && (
                                    <div className="bg-green-50 text-green-700 p-3 rounded-xl mt-6 flex items-center gap-2 text-sm font-semibold">
                                        <Tag size={17} />
                                        You saved ₹{savings.toLocaleString("en-IN")}!
                                    </div>
                                )}

                                {/* Checkout */}
                                <button
                                    onClick={() => alert("Checkout page coming soon!")}
                                    className="w-full mt-7 bg-violet-700 text-white py-4 rounded-xl font-bold hover:bg-violet-800 transition flex items-center justify-center gap-2 shadow-lg shadow-violet-200"
                                >
                                    Proceed to Checkout
                                    <ArrowRight size={19} />
                                </button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Secure shopping experience with CARTIVA.
                                </p>

                            </div>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
};

export default Cart;