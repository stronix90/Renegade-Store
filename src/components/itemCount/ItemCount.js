import { useState, useEffect } from "react";
import { useTools } from "../../context/toolsContext";
import  "./itemCount.css"

const ItemCount = ({
  stock,
  initial,
  buyOption,
  informationOpcion,
  inlineTrashOption,
  onAdd,
  onBuy,
  onUpdate,
}) => {
  // Destructuring del contexto de herramientas
  const { tools_alert } = useTools();

  // Declaración del estado COUNTER
  const [counter, setCounter] = useState(initial || 0);

  // Cuando cambia INITIAL, se actualiza el valor del counter
  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  // Cuando cambia COUNTER, se llama a función para que actualice la cantidad en carrito
  useEffect(() => {
    onUpdate(counter);
  }, [counter]);

  // AGREGAR AL CARRITO
  const handlerAdd = () => {
    if (counter > 0 && stock >= counter) onAdd(counter);
  };

  // FINALIZAR COMPRA
  const handlerBuy = () => {
    if (counter > 0 && stock >= counter) onBuy(counter);
  };

  // ACTUALIZAR CANTIDAD
  const handlerUpdateQ = (newCounter) => {
    if (newCounter > 0) {
      if (newCounter <= stock) setCounter(newCounter);
      else {
        setCounter(stock);
        tools_alert(
          `No hay stock suficiente. Se ha seleccionado el stock máximo: ${stock}`
        );
      }
    } else setCounter(0);
  };

  return (
    <>
      <div className="itemCardButtons">
        {inlineTrashOption ? (
          <span
            onClick={() => handlerUpdateQ(0)}
            className="material-icons inline_trash"
            title="Quitar este producto del carrito"
          >
            delete_forever
          </span>
        ) : <></>}

        {/* BOTÓN DISMINUIR CANTIDAD */}
        <button
          disabled={counter === 0 ? "disabled" : null}
          className="itemCardSecBtn"
          onClick={() => handlerUpdateQ(counter - 1)}
        >
          {String.fromCharCode(60)}
        </button>

        {/* INGRESO MANUAL DE CANTIDAD */}
        <input
          type="text"
          value={counter}
          onChange={(e) => handlerUpdateQ(parseInt(e.target.value))}
          onClick={(e) => {
            e.target.select();
          }}
        />

        {/* BOTÓN AUMENTAR CANTIDAD */}
        <button
          disabled={counter === stock ? "disabled" : null}
          className="itemCardSecBtn"
          onClick={() => handlerUpdateQ(counter + 1)}
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
          <></>
        )}

        {/* INFORMACIÓN SOBRE CANTIDAD EN EL CARRITO */}
        {informationOpcion ? (
          <div
            className="note_box"
            style={{ opacity: initial > 0 ? "1" : "0" }}
          >
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ItemCount;
