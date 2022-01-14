import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../conexion.js"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Category from "../category/Category";



const ItemListContainer = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([])


  const formatearYSetear = (arrayDeDocumentos) => {
    setLoading(false)
    setItems(arrayDeDocumentos.map(documento => {
      return { ...documento.data(), id: documento.id }
    }))
  }

  const getProducts = async () => {

    const productosCollection = collection(db, "products")
    let customQuery

    if (category) {
      const q1 = where("category", "==", category)
      customQuery = query(productosCollection, q1)
    }
    else {
      customQuery = query(productosCollection)
    }
    const consulta = await getDocs(customQuery)
    formatearYSetear(consulta.docs)
  }

  useEffect(() => {
    setLoading(true);
    getProducts()
  }, [category]);

  return (
    <>
      <Category />
      <div className="container customContainer item_list_container">
        {loading ? (
          // Muestra SPINNER DE CARGA
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          // Muestra CONTENIDO
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <ItemList items={items} />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
