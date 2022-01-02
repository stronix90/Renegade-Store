import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Category from "../category/Category";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(
      id
        ? `https://fakestoreapi.com/products/category/${id}`
        : `https://fakestoreapi.com/products`
    )
      .then((res) => res.json())
      .then((json) => {
        setLoading(false)
        setProducts(json)
      })

      .catch((err) => console.log(err));
  }, [id]);

  return (loading ?
    (<>
      <Category/>
      <div className="container item_list_container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>) :
    (<>
      <Category/>
      <div className="container item_list_container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ItemList items={items} />
        </div>
      </div>
    </>)
  )
};

export default ItemListContainer;
