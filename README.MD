![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MONGO](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TWILIO](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

# **ENTREGA FINAL**

* Consigna del proyecto **[acá](https://docs.google.com/document/d/18M1SiOzBXwQgkPwz7NUYcnRqFgwsNogt8o7AKtU1Ybc/edit)**.

* Podés ver el **deploy** **[acá](https://projetc-backend-production.up.railway.app/api/info)**.

* La entrega final del curso de **Back End** de [CoderHouse](https://www.coderhouse.com/) consiste en funcionalidades de un e-commerce basado en [node](http://nodejs.org) y [express](https://www.npmjs.com/package/express).

# **Instalación**

## 1- Clona este repositorio

En la consola de **Git**: `git clone https://github.com/cesarb03/Projetc-Backend.git`

## 2- Instala las dependencias

En la consola del proyecto: `npm install`

# **Scripts**

Iniciar el transpilador TSC de Typestript:<br>
`npm run build`<br>
Iniciar la app con node:<br>
`npm start`<br>
Iniciar la app con nodemon:<br>
`npm run start:dev`

# **Variables de entorno**

(Archivo .env)

```
(Server Settings)
ENVIRONMENT_MODE=development
PORT=8080 (puerto)
PERSISTENCE=1 (solo trabajé con MONGODB)

(Mongo DB Settings)
SECRET_KEY= (clave de sesión)
MONGODB= (link de base de datos en Mongo Atlas entre ``)
SESSION_TIME=600000 (tiempo de duración de la sesión)

(Twilio Settings)
TWILIO_ACCOUNT_SID= (Account sid de Twilio)
TWILIO_AUTH_TOKEN= (Auth token de Twilio)
TWILIO_NUMBER= (Numero de telefono de Twilio)
TWILIO_WHATSAPP= (Numero de telefono de Twilio)
TWILIO_ADMIN_NUMBER= (Numero de telefono Nuestro)

(Nodemailer Settings)
GMAIL_USER= (direccion email emisor para nodemailer)
GMAIL_PASS= (App password del email emisor)

```


# **Consejos**
API probada a través de POSTMAN **[Archivo Postman](./Postman-EntregaFinal-collection.json)**

# **Rutas**

| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Inicio de sesion de usuarios se les dara un Token para que puedan Acceder a las demas rutas |
| POST    | **/signup**     | Registro de usuarios se alamacena en MongoDB y se le asigna un cart al nuevo user|
| POST    | **/logout**     | Se desloguea el usuario |
| GET    | **/api/productos**     | Me permite listar todos los productos disponibles |
| POST   | **/api/productos**     | Para incorporar productos al listado / Se necesita estar logueado |
| GET    | **/api/productos/:id** | Permite ver un producto especifico dando en ID / Se necesita loguearse |
| PUT    | **/api/productos/:id**     | Permite Editar el producto Seleccionado por ID / Se necesita loguearse  |
| DELETE    | **/api/productos/:id**     | Permite Eliminar un Producto seleccionado por ID / Se necesita loguearse |
| GET    | **/api/categories/:categories** | Permite filtrar productos por categoría |
| GET    | **/api/cart**     | Permite ver el carrito y sus productos en el caso que tenga |
| DELETE    | **/api/cart**     | Permite eliminar todos los productos que estan cargados en el carrito / Se necesita loguearse |
| POST    | **/api/cart/:prod_id**        | Permite agregagar productos al carrito por su ID / Se necesita loguearse |
| DELETE    | **/api/cart/:pord_id**        | Permite eliminar un producto del carrito por su ID / Se necesita loguearse |
| POST    | **/api/order**        | Permite generar una orden de compra respecto al carrito correspondiente al user logueado |
| GET   | **/api/info**        | Se renderiza a través de el motor de plantillas Ejs una vista con datos del servidor |
| GET   | **/api/chat**        | Se renderiza a través de el motor de plantillas Ejs un chat online |
| POST   | **/signup/upload**        | Se renderiza a través de el motor de plantillas Ejs una vista para cargar el avatar |


# **Utilización de dependencias**
 - **Express** : web application framework
 - **MongoDB** : Database
 - **Typescript** : es el lenguaje en el que fue escrito el código de esta API
 - **Mongoose** biblioteca que crea una conexión entre MongoDB y Express
 - **Nodemailer**: es utilizado para mandar notificaciones a emails
 - **EJS**: motor de plantillas para renderizar las vistas de Login, Logout, Signout, info y Chat
 - **Bcrypt** : encriptador de contraseñas
 - **Socket.io**: permite una comunicación bidireccional (front - back) en tiempo real basada en eventos
 - **Express-session**: Express-session es utilizada para crear las sessions de los usuarios.
 - **Passport & passport-local**: passport se ocupa de autenticar el registro y el ingreso de usuarios, mientras que passport-local es la estrategia de autenticación
 - **Twilio**: es utilizado para enviar notificaciones como Nodemailer, solo que mediante mensajes de Whatsapp
 - **Socket.io**: permite una comunicación bidireccional (front - back) en tiempo real basada en eventos


# **Academia**
> [CODERHOUSE](https://www.coderhouse.com/)

# **Curso**
> [Back-End Node Js](https://www.coderhouse.com/online/programacion-backend)

# **Profesor y tutor**
> <p>Comisión: 31005.</p>
> <p>Teach: Salvador Perez</p>
> <p>Tutor: Alejandro Aliaga.</p> 

# **Autor**
> <p>César Bergamasco. </p>