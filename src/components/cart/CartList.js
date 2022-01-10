import { useContexto } from "../../context/cartContext";
import Cart from "./Cart";

const CartList = () => {
  // DESTRUCTURING
  const { carrito } = useContexto(); // CONTEXTO DEL CARRITO

  return (
    <div className="container customContainer">
      <ul className="list-group">
        {carrito.map((p) => (
          <Cart key={p.id} itemInCart={p} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
