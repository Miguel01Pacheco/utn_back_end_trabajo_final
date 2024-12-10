# utn_back_end_trabajo_final - API RESTful

## Descripción

Esta es una API RESTful desarrollada con **Express**, **MongoDB** y **TypeScrip** para la gestión de productos. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos, así como gestionar usuarios mediante autenticación con **JWT**.

## Requisitos

- **Node.js** (v16 o superior)
- **MongoDB** (base de datos local o conexión a MongoDB Atlas)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Miguel01Pacheco/utn_back_end_trabajo_final

2. Navega al directorio del proyecto:
   cd utn_back_end_trabajo_final

3. Instala las dependencias:
    npm install

4. Crea un archivo .env en el directorio raíz del proyecto con las siguientes variables:

    JWT_SECRET=<tu-clave-secreta>
    URI_DB=<tu-uri-de-mongodb>
    PORT= 3000

5. Rutas de la API
    Rutas de autenticación
    POST /api/users/register

    Registra un nuevo usuario.
    Body:
{
    "username": "string",
    "password": "string"
}

    POST /api/users/login

    Inicia sesión y genera un token JWT.
    Body:
{
   "username": "string",
   "password": "string"
}

    Rutas para gestionar productos
    GET /api/products

    Obtiene todos los productos.
    GET /api/products/:id

    Obtiene un producto específico por su ID.
    POST /api/products

        Crea un nuevo producto.
    Body:
{
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number"
}

    PATCH /api/products/:id

    Actualiza un producto existente por su ID.
    Body:
{
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number"
}

    DELETE /api/products/:id

    Elimina un producto por su ID.

Middleware de autenticación
Todas las rutas de productos están protegidas por autenticación JWT. Para acceder a estas rutas, debes incluir un token válido en el encabezado Authorization de la solicitud: 

    Authorization: Bearer <tu-token-jwt>

Si el token no está presente o es inválido, recibirás un error con el mensaje "Acceso denegado" o "Token inválido".

Manejo de Errores
La API devuelve los siguientes códigos de estado HTTP para indicar el resultado de las solicitudes:

200 OK: Solicitud exitosa.
201 Created: Recurso creado con éxito.
400 Bad Request: Solicitud mal formada o falta de datos.
401 Unauthorized: Token no proporcionado o inválido.
404 Not Found: Recurso no encontrado.
500 Internal Server Error: Error del servidor.


Contribuciones
Si deseas contribuir al proyecto, siéntete libre de realizar un fork y enviar un pull request