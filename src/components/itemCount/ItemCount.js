import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./itemCount.css";

const ItemCount = ({
  stock,
  initial,
  buyOption,
  informationOption,
  inlineTrashOption,
  onAdd,
  onBuy,
  onUpdate,
}) => {
  const [counter, setCounter] = useState(initial || 0);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  useEffect(() => {
    onUpdate(counter);
  }, [counter]);

  const handlerAdd = () => {
    if (counter > 0 && stock >= counter) onAdd(counter);
  };

  const handlerBuy = () => {
    if (counter > 0 && stock >= counter) onBuy(counter);
  };

  const handlerUpdateQ = (newCounter) => {
    if (newCounter > 0) {
      if (newCounter <= stock) setCounter(newCounter);
      else {
        setCounter(stock);
        toast.error(
          `No hay stock suficiente. Se ha seleccionado el stock máximo: ${stock}`
          , { theme: "dark" });
      }
    } else setCounter(0);
  };

  return (
    <div className="itemCardButtons">
      {inlineTrashOption && (
        <span
          onClick={() => handlerUpdateQ(0)}
          className="material-icons inline_trash"
          title="Quitar este producto del carrito"
        >
          delete_forever
        </span>
      )}

      <button
        disabled={counter === 0 ? "disabled" : null}
        className="btnArrow"
        onClick={() => handlerUpdateQ(counter - 1)}
      >
        {String.fromCharCode(60)}
      </button>

      <input
        type="text"
        value={counter}
        onChange={(e) => handlerUpdateQ(parseInt(e.target.value))}
        onClick={(e) => {
          e.target.select();
        }}
      />

      <button
        disabled={counter === stock ? "disabled" : null}
        className="btnArrow"
        onClick={() => handlerUpdateQ(counter + 1)}
      >
        {String.fromCharCode(62)}
      </button>

      {initial === 0 && (
          <button
            disabled={counter === 0 ? "disabled" : null}
            className="itemCardMainBtn"
            onClick={handlerAdd}
          >
            <span className="material-icons">shopping_cart</span> Agregar
          </button>
      )}

      {buyOption && (
        <button
          disabled={counter === 0 ? "disabled" : null}
          className="itemCardMainBtn"
          onClick={handlerBuy}
        >
          <span className="material-icons">local_mall</span> Comprar
        </button>
      )}

      {informationOption && (
        <div className="note_box" style={{ opacity: initial > 0 ? "1" : "0" }}>
          <span className="note">
            {initial} {initial === 1 ? "unidad" : "unidades"} en carrito
          </span>
          <span
            onClick={() => handlerUpdateQ(0)}
            className="material-icons trash"
            title="Quitar este producto del carrito"
          >
            delete_forever
          </span>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
