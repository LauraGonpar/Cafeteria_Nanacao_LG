☕ Cafetería Nanacao - API Testing
Este proyecto consiste en la creación de una suite de pruebas unitarias para la API REST de la Cafetería Nanacao. El objetivo es asegurar que el sistema de administración funcione correctamente tras presentar fallos repentinos.

🛠️ Herramientas utilizadas
Para que estas pruebas funcionen, usamos dos herramientas principales:

Jest: Es nuestro "juez". Revisa si lo que el servidor responde es lo que realmente esperábamos.
Supertest: Es nuestro "mensajero". Se encarga de llevar las peticiones (pedir café, borrar café) al servidor y traernos la respuesta.

📋 Requerimientos de la Prueba
El desafío solicita validar los siguientes puntos:

Listado de Cafés: Comprobar que al pedir la lista de cafés recibimos un código 200 y que nos entregan una lista con datos.
Eliminación Fallida: Verificar que si intentamos borrar un café que no existe, el sistema responda con un error 404.
Agregar Café: Probar que se puede añadir un nuevo café exitosamente, recibiendo un código 201.
Validación de ID: Asegurar que si intentamos actualizar un café pero los IDs no coinciden, el sistema nos de un error 400.

🚀 Cómo ejecutar el proyecto
Para correr estas pruebas en tu propia computadora, sigue estos pasos:

1. Instalación
Primero, descarga todas las "piezas" necesarias abriendo tu terminal y escribiendo:
npm install

3. Ejecutar las pruebas
Para lanzar a nuestro "juez" (Jest) y ver si todo pasa la prueba, escribe:
npm run test

Nota importante: Antes de comenzar, se recomienda leer detalladamente el código del servidor para entender cómo funciona cada ruta.
