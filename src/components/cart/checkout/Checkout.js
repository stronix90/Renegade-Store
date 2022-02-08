import { db } from "../../../conexion.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { useUserAuth } from "../../../context/userAuthContext";
import { useCart } from "../../../context/cartContext";

import { useState, useEffect } from "react";

import UserAuth from "../../user/UserAuth";
import EmptyCart from "../EmptyCart";

import "./checkout.css";

import { toast } from "react-toastify";

const Checkout = () => {
  const { carrito, montoTotal, clear, cantidadTotal, directPurchase, buyItem } =
    useCart();
  const { user } = useUserAuth();
  const [purchaseId, setPurchaseId] = useState("");
  const [purchase, setPurchase] = useState({
    items: [],
    cantidadTotal: 0,
    montoTotal: 0,
    direct: false,
  });

  const purchaseItemsWithoutImage = () =>
    purchase.items.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      q: p.q,
    }));

  const savePurchase = async () => {
    try {
      const docRef = await addDoc(collection(db, "sales"), {
        buyer: {
          name: user.displayName,
          email: user.email,
        },
        items: purchaseItemsWithoutImage(),
        date: serverTimestamp(),
        total: purchase.montoTotal,
      });
      setPurchaseId(docRef.id);
      if (!purchase.direct) clear();
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  useEffect(() => {
    if (directPurchase.length !== 0) {
      setPurchase({
        items: directPurchase[0].item,
        cantidadTotal: directPurchase[0].item[0].q,
        montoTotal:
          directPurchase[0].item[0].q * directPurchase[0].item[0].price,
        direct: true,
      });
      buyItem([]);
    } else
      setPurchase({
        items: carrito,
        cantidadTotal: cantidadTotal,
        montoTotal: montoTotal,
        direct: false,
      });
  }, []);

  return (
    <div className="container customContainer CheckOut">
      {carrito.length === 0 && !purchase.direct && !purchaseId ? (
        <EmptyCart />
      ) : (
        <div className="row justify-content-around">
          <div className="card itemCard col-lg-6 my-2 my-lg-0 ">
            <div className="card-body">
              <h2 className="card-title">Resumen de compra</h2>
              <ul className="list-group">
                {purchase.items.map((p) => (
                  <li key={p.id}>
                    <span>{p.q}.</span>
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <p>Items: {purchase.cantidadTotal}</p>
              <p>Monto: ${purchase.montoTotal}</p>
            </div>
          </div>

          <div className="card itemCard neutral800 col-lg-6 my-2 my-lg-0">
            <div className="card-body">
              <h2 className="card-title">Proceso de compra</h2>

              <div className="row checkout_steps">
                <div className={user ? "col-auto done" : "col-auto undone"}>
                  <span>1</span>
                </div>
                <span className="col">Iniciar sesión / Registrarse</span>
              </div>
              <div className="row">{!user && <UserAuth />}</div>

              <div className="row checkout_steps">
                <div
                  className={purchaseId ? "col-auto done" : "col-auto undone"}
                >
                  <span>2</span>
                </div>
                <span className="col">Confirmar compra</span>
              </div>
              {user && !purchaseId && (
                <div className="row">
                  <button className="btnSec d-block" onClick={savePurchase}>
                    CONFIRMAR
                  </button>
                </div>
              )}

              <div className="row checkout_steps">
                <div
                  className={purchaseId ? "col-auto done" : "col-auto undone"}
                >
                  <span>3</span>
                </div>
                <span className="col">Compra realizada</span>
              </div>
              {purchaseId && (
                <div className="row text-center">
                  <h3>Muchas gracias por su compra!</h3>
                  <p>Conserve su comprobante: {purchaseId}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
