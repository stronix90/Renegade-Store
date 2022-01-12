import { useContexto } from "../../context/cartContext";
import { useTools } from "../../context/toolsContext";

import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ item }) => {
  // DESTRUCTURING
  const { id, title, description, price, image } = item; // ITEM
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
    <div className="card mb-3 itemdetail">
      <div className="row g-0">
        <div className="col-md-4 img_header">
          <img src={image} className=" rounded-start" alt="..." />
        </div>
        <div className="col-md-8 card-body">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <p className="price">${price}</p>
            </p>
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
    </div>
  );
};

export default ItemDetail;
