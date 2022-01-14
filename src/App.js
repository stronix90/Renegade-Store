import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar"
import Footer from "./components/footer/Footer"

import Home from "./components/home/Home"
import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"

import CartList from "./components/cart/CartList"

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
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartList />} />
            </Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </CustomProvider>
    </CustomTools>
  );
};

export default App;
