import ItemCount from "../itemCount/ItemCount";
import { useTools } from "../../context/toolsContext";
import { useContexto } from "../../context/cartContext";
import "./cart.css";

const Cart = ({ itemInCart }) => {
  // DESTRUCTURING
  const { id, title, price, image } = itemInCart; // ITEM
  const { updateItem, getQuantity } = useContexto(); // CONTEXTO DEL CARRITO
  const { tools_alert } = useTools(); // CONTEXTO DE HERRAMIENTAS

  // FUNCION COMPRAR
  const onBuy = (counter) => {
    tools_alert(
      "Ha comprado el producto. " + counter + " un. El carrito sigue intacto"
    );
  };

  // FUNCION ACTUALIZAR Q
  const onUpdate = (q) => {
    updateItem(id, q);
  };

  const qnt = getQuantity(id)

  return (
    <>
      <li className="listado row">
        <div className="col-auto">
          <img
            src={image}
            alt=""
            srcset=""
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
              stock={5}
              onAdd={() => { }}
              onBuy={onBuy}
              onUpdate={onUpdate}
              inlineTrashOption={true}
              buyOption={false}
              informationOpcion={false}
              initial={qnt}
            />
          </div>
          <div className="detalle__price">
            ${(price * qnt).toFixed(2)}
          </div>
        </div>
      </li>
    </>
  );
};

export default Cart;
