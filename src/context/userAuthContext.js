import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useTools } from "./toolsContext";

const contexto = createContext();
const { Provider } = contexto;

export const useUserAuth = () => {
  return useContext(contexto);
};

const UserAuthProvider = ({ children }) => {
  const { tools_alert } = useTools();
  const [user, setUser] = useState(null);

  const signUp = async (firstName, lastName, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
          photoURL: "https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png"
        }).catch((error) => {
          tools_alert(error.message);
        });
        tools_alert("Usuario creado satisfactoriamente");
      })

      .catch((error) => {
        let msg = "";
        switch (error.code) {
          case "auth/email-already-in-use":
            msg = "El email ya se encuentra registrado";
            break;

          case "auth/weak-password":
            msg = "La contraseña debe tener al menos 6 caracteres";
            break;

          case "auth/invalid-email":
            msg = "El email ingresado es inválido";
            break;

          default:
            msg = error.message;
            break;
        }
        tools_alert(msg);
      });
  };

  const login = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => tools_alert("Ha iniciado sesión correctamente"))

      .catch((error) => {
        let msg = "";
        switch (error.code) {
          case "auth/wrong-password":
            msg = "El password ingresado es incorrecto";
            break;

          case "auth/user-not-found":
            msg = "Usuario inexistente";
            break;

          default:
            msg = error.message;
            break;
        }
        tools_alert(msg);
      });
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).catch((error) =>
      tools_alert(error.message)
    );
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
  };

  const resetPassword = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => console.log("Email enviado"))
      .catch((error) => tools_alert(error.message));
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const valorDelContexto = {
    user,
    signUp,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default UserAuthProvider;
