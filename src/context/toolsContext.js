import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contexto = createContext();
export const { Provider } = contexto;

export const useTools = () => {
  return useContext(contexto);
};

const CustomTools = ({ children }) => {
  const tools_removeItem = () => {
    console.log("Se eliminará un elemento del array");
  };

  const tools_alert = (msg) => {
    toast(msg, { theme: "dark" })
  };

  const valorDelContexto = {
    tools_removeItem,
    tools_alert,
  };

  return (
    <Provider value={valorDelContexto}>
      <ToastContainer></ToastContainer>
      {children}
    </Provider>
  );
};

export default CustomTools;
