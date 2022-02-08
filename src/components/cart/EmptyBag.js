import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <div>
      <img
        src="\img\EmptyBag.png"
        className="m-auto d-block"
        width={"350px"}
        alt="Carrito vacío"
      />
      <Link className="btnSec m-a d-flex mt-5" to="/store">
        VOLVER A LA TIENDA
      </Link>
    </div>
  );
};

export default EmptyBag;
