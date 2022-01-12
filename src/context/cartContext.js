import { useState, createContext, useContext } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useContexto = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [montoTotal, setMontoTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  // setCARRITO PERSONALIZADO. ACTUALIZA: carrito, cantidadTotal y montoTotal
  const setCarritoCustom = (carritoUpdate, operation, qDif, index) => {
    let newCantidadTotal, newMontoTotal = 0

    switch (operation) {
      case "new":
        newCantidadTotal = cantidadTotal + carritoUpdate.at(-1).q
        newMontoTotal = montoTotal + carritoUpdate.at(-1).q * carritoUpdate.at(-1).price
        break;

      case "update":
        newCantidadTotal = cantidadTotal + qDif
        newMontoTotal = montoTotal + (qDif * carrito[index].price)
        break;

      case "empty":
        newCantidadTotal = 0
        newMontoTotal = 0
        break;
    }

    setCantidadTotal(newCantidadTotal)
    setMontoTotal(newMontoTotal)
    setCarrito(carritoUpdate);
  };

  //   AGREGAR ITEM AL CARRITO
  const addItem = (item) => {
    let index = isInCart(item.id);
    if (index === -1) setCarritoCustom([...carrito, item], "new")
  };

  //   ACTUALIZA DATO EXISTENTE
  const updateItem = (itemId, q) => {
    let index = isInCart(itemId);
    if (index < 0) return;

    let carritoUpdate = carrito.slice();
    let qDif = q - carritoUpdate[index].q

    //Actualiza la cantidad (q)
    if (q > 0) {
      carritoUpdate[index].q = q;
      setCarritoCustom(carritoUpdate, "update", qDif, index);
    }
    // Elimina el prudcto del carrito
    else {
      carritoUpdate.splice(index, 1);
      setCarritoCustom(carritoUpdate, "update", qDif, index);
    }
  };

  //   VACIAR CARRITO
  const clear = () => setCarritoCustom([], "empty");

  // DEVUELVE CANTIDAD DE UNIDADES DE UN ITEM
  const getQuantity = (itemId) => {
    let index = isInCart(itemId);

    return index > -1 ? carrito[index].q : 0;
  };

  //   VERIFICAR SI EL PRODUCTO YA EXISTE EN EL CARRITO, SI EXISTE, DEVUELVE SU POSICIÓN
  const isInCart = (itemId) =>
    carrito.findIndex((element) => element.id === itemId);

  const valorDelContexto = {
    montoTotal,
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
