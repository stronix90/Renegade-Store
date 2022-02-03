import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { useTools } from "../../context/toolsContext";

import { useContexto } from "../../context/cartContext";

const Item = ({ item }) => {
  // DESTRUCTURING
  const { id, title, price, image } = item; // ITEM
  const { addItem, updateItem, getQuantity } = useContexto(); // CONTEXTO DEL CARRITO
  const { tools_alert } = useTools(); // CONTEXTO DE HERRAMIENTAS

  // FUNCION AGREGAR AL CARRITO
  const onAdd = (counter) => {
    addItem({ id: id, title: title, price: price, q: counter, image: image });
  };

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

  return (
    <>
      <div className="col">
        <div className="card h-100 itemCard">
          <div className="img_header">
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h6 className="card-title">
              <Link to={`/item/${id}`}>{title}</Link>
            </h6>
            <p className="price">${price}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <ItemCount
                stock={5}
                onAdd={onAdd}
                onBuy={onBuy}
                onUpdate={onUpdate}
                buyOption={true}
                informationOpcion={true}
                initial={getQuantity(id)}
              />
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
