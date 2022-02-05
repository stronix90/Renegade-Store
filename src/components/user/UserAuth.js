import { useState } from "react/cjs/react.development";
import { useUserAuth } from "../../context/userAuthContext";
import { useTools } from "../../context/toolsContext";
import "./UserAuth.css";

const UserAuth = () => {
  const { tools_alert } = useTools();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const { signUp, login, loginWithGoogle, resetPassword } = useUserAuth();

  let operationText = "";
  if (isLogin) operationText = "Iniciar sesión";
  else operationText = "Registro";

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) login(user.email, user.password);
    else {
      if (user.password !== user.password2) {
        tools_alert("Las contraseñas ingresadas no coinciden");
        return;
      }

      if (user.firstName.length < 2 || user.lastName.length < 2) {
        tools_alert("Ingrese un nombre y apellido válido");
        return;
      }

      signUp(user.firstName, user.lastName, user.email, user.password);
    }
  };

  const handleOperation = () => setIsLogin(!isLogin);

  const handlerLoginWithGoogle = () => loginWithGoogle();

  const handlerResetPassword = () => {
    if (!user.email) return console.log("Por favor, ingresar un email");
    resetPassword(user.email);
  };

  return (
    <div className="userAuth card itemCard">
      <div className="card-body">
        <h3>{operationText}</h3>
        <form onSubmit={handleSubmit} className="form-group">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Nombre"
                name="firstName"
                id="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Apellido"
                name="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </>
          )}
          <input
            type="email"
            placeholder="email@email.com"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
            onChange={handleChange}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Ingrese nuevamente la contraseña"
              name="password2"
              id="password2"
              onChange={handleChange}
            />
          )}
          <div className="row">
            <div className="col-auto m-auto">
              <button className="customBtnMain" type="submit">
                {operationText}
              </button>
            </div>

            <div className="col d-flex flex-column align-items-end m-auto">
              <span className="">
                <small>
                  {isLogin ? "¿Aún no tenés cuenta?" : "¿Ya tenés cuenta?"}{" "}
                  <b>
                    <a href="#!" onClick={handleOperation}>
                      {isLogin ? "REGISTRARSE" : "INGRESAR"}
                    </a>
                  </b>
                </small>
              </span>
              {isLogin && (
                <span>
                  <a onClick={handlerResetPassword} href="#!">
                    <small className="text-muted">
                      ¿Olvidaste tu password?
                    </small>
                  </a>
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <button onClick={handlerLoginWithGoogle}>
          Ingresar con <i className="fab fa-google" />
        </button>
      </div>
    </div>
  );
};

export default UserAuth;
