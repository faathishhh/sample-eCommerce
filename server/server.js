import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cookieParser from 'cookie-parser'






const app = express();


//to convert json data into original form
app.use(express.json());


//to access cookies
app.use(cookieParser())

//to access .env variables
dotenv.config()

//establishing mongodb connection
connectDB()


//register routes
app.use(authRoutes);
app.use(productRoutes)



app.listen(5000, () => {
    console.log("server is running on port 5000");
});