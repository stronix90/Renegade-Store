import Slider from "../home/hero/Slider";
import ScrollDownArrow from "../home/hero/ScrollDownArrow";
import Information from "./information/Information";
import ItemPreviewListContainer from "../itemList/ItemPreviewListContainer";

import "./home.css";
import Brands from "./brands/Brands";

const Home = () => {
  return (
    <div>
      <Slider />
      <ScrollDownArrow />
      <div id="main" className="section2">
        <Information />
      </div>

      <h2>Marcas</h2>
      <div className="container customFloatContainer mb-5">
        <Brands/>
      </div>

      <h2>TIENDA</h2>
      <div className="container customFloatContainer">
        <a href="/store">
          <button className="btnMain d-block mb-3">
            Ver todos los productos
          </button>
        </a>
        <h2 className="mt-4 mb-1">Productos en oferta</h2>
        <ItemPreviewListContainer fieldFilter="sale" />
        <h2 className="mt-4 mb-1">Productos destacados</h2>
        <ItemPreviewListContainer fieldFilter="outstanding" />
      </div>
    </div>
  );
};

export default Home;
