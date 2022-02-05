import { Link } from "react-router-dom";

const emptyCart = () => {
  return (
    <div>
      <img
        src="\img\emptyCart.png"
        style={{ margin: "auto", display: "block" }}
        width={"350px"}
        alt="Carrito vacío"
      />
      <Link className="customBtn" to="/store">
        VOLVER A LA TIENDA
      </Link>
    </div>
  );
};

export default emptyCart;
