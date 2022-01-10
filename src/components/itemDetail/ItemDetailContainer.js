import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Category from "../category/Category";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setItem(json);
      })

      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Category />
      <div className="container customContainer item_detail_container">
        {loading ? (
          // Muestra SPINNER DE CARGA
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          // Muestra CONTENIDO
          <ItemDetail item={item} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
