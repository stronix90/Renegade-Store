import {useContexto} from "../../../context/cartContext"
import "./cartWidget.css"

const CartWidget = () => {
  const { cantidadTotal} = useContexto();
  return (
      <div className="cartwidget">
        <span className="material-icons cartwidget_icon">shopping_cart</span>
        <span>{cantidadTotal}</span>
      </div>
  );
};

export default CartWidget;
