// 1. Necesitamos la variable React en scope
import React from "react"

// 2. Necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom"

// 3. Necesitamos una aplicación de React
import App from "./App"

// 4. Conexión a la base de datos

import "./css/styles.css"
import "./components/home/hero/slider.css"
import "./conexion"


// 4. Necesitamos dibujar la aplicación en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))
