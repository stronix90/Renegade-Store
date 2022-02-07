import { db } from "../../conexion.js";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useState, useEffect } from "react";

import ItemsCarousel from "react-items-carousel";
import Item from "./Item.js";

import "../itemCount/itemCount.css"

const ItemPreviewListContainer = ({ fieldFilter }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const formatearYSetear = (arrayDeDocumentos) => {
    setLoading(false);
    setItems(
      arrayDeDocumentos.map((documento) => {
        return { ...documento.data(), id: documento.id };
      })
    );
  };

  const getProducts = async () => {
    const productosCollection = collection(db, "products");
    let productsQuery;

    const w1 = where(fieldFilter, "==", true);
    productsQuery = query(productosCollection, w1);
    const consulta = await getDocs(productsQuery);
    formatearYSetear(consulta.docs);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button className="itemCardButtons btnArrow">{"<"}</button>}
            rightChevron={<button className="itemCardButtons btnArrow">{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {items.map((item, index) => (
              <Item key={index} item={item} footerOption={false} />
            ))}
          </ItemsCarousel>
        </div>
      )}
    </>
  );
};

export default ItemPreviewListContainer;
