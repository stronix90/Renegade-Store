import { useState } from "react";

const ItemCount = ({ stock, initial, buyOption, onAdd, onBuy, msgShow }) => {
  const [counter, setCounter] = useState(initial || 0);

  // AGREGAR AL CARRITO
  const handlerAdd = () => {
    if (counter > 0 && stock >= counter) {
      setCounter(0);
      onAdd(counter);
    }
  };

  // FINALIZAR COMPRA
  const handlerBuy = () => {
    if (counter > 0 && stock >= counter) {
      setCounter(0);
      onBuy(counter);
    }
  };

  // AGREGAR UNIDAD
  const add = () => {
    if (stock >= counter + 1) setCounter(counter + 1);
    else msgShow("No hay más stock")
  };

  // QUITAR UNIDAD
  const subtract = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  // CAMBIAR MANUALMENTE CANTIDAD
  const handlerChange = (e) => {
    let val = parseInt(e.target.value);
    if (val <= stock) setCounter(val);
    else {
      msgShow(
        "No hay stock suficiente. Se ha seleccionado el stock máximo: " + stock
      );
      setCounter(stock);
    }
  };

  return (
    <>
      <div className="itemCardButtons">
        <button
          disabled={counter === 0 ? "disabled" : null}
          className="itemCardSecBtn"
          onClick={subtract}
        >
          {String.fromCharCode(60)}
        </button>

        <input
          type="text"
          value={counter}
          onChange={handlerChange}
          onClick={(e) => {
            e.target.select();
          }}
        />

        <button className="itemCardSecBtn" onClick={add}>
          {String.fromCharCode(62)}
        </button>

        <button
          disabled={counter === 0 ? "disabled" : null}
          className="itemCardMainBtn"
          onClick={handlerAdd}
        >
          AGREGAR
        </button>

        {buyOption ?
          <button
            disabled={counter === 0 ? "disabled" : null}
            className="itemCardMainBtn"
            onClick={handlerBuy}
          >
            COMPRAR AHORA
          </button>
          : ""
        }
      </div>
    </>
  );
};

export default ItemCount;
