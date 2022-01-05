import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/store/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>

        <Footer />
    </BrowserRouter>
  );
};

export default App;
