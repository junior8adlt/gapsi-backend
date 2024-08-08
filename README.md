# Prueba Gapsi Backend
Este es el backend del proyecto desarrollado con Node.js y Koa. Proporciona una API para gestionar proveedores, con operaciones para agregar, eliminar y obtener información sobre ellos para la prueba que Gapsi asi solicito.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local
1. Clona el repositorio

2. Navega a la carpeta del proyecto 
```bash
  cd <Nombre del proyecto>
```

3. Instala las dependencias
```bash
  npm install
```

4. Ejecuta el proyecto
```bash
  npm start 
```
El servidor se ejecutará en http://localhost:3000 por defecto. Puedes cambiar el puerto configurando la variable de entorno PORT.

## Estructura del Proyecto

- **controllers/**: Contiene los controladores que manejan la lógica de la aplicación.
- **routes/**: Define las rutas y cómo se manejan las solicitudes.
- **data/**: Carpeta que contiene el archivo `bd.json`, el cual se utiliza para almacenar y gestionar los datos de los proveedores.
- **package.json**: Archivo de configuración del proyecto y dependencias.
- **package-lock.json**: Archivo generado automáticamente que bloquea las versiones de las dependencias.
- **index.js**: Punto de entrada de la aplicación que configura y arranca el servidor.

## Variables de entorno
Crea un archivo .env en la raíz del proyecto para definir las variables de entorno necesarias:

```bash
PORT=3000
```

## API Reference

#### Obtener mensaje de bienvenida

```http
  GET /welcome
```
 Devuelve un mensaje de bienvenida.

 #### Obtener la version

```http
  GET /version
```
 Devuelve la versión de la API

  #### Obtener los proveedores
 Devuelve una lista de proveedores

```http
  GET /providers
```

  Devuelve una lista de proveedores con los filtros dados.

```http
  GET /providers?page=${page}&limit=${limit}
```
 | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | **Optional**. Parametro para el manejo de la paginación |
| `limit` | `number` | **Optional**. Parametro para limitar el resultado de la lista |


 Metodo para agregar un nuevo proveedor
```http
  POST /providers
```
Estructura del body
```javascript
{
    name: 'SuKarne',
    reason: 'SUK',
    address: 'Sinaloa'
}
```
Elimina un proveedor por nombre

```http
  DELETE /providers/:name
```

## BD JSON
El archivo data/bd.json es un archivo JSON que almacena la información de los proveedores. Su estructura es la siguiente:
```javascript
{
  "providers": [
    {
      "name": "Nombre del Proveedor",
      "reason": "Razón Social",
      "address": "Dirección"
    }
  ]
}
```

## Dependencias
- Koa: Framework para el servidor.
- koa-bodyparser: Middleware para analizar cuerpos de solicitudes.
- koa-router: Middleware para manejar rutas.
- @koa/cors: Middleware para manejar CORS.

## Patrones de diseno 
- Controlador: La lógica de la aplicación se gestiona en los archivos dentro de controllers/.
- Rutas: Las rutas se definen en routes/, siguiendo el patrón de enrutamiento para separar la lógica de la API de la implementación del servidor.