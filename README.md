# Renegade Store

Renegade Store es un eCommerce para apasionados del gaming, que buscan los último en tecnología de computadoras y notebook, hardware, mouse, teclados, sillas, consolas, etc.
Este proyecto se creó como desafío final del curso ReactJS, de CoderHouse.
[![image cover](/public/cover_renegade.jpg)](https://renegade-store.herokuapp.com/)
[Ir al sitio](https://renegade-store.herokuapp.com/)

## Sobre el sitio
### Diseño
Se ha optado por un tono oscuro, con el verde como color principal.
Además, se utilizan efectos de luces y sombras para marcar los componentes activos e inactivos.
El sitio cuenta con transparencias, lo cual permitió poner una imagen de fondo que puede cambiarse regularmente para generar novedad en los visitantes. Esta imagen suele ser de algún video juego, por lo tanto, es recomendable actualizarla según los juegos del momento.

* Cart Widget

    ![Texto alternativo](https://i.ibb.co/Sv5XtxM/cart-Widget.png)

* Item

    ![Texto alternativo](https://i.ibb.co/qd1nMfB/item.png)

* Categorías

![Texto alternativo](https://i.ibb.co/86FvVL3/categorias.png)

### Funcionalidades extras
A continuación se detalla ciertas funcionalidades extras que se han desarrollado:
* Los productos guardados en la base de datos tienen los siguientes campos:
    * SALE: Productos en oferta
    * Outstanding: Productos destacados

    Aquellos productos que tenga el valor *true* aparecerán en la página principal del sitio.
* La cantidad de unidades a comprar se puede establecer con los botones (< >) y también ingresando manualmente la cantidad.
* El usuario tiene dos caminos para concretar una compra
  * Ir agregando productos en el carrito y luego comprar todos los elementos agregados
  * Comprar un producto puntual, sin necesidad de usar el carrito
* Los componentes `ItemCount` e `Item` son personalizables a través de ciertos parámetros
    * `footerOption`: Le agrega o no el footer a la tarjeta de producto
    * `buyOption`: Muestra/Oculta el botón COMPRAR
    * `informationOption`: Muestra/Oculta la cantidad de unidades agregas al carrito
    * `inlineTrashOption`: Muestra opción para eliminar producto, ubicado en la misma línea de selección de cantidades

    Esta personalización permitió que estos dos componentes sean usados en varias páginas a pesar de tener requisitos especiales en cada una.
    
* Registro e Inicio de Sesión con las herramientas de `firebase`
    * Iniciar sesión con cuenta de Google
    * Crear usuario e Inicio de sesión con Email y Contraseña
        * Posibilidad de recuperar contraseña
* El carrito y sus variables asociadas se guardan en `LocalStorage` para que persistan a pesar de que se cierre el navegador.




## Recursos utilizados
Este proyecto utiliza como tecnología base a la biblioteca Ract JS.
Además, se han utilizado los siguientes paquetes:
* [React-Bootstrap](https://react-bootstrap.github.io//) \
Framework para desarrollar sitios web con un diseño responsive y mobile-first.
En el proyecto se ha utilizado principalmente para aprovechar sus componentes responsive, ya que el aspecto del sitio se debe a CSS puro.
* [Firebase](https://firebase.google.com/) \
Firebase es una plataforma de Google, para el desarrollo de aplicaciones web y aplicaciones móviles.
En este proyecto se ha utilizado los siguientes servicios:
 * Base de datos: `firestore`. Allí se guardan los datos de productos y venta.
 * Autenticación de usuarios: `Authentication`. Se ha implementado el registro y login utilizando email y clave; así mismo, utilizando una cuenta de Google.
* [React Toastify](https://github.com/fkhadra/react-toastify#readme/) \
Permite crear mensajes de notificación vistos, de manera rápida y sencilla.
* [React-items-carousel](https:https://github.com/kareemaly/react-items-carousel/) \
Permite crear carousel sin necesidad de escribir JS y CSS

# Instalación
Para copiar este proyecto en su computadora deberá tener previamente instalado [`Git`](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git) y [`NodeJS`](https://nodejs.org/es/). Luego se deberán seguir los siguientes pasos:

**1. Clonar el repositorio**
``` shell
git clone https://github.com/stronix90/Renegade-Store
```
Ingresar a la carpeta de la aplicación:
``` shell
cd Renegade-Store
```
**2. Instalar dependencias**
```
npm install
```
**3. Ejecutar la aplicación**

``` shell
npm start
```
