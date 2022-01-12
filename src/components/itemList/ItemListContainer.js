import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Category from "../category/Category";
import {db} from "../../conexion.js"

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    console.log("Probando conexión a DB");
    console.log(db);
    fetch(
      id
        ? `https://fakestoreapi.com/products/category/${id}`
        : `https://fakestoreapi.com/products`
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      })

      .catch((err) => console.log(err));
  }, [id]);

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
