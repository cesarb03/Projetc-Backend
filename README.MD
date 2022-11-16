# PROYECTO FINAL BACKEND CODERHOUSE
## Consejos
API provada a través de POSTMAN <br>


## Rutas

| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|## Register/Login/Logout|
| POST    | **/login**     | Inicio de sesion de usuarios se les dara un Token para que puedan Acceder a las demas rutas |
| POST    | **/signup**     | Registro de usuarios se alamacena en MongoDB y se le asigna un cart al nuevo user|
| POST    | **/logout**     | Se desloguea el usuario|
|## Path by Products|
| GET    | **/api/productos**     | Me permite listar todos los productos disponibles |
| POST   | **/api/productos**     | Para incorporar productos al listado / Se necesita estar logueado |
| GET    | **/api/productos/:id** | Permite ver un producto especifico dando en ID / Se necesita loguearse |
| PUT    | **/api/productos/:id**     | Permite Editar el producto Seleccionado por ID / Se necesita loguearse  |
| DELETE    | **/api/productos/:id**     | Permite Eliminar un Producto seleccionado por ID / Se necesita loguearse |
| GET    | **/api/categories/:categories** | Permite filtrar productos por categoría |
|## Path by Cart|
| GET    | **/api/cart**     | Permite ver el carrito y sus productos en el caso que tenga |
| DELETE    | **/api/cart**     | Permite eliminar todos los productos que estan cargados en el carrito / Se necesita loguearse |
| POST    | **/api/cart/:prod_id**        | Permite agregagar productos al carrito por su ID / Se necesita loguearse |
| DELETE    | **/api/cart/:pord_id**        | Permite eliminar un producto del carrito por su ID / Se necesita loguearse |
|## Path by Order |
| POST    | **/api/order**        | Permite generar una orden de compra respecto al carrito correspondiente al user logueado |
|## Path by Info Server|
| GET   | **/api/info**        | Se renderiza a través de el motor de plantillas Ejs una vista con datos del servidor |
|## Path by Chat |
| GET   | **/api/chat**        | Se renderiza a través de el motor de plantillas Ejs un chat online |
|## Path by Upload Avatar |
| POST   | **/signup/upload**        | Se renderiza a través de el motor de plantillas Ejs una vista para cargar el avatar |


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