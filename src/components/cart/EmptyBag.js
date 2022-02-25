import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <div>
      <img
        src="\img\emptyCart.png"
        className="m-auto d-block"
        alt="Carrito vacío"
        style={{maxWidth:"350px", width:"-webkit-fill-available"}}
      />
      <Link className="btnSec m-a d-flex mt-5" to="/store">
        VOLVER A LA TIENDA
      </Link>
    </div>
  );
};

export default EmptyBag;
