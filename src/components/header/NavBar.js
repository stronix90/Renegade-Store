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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown ms-5">
                <a
                  className="nav-link active dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTOS
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Equipos armados
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Notebooks y accesorios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Combos de actualización
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Monitores y proyectores
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sillas
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Componentes
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}

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
