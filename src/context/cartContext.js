import { useState, createContext, useContext } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCart = () => {
  return useContext(contexto);
};

const CartProvider = ({ children }) => {
  const carritoLocalStorage = localStorage.getItem("carrito");
  const carritoLocalStorageJSON = JSON.parse(carritoLocalStorage)|| [];
  const [carrito, setCarrito] = useState(carritoLocalStorageJSON);
  
  const montoTotalLocalStorage = localStorage.getItem("montoTotal");
  const montoTotalLocalStorageJSON = parseInt(JSON.parse(montoTotalLocalStorage),10) || 0;
  const [montoTotal, setMontoTotal] = useState(montoTotalLocalStorageJSON);

  const cantidadTotalLocalStorage = localStorage.getItem("cantidadTotal");
  const cantidadTotalLocalStorageJSON =parseInt(JSON.parse(cantidadTotalLocalStorage),10) || 0;
  const [cantidadTotal, setCantidadTotal] = useState(cantidadTotalLocalStorageJSON);

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
    localStorage.setItem("cantidadTotal", JSON.stringify(newCantidadTotal));

    setMontoTotal(newMontoTotal);
    localStorage.setItem("montoTotal", JSON.stringify(newMontoTotal));

    setCarrito(carritoUpdate);
    localStorage.setItem("carrito", JSON.stringify(carritoUpdate));
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
