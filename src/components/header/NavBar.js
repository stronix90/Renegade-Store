import CartWidget from "../cart/cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import { useState } from "react";

const NavBar = () => {
  const { user, logout } = useUserAuth();
  const [isCardProfileVisible, setIsCardProfileVisible] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo mx-auto" to="/">
          <img
            src="/img/logo.svg"
            width="154"
            height="39"
            className="d-inline-block align-text-middle logo"
            alt="logo"
          />
        </NavLink>

        <div className="d-flex cartwidget_container">
          <CartWidget />

          <img
            onClick={() => setIsCardProfileVisible(!isCardProfileVisible)}
            style={{ width: "32px", borderRadius: "50%", marginLeft: "1.5rem" }}
            src={
              user && user.photoURL ? user.photoURL : "./img/profilePicture.png"
            }
            alt="Foto de perfil"
          />

          {isCardProfileVisible && (
            <div
              style={{
                position: "absolute",
                top: "65px",
                right: "0",
                padding: "2rem",
                minWidth: "200px",
                background: "var(--neutral500)",
                borderRadius: "3px",
                boxShadow: "0 0 20px 0 rgb(30, 30, 30)",
              }}
            >
              {user ? (
                <>
                  <p>{user.displayName}</p>
                  <a href="#!" onClick={logout}>Logout</a>
                </>
              ):(
                <>
                <p>Registrarse</p>
                <p>Ingresar</p>
                </>
              ) }

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
