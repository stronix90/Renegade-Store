import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import Cart from "./Cart";
import EmptyBag from "./EmptyBag";

const CartList = () => {
  const { carrito, montoTotal, clear } = useCart();

  const onClear = () => clear();

  return (
    <div className="container customContainer cartContainer">
      <div className="card itemCard">
        <div className="card-body">
          <h2 className="card-title">Productos en su carrito</h2>
          {carrito.length > 0 ? (
            <>
              <ul className="list-group">
                {carrito.map((p) => (
                  <Cart key={p.id} itemInCart={p} />
                ))}
              </ul>
            </>
          ) : (
            <EmptyBag />
          )}
        </div>
        {carrito.length > 0 && (
          <div className="card-footer">
            <p className="text-center text-md-end totalAmount">
              MONTO TOTAL ${montoTotal.toFixed(2)}
            </p>

            <div className="row">
              <Link to="/checkout" className="btnSec">
                <span className="material-icons">local_mall</span>TERMINAR
                COMPRA
              </Link>

              <a href="#!" className="small text-center mt-3" onClick={onClear}>
                VACIAR CARRITO
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
