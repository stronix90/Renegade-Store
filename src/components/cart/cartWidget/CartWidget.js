import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContexto } from "../../../context/cartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContexto();

  useEffect(() => {
    let cartWidgetClassList = document.getElementById("cartwidget").classList

    if (!cartWidgetClassList.contains("cartwidget_on")) {

      // Enciende luz
      cartWidgetClassList.add("cartwidget_on")

      // Apaga luz
      const timeoutIdOff = setTimeout(() => {
        cartWidgetClassList.remove("cartwidget_on")
        clearTimeout(timeoutIdOff);
      }, 1000)

    }
  }, [cantidadTotal])


  return (
    <Link to="/cart">
      <div id="cartwidget" className="cartwidget">
        <span className="material-icons cartwidget_icon">shopping_cart</span>
        <span>{cantidadTotal}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
