import { Link } from "react-router-dom";
import { useContexto } from "../../../context/cartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContexto();
  return (
    <Link to="/cart">
      <div className="cartwidget">
        <span className="material-icons cartwidget_icon">shopping_cart</span>
        <span>{cantidadTotal}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
