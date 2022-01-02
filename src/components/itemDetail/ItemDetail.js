import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({ item }) => {
  const { id, title, description, price, image } = item;
  const msgShow = (msgText) => toast(msgText, { theme: "dark" });

  const onAdd = (counter) => {
    msgShow(
      counter +
      (counter === 1 ? " unidad añadida" : " unidades añadidas") +
      " al carrito. Producto: " + title, { theme: "dark" });
  };

  const onBuy = (counter) => {
    msgShow("Ha comprado el producto. " + counter + " un.", { theme: "dark" });
  };

  return (
    <div className="card mb-3 itemdetail">
      <ToastContainer />
      <div className="row g-0">
        <div className="col-md-4 img_header">
          <img src={image} className=" rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <p className="price">${price}</p>
            </p>
          </div>
          <div className="card-footer bg-transparent border-success">
            <ItemCount stock={5} onAdd={onAdd} onBuy={onBuy} msgShow={msgShow} buyOption={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
