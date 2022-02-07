import { Link  } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

import ItemCount from "../itemCount/ItemCount";

import { useCart } from "../../context/cartContext";

const Item = ({ item, footerOption }) => {
  const { id, title, price, image, stock } = item;
  const { addItem, updateItem, buyItem, getQuantity } = useCart();
  const navigate = useNavigate();

  const onAdd = (counter) => {
    addItem({ id, title, price, q: counter, image, stock });
  };
  
  const onBuy = (counter) => {
    buyItem([{item:[{ id, title, price, q: counter}]}]);
    navigate('/checkout');
  };

  const onUpdate = (q) => {
    updateItem(id, q);
  };

  return (
    <div className={`col ${!footerOption && "h-100"} `}>
      <div className="card h-100 itemCard">
        <div className="img_header">
          <img src={image} alt="Imagen de producto" />
        </div>

        <div className="card-body d-flex flex-column justify-content-between">
          <h6 className="card-title">
            <Link to={`/item/${id}`}>{title}</Link>
          </h6>
          <p className="price">${price}</p>
        </div>

        {footerOption && (
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
        )}
      </div>
    </div>
  );
};

export default Item;
