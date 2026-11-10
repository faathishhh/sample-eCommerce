import Product from "../models/productsModel.js"




export const addProduct = async (req, res) => {

    
    try {

        const product = req.body
        const newProduct = await Product.create(product)
        res.status(201).json({ message: "product created", success: true, newProduct })

    } catch (error) {
        res.status(500).json({ error: error.message, success: false })

    }
}