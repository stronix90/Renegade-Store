import { db } from "../../conexion.js";
import { collection, doc, getDoc } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProduct = async () => {
    const productosCollection = collection(db, "products");
    const referencia = doc(productosCollection, id);
    const documento = await getDoc(referencia);
    setLoading(false);
    setItem({ ...documento.data(), id: documento.id });
  };

  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [id]);

  return (
    <div className="container customContainer item_detail_container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
