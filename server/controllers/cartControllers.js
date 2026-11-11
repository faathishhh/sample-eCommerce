// import mongoose from "mongoose";
// import Cart from "../models/cartModel.js";
// import Product from "../models/productsModel.js";

// export const addToCart = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { product, quantity = 1 } = req.body;

//         // Validate IDs
//         if (
//             !mongoose.Types.ObjectId.isValid(userId) ||
//             !mongoose.Types.ObjectId.isValid(product)
//         ) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid user or product ID",
//             });
//         }

//         // Validate quantity
//         if (!Number.isInteger(quantity) || quantity < 1) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Quantity must be at least 1",
//             });
//         }

//         // Find product
//         const productData = await Product.findById(product);

//         if (!productData || !productData.isActive) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found",
//             });
//         }

//         // Check stock
//         if (productData.stock < quantity) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Not enough stock available",
//             });
//         }

//         // Use discounted price when available
//         const price =
//             productData.discountPrice != null &&
//                 productData.discountPrice < productData.price
//                 ? productData.discountPrice
//                 : productData.price;

//         // Find existing cart or create a new one
//         let cart = await Cart.findOne({ user: userId });

//         if (!cart) {
//             cart = new Cart({
//                 user: userId,
//                 items: [],
//             });
//         }

//         // Check whether product already exists in cart
//         const existingItem = cart.items.find(
//             (item) => item.product.toString() === product
//         );

//         if (existingItem) {
//             const newQuantity = existingItem.quantity + quantity;

//             if (newQuantity > productData.stock) {
//                 return res.status(400).json({
//                     success: false,
//                     message: "Requested quantity exceeds available stock",
//                 });
//             }

//             existingItem.quantity = newQuantity;
//             existingItem.price = price;

//         } else {
//             cart.items.push({
//                 product: productData._id,
//                 quantity,
//                 price,
//             });
//         }

//         // Calculate total price
//         cart.totalPrice = cart.items.reduce(
//             (total, item) => total + item.price * item.quantity,
//             0
//         );

//         await cart.save();

//         // Return cart with product details
//         await cart.populate("items.product");

//         return res.status(200).json({
//             success: true,
//             message: "Product added to cart successfully",
//             cart,
//         });

//     } catch (error) {
//         console.error("Add to cart error:", error);

//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };
















import Cart from "../models/cartModel.js"




export const addToCart = async (req, res) => {
    try {

        const user = req.params.userId
        const { product, price } = req.body

        const newCart = await Cart.create({ user: user, items: [{ product: product, price: price, totalPrice: price }] })


    } catch (error) {

        res.status(500).json({ error: error.message, success: false })



    }

}