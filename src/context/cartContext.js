import { useState, createContext, useContext } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useContexto = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const setCarritoCustom = (carrito) => {
    setCarrito(carrito);
    setCantidadTotal(carrito.length);
  };

  //   AGREGAR ITEM AL CARRITO
  const addItem = (item) => {
    let index = isInCart(item.id);
    if (index === -1) setCarritoCustom([...carrito, item])
  };

  //   QUITAR ITEM DEL CARRITO
  const updateItem = (itemId, q) => {
    let index = isInCart(itemId);
    if (index < 0) return;

    let carritoUpdate = carrito.slice();
    if (q > 0) {
      carritoUpdate[index].q = q;
      setCarritoCustom(carritoUpdate);
    } else {
      carritoUpdate.splice(index, 1);
      setCarritoCustom(carritoUpdate);
    }
  };

  //   VACIAR CARRITO
  const clear = () => setCarritoCustom([]);

  // DEVUELVE CANTIDAD DE UNIDADES DE UN ITEM
  const getQuantity = (itemId) => {
    let index = isInCart(itemId);

    return index > -1 ? carrito[index].q : 0;
  };

  //   VERIFICAR SI EL PRODUCTO YA EXISTE EN EL CARRITO
  const isInCart = (itemId) =>
    carrito.findIndex((element) => element.id === itemId);

  const valorDelContexto = {
    cantidadTotal,
    carrito,
    addItem,
    updateItem,
    clear,
    getQuantity,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
