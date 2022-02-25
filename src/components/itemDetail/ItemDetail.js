import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";

import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { id, title, description, price, image, stock } = item;
  const { addItem, updateItem, buyItem, getQuantity } = useCart();
  const navigate = useNavigate();

  const onAdd = (counter) => {
    addItem({ id, title, price, q: counter, image, stock });
  };

  const onBuy = (counter) => {
    buyItem([{ item: [{ id, title, price, q: counter }] }]);
    navigate("/checkout");
  };

  const onUpdate = (q) => {
    updateItem(id, q);
  };

  return (
    <div className="card mb-3 itemdetail">
      <div className="row g-0">
        <div className="col-md-4 img_header">
          <img
            src={image}
            className=" rounded-start"
            alt="Imagen de producto"
          />
        </div>
        <div className="col-md-8 card-body">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="price">${price}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <ItemCount
                stock={stock}
                onAdd={onAdd}
                onBuy={onBuy}
                onUpdate={onUpdate}
                buyOption={true}
                informationOption={true}
                initial={getQuantity(id)}
              />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
