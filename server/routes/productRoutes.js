import express from 'express';

import { addProduct, getProducts } from '../controllers/productControllers.js';

import authenticate from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/add-product", authenticate, addProduct);

router.get("/get-products", getProducts);

export default router;