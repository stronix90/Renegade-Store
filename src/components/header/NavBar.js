import { NavLink } from "react-router-dom";
import CartWidget from "../cart/cartWidget/CartWidget";
import UserWidget from "../user/UserWidget";

const NavBar = () => {

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

        <div className="d-flex ms-auto me-1">
          <CartWidget />
          <UserWidget/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
