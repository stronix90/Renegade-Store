import { useState } from "react/cjs/react.development";
import { useUserAuth } from "../../context/userAuthContext";

const UserAuth = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const { signUp, login, loginWithGoogle, resetPassword } = useUserAuth();

  let operationText,
    invOperationText = "";
  if (isLogin) {
    operationText = "Iniciar sesión";
    invOperationText = "Registrarse";
  } else {
    operationText = "Registrarse";
    invOperationText = "Iniciar sesión";
  }

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) login(user.email, user.password);
    else signUp(user.firstName, user.lastName, user.email, user.password);
  };

  const handleOperation = () => setIsLogin(!isLogin);

  const handlerLoginWithGoogle = () => loginWithGoogle();

  const handlerResetPassword = () => {
    if (!user.email) return console.log("Por favor, ingresar un email");
    resetPassword(user.email);
  };

  return (
    <div className="card">
      <h3>{operationText}</h3>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Nombre"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        )}
        {!isLogin && (
          <input
            type="text"
            placeholder="Apellido"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          placeholder="email@empresa.com"
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
        <button type="submit">{operationText}</button>
      </form>
      <p onClick={handleOperation}>{invOperationText}</p>
      {isLogin && (
        <a onClick={handlerResetPassword} href="#!">
          Olvidaste tu password?
        </a>
      )}
      <button onClick={handlerLoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default UserAuth;
