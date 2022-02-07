import { useState, createContext, useContext } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCart = () => {
  return useContext(contexto);
};

const CartProvider = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [montoTotal, setMontoTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [directPurchase, setDirectPurchase] = useState([]);

  const setCarritoCustom = (carritoUpdate, operation, qDif, index) => {
    let newCantidadTotal,
      newMontoTotal = 0;

    switch (operation) {
      case "new":
        newCantidadTotal = cantidadTotal + carritoUpdate.at(-1).q;
        newMontoTotal =
          montoTotal + carritoUpdate.at(-1).q * carritoUpdate.at(-1).price;
        break;

      case "update":
        newCantidadTotal = cantidadTotal + qDif;
        newMontoTotal = montoTotal + qDif * carrito[index].price;
        break;

      case "empty":
        newCantidadTotal = 0;
        newMontoTotal = 0;
        break;

      default:
        break;
    }

    setCantidadTotal(newCantidadTotal);
    setMontoTotal(newMontoTotal);
    setCarrito(carritoUpdate);
  };

  const addItem = (item) => {
    let index = isInCart(item.id);
    if (index === -1) setCarritoCustom([...carrito, item], "new");
  };

  const updateItem = (itemId, q) => {
    let index = isInCart(itemId);
    if (index < 0) return;

    let carritoUpdate = carrito.slice();
    let qDif = q - carritoUpdate[index].q;

    if (q > 0) {
      carritoUpdate[index].q = q;
      setCarritoCustom(carritoUpdate, "update", qDif, index);
    } else {
      carritoUpdate.splice(index, 1);
      setCarritoCustom(carritoUpdate, "update", qDif, index);
    }
  };

  const clear = () => setCarritoCustom([], "empty");

  const getQuantity = (itemId) => {
    let index = isInCart(itemId);

    return index > -1 ? carrito[index].q : 0;
  };

  const isInCart = (itemId) =>
    carrito.findIndex((element) => element.id === itemId);

  const buyItem = (item) => setDirectPurchase(item);

  const valorDelContexto = {
    montoTotal,
    cantidadTotal,
    carrito,
    addItem,
    updateItem,
    buyItem,
    clear,
    getQuantity,
    directPurchase
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CartProvider;
