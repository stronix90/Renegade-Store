import { useState, useEffect } from "react";
import { useTools } from "../../context/toolsContext";

const ItemCount = ({ stock, initial, buyOption, onAdd, onBuy, onRemove }) => {
  // Destructuring del contexto de herramientas
  const { tools_alert } = useTools();

  // Declaración del estado COUNTER
  const [counter, setCounter] = useState(initial || 0);

  // Control de la cantidad inicial
  useEffect(() => {
    setCounter(initial);
  }, [initial]);

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

  // REMOVER ITEM DEL CARRITO
  const handlerRemove = () => {
    if (counter > 0 && stock >= counter) {
      setCounter(0);
      onRemove();
    }
  };

  // AUMENTAR CANTIDAD
  const add = () => {
    if (stock >= counter + 1) setCounter(counter + 1);
    else tools_alert("No hay más stock");
  };

  // DISMINUIR CANTIDAD
  const subtract = () => {
    if (counter > 0) setCounter(counter - 1);
    if (counter - 1 === 0) onRemove();
  };

  // CAMBIAR MANUALMENTE CANTIDAD
  const handlerChange = (e) => {
    let val = parseInt(e.target.value);
    if (val <= stock) setCounter(val);
    else {
      tools_alert(
        "No hay stock suficiente. Se ha seleccionado el stock máximo: " + stock
      );
      setCounter(stock);
    }
  };

  return (
    <>
      <div className="itemCardButtons">
        {/* BOTÓN DISMINUIR CANTIDAD */}
        <button
          disabled={counter === 0 ? "disabled" : null}
          className="itemCardSecBtn"
          onClick={subtract}
        >
          {String.fromCharCode(60)}
        </button>

        {/* INGRESO MANUAL DE CANTIDAD */}
        <input
          type="text"
          value={counter}
          onChange={handlerChange}
          onClick={(e) => {
            e.target.select();
          }}
        />

        {/* BOTÓN AUMENTAR CANTIDAD */}
        <button
          disabled={counter === stock ? "disabled" : null}
          className="itemCardSecBtn"
          onClick={add}
        >
          {String.fromCharCode(62)}
        </button>

        {/* BOTÓN AGREGAR A CARRITO */}
        {initial === 0 ? (
          <>
            <button
              disabled={counter === 0 ? "disabled" : null}
              className="itemCardMainBtn"
              onClick={handlerAdd}
            >
              <span className="material-icons">shopping_cart</span> Agregar
            </button>
          </>
        ) : (
          <></>
        )}

        {/* BOTÓN COMPRAR */}
        {buyOption ? (
          <button
            disabled={counter === 0 ? "disabled" : null}
            className="itemCardMainBtn"
            onClick={handlerBuy}
          >
            <span className="material-icons">local_mall</span> Comprar
          </button>
        ) : (
          ""
        )}

        {/* INFORMACIÓN SOBRE CANTIDAD EN EL CARRITO */}
        <div className="note_box" style={{ opacity: initial > 0 ? "1" : "0" }}>
          <span className="note">
            {counter} {counter === 1 ? "unidad" : "unidades"} en carrito
          </span>
          <span
            onClick={handlerRemove}
            className="material-icons trash"
            title="Quitar este producto del carrito"
          >
            delete_forever
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
