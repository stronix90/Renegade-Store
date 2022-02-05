import { Link } from "react-router-dom";
import { useContexto } from "../../context/cartContext";
import Category from "../category/Category";
import Cart from "./Cart";
import emptyCart from "./emptyCart";

const CartList = () => {
  // DESTRUCTURING
  const { carrito, montoTotal, clear } = useContexto(); // CONTEXTO DEL CARRITO

  const onClear = () =>{
    clear()
  }

  return (
    <>
      <Category />
      <div className="container customContainer cartContainer">
        <h1>Productos en su carrito</h1>
        {carrito.length > 0 ?
          (<>
            <ul className="list-group">
              {carrito.map((p) => (
                <Cart key={p.id} itemInCart={p} />
              ))}
            </ul>

            <div className="totalAmount">
              MONTO TOTAL ${montoTotal.toFixed(2)}
            </div>

            <div className="actions">
              <button className="customBtn" onClick={onClear}>VACIAR CARRITO</button>
              <Link to="/checkout" className="customBtn">
                <span className="material-icons">local_mall</span>TERMINAR COMPRA
              </Link>
            </div>
          </>
          )
          : (
            <emptyCart/>
          )}
      </div>
    </>
  );
};

export default CartList;
