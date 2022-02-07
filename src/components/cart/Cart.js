import ItemCount from "../itemCount/ItemCount";
import { useCart } from "../../context/cartContext";
import "./cart.css";
import { toast } from "react-toastify";

const Cart = ({ itemInCart }) => {
  const { id, title, price, image, q, stock } = itemInCart
  const { updateItem } = useCart()

  const onBuy = (counter) => {
    toast.success(
      "Ha comprado el producto. " + counter + " un. El carrito sigue intacto", { theme: "dark" }
    );
  };

  const onUpdate = (q) => {
    updateItem(id, q);
  };

  return (
    <>
      <li className="listado row">
        <div className="col-auto">
          <img
            src={image}
            alt="Imagen de producto"
            style={{
              width: "-webkit-fill-available",
              "marginTop": "10px",
            }}
          />
        </div>
        <div className="col detalle">
          <div className="detalle__title">{title}</div>
          <div className="detalle__btn">
            <ItemCount
              stock={stock}
              onAdd={() => { }}
              onBuy={onBuy}
              onUpdate={onUpdate}
              inlineTrashOption={true}
              buyOption={false}
              informationOption={false}
              initial={q}
            />
          </div>
          <div className="detalle__price">
            ${(price * q).toFixed(2)}
          </div>
        </div>
      </li>
    </>
  );
};

export default Cart;
