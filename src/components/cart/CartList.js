import { Link } from "react-router-dom";
import { useContexto } from "../../context/cartContext";
import Category from "../category/Category";
import Cart from "./Cart";

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
              <button className="customBtn">
                <span className="material-icons">local_mall</span>TERMINAR COMPRA
              </button>
            </div>
          </>
          )
          : (
            <>
              <img src="\img\emptyCart.png" style={{ margin: "auto", display: "block" }} width={"350px"} alt="" srcset="" />
              <Link className="customBtn" to="/store">
                VOLVER A LA TIENDA
              </Link>

            </>
          )}
      </div>
    </>
  );
};

export default CartList;
