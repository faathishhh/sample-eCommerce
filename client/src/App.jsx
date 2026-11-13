import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import HomeLayout from "../layouts/HomeLayout";

function App() {
  return (
    <div>
      <NavBar />



      <Routes>

        {/* <HomeLayout/> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />



    </div>


  );
}

export default App;