import { useContexto } from "../../../context/cartContext";
import { db } from "../../../conexion.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../../context/userAuthContext";
import UserAuth from "../../user/UserAuth";
import "./checkout.css";
import Category from "../../category/Category";
import emptyCart from "../emptyCart";

const Checkout = () => {
  const { carrito, montoTotal, clear, cantidadTotal } = useContexto(); // CONTEXTO DEL CARRITO
  const { user } = useUserAuth();
  const [purchaseId, setPurchaseId] = useState("");
  const [purchase, setPurchase] = useState({
    items: [],
    cantidadTotal: 0,
    montoTotal: 0,
  });

  const purchaseItemsWithoutImage = () =>
    purchase.items.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      q: p.q,
    }));

  const savePurchase = async () => {
    const docRef = await addDoc(collection(db, "sales"), {
      buyer: {
        name: user.displayName,
        email: user.email,
      },
      items: purchaseItemsWithoutImage(),
      date: serverTimestamp(),
      total: montoTotal,
    });
    setPurchaseId(docRef.id);
    clear();
  };

  useEffect(() => {
    setPurchase({
      items: carrito,
      cantidadTotal: cantidadTotal,
      montoTotal: montoTotal,
    });
  }, []);

  return (
    <>
      <Category />
      <div className="container customContainer">
        {carrito.length === 0 && !purchaseId ? (
          <emptyCart />
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
                    <button
                      className="customBtn d-block"
                      onClick={savePurchase}
                    >
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
                  <div className="row">
                    <p className="text-center">
                      Conserve su comprobante: {purchaseId}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;