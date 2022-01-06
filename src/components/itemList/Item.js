import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { useTools } from "../../context/toolsContext";

import { useContexto } from "../../context/cartContext";

const Item = ({ item }) => {
  // Destructuring del item enviado
  const { id, title, description, price, image } = item;

  // Destructuring del contexto de carrito
  const { addItem, removeItem, getQuantity } = useContexto();

  // Destructuring del contexto de herramientas
  const { tools_alert } = useTools();

  // FUNCION AGREGAR AL CARRITO
  const onAdd = (counter) => {
    addItem({ id: id, title: title, price: price, q: counter });
    tools_alert(
      counter +
        (counter === 1 ? " unidad añadida" : " unidades añadidas") +
        " al carrito. Producto: " +
        title
    );
  };

  // FUNCION COMPRAR
  const onBuy = (counter) => {
    tools_alert("Ha comprado el producto. " + counter + " un.");
  };

  // FUNCION REMOVER DE CARRITO
  const onRemove = () => {
    removeItem(id);
  };
  return (
    <>
      <div className="col">
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
              <ItemCount
                stock={5}
                onAdd={onAdd}
                onBuy={onBuy}
                onRemove={onRemove}
                buyOption={true}
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
