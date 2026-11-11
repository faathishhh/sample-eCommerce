import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

    <NavBar/>


      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/products" element={<Products/> } />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>

      <Footer/>


    </BrowserRouter>
  );
}

export default App;