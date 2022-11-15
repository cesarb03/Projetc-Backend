# PROYECTO FINAL BACKEND CODERHOUSE
## Consejos
API provada a través de POSTMAN <br>


## Rutas

| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Inicio de sesion de usuarios se les dara un Token para que puedan Acceder a las demas rutas                                                                                                                                                                         |
| POST    | **/signup**     | Registro de usuarios se alamacena en MongoDB y se le asigna un cart al nuevo user|
| POST    | **/logout**     | Se desloguea el usuario                                                                                                                                                                          |
| GET    | **/api/productos**     | Me permite listar todos los productos disponibles                                                                                                                                                                           |
| POST   | **/api/productos**     | Para incorporar productos al listado / Se necesita estar logueado                                                                                                                                                                                         |
| GET    | **/api/productos/:id** | Permite ver un producto especifico dando en ID / Se necesita loguearse                                                                                                                                                          |
| PUT    | **/api/productos/:id**     | Permite Editar el producto Seleccionado por ID / Se necesita loguearse  |
| DELETE    | **/api/productos/:id**     | Permite Eliminar un Producto seleccionado por ID / Se necesita loguearse |
| GET    | **/api/categories/:categories** | Permite filtrar productos por categoría |
| GET    | **/api/cart**     | Permite ver el carrito y sus productos en el caso que tenga |
| DELETE    | **/api/cart**     | Permite eliminar todos los productos que estan cargados en el carrito / Se necesita loguearse |
| POST    | **/api/cart/:prod_id**        | Permite agregagar productos al carrito por su ID / Se necesita loguearse |
| DELETE    | **/api/cart/:pord_id**        | Permite eliminar un producto del carrito por su ID / Se necesita loguearse |
| POST    | **/api/order**        | Permite generar una orden de compra respecto al carrito correspondiente al user logueado |
| GET   | **/api/info**        | Se renderiza a través de el motor de plantillas Ejs una vista con datos del servidor |
| GET   | **/api/info**        | Se renderiza a través de el motor de plantillas Ejs una vista con datos del servidor |
| GET   | **/api/chat**        | Se renderiza a través de el motor de plantillas Hubs un chat online |



### Link de Heroku

**Deploy:**
 

## Academy
> [CODERHOUSE](https://www.coderhouse.com/)

## Course
> [Back-End Node Js](https://www.coderhouse.com/online/programacion-backend)

## Teach & tutor
> <p>Comisión: 31005.</p>
> <p>Teach: Salvador Perez</p>
> <p>Tutor: Alejandro Aliaga.</p> 

## Author
> <p>César Bergamasco. </p>