import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar"
import Footer from "./components/footer/Footer"

import Home from "./components/home/Home"
import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"

import Cart from "./components/cart/Cart"

import CustomProvider from "./context/cartContext"
import CustomTools from "./context/toolsContext"

const App = () => {
  return (
    <CustomTools>
      <CustomProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/store/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </CustomProvider>
    </CustomTools>
  );
};

export default App;
