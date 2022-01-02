import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ item }) => {
  const { id, title, description, price, image } = item;
  const msgShow = (msgText) => toast(msgText, { theme: "dark" });

  const onAdd = (counter) => {
    msgShow(counter +
      (counter === 1 ? " unidad añadida" : " unidades añadidas") +
      " al carrito. Producto: " + title)
  };

  return (
    <>
      <div className="col">
        <ToastContainer />
        <div className="card h-100 itemcard">
          <div className="img_header">
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h6 className="card-title">
              <Link to={`/item/${id}`}>{title}</Link>
            </h6>
            <p className="price">${price}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <ItemCount stock={5} onAdd={onAdd} msgShow={msgShow} buyOption={false} />
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
