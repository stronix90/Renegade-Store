import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";

import Home from "./components/home/Home";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";

import CartList from "./components/cart/CartList";
import Checkout from "./components/cart/checkout/Checkout";

import CartProvider from "./context/cartContext";
import UserAuthProvider from "./context/userAuthContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserAuthProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Category />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartList />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserAuthProvider>
    </>
  );
};

export default App;
