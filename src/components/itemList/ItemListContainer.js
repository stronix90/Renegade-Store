import { db } from "../../conexion.js";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
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

    if (category) {
      const w1 = where("category", "==", category);
      productsQuery = query(productosCollection, w1);
    } else {
      productsQuery = query(productosCollection);
    }
    const consulta = await getDocs(productsQuery);
    formatearYSetear(consulta.docs);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [category]);

  return (
    <div className="container customContainer item_list_container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          <ItemList items={items} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
