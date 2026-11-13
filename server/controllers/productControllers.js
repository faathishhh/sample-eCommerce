import Product from "../models/productsModel.js";

// Add Product
export const addProduct = async (req, res) => {
    try {
        const product = req.body;

        const newProduct = await Product.create(product);

        res.status(201).json({
            message: "Product created",
            success: true,
            newProduct
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false
        });
    }
};


// Get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ isActive: true })
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Products fetched successfully",
            success: true,
            products
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};