# Integracion API REST con Node.js

## Descripción

API REST desarrollada con Node.js y Express siguiendo la arquitectura MVC (Modelo - Vista - Controlador).

---

## Arquitectura MVC

| Componente       | Responsabilidad                                              |
|------------------|--------------------------------------------------------------|
| **Router**       | Recibe la petición HTTP y la dirige al controlador correcto  |
| **Controlador**  | Procesa la petición, llama al modelo y envía la respuesta    |
| **Modelo**       | Se comunica con la base de datos y gestiona los datos        |

---

## Códigos de respuesta HTTP

| Petición   | Código esperado  | Significado                        |
|------------|------------------|------------------------------------|
| `GET`      | `200 OK`         | Datos obtenidos correctamente      |
| `POST`     | `201 Created`    | Recurso creado exitosamente        |
| `PUT`      | `200 OK`         | Recurso actualizado correctamente  |
| `DELETE`   | `200 OK`         | Recurso eliminado correctamente    |

### Códigos de error

| Código             | Significado                              |
|--------------------|------------------------------------------|
| `400 Bad Request`  | Datos inválidos o campos obligatorios faltantes |
| `404 Not Found`    | El recurso solicitado no existe          |
| `500 Server Error` | Error interno del servidor               |

---

## Endpoints disponibles

| Método   | Ruta                    | Descripción                  |
|----------|-------------------------|------------------------------|
| `GET`    | `/api/usuarios`         | Obtener todos los usuarios   |
| `GET`    | `/api/usuarios/:id`     | Obtener un usuario por ID    |
| `POST`   | `/api/usuarios`         | Crear un nuevo usuario       |
| `PUT`    | `/api/usuarios/:id`     | Actualizar un usuario        |
| `DELETE` | `/api/usuarios/:id`     | Eliminar un usuario          |

---

## Estructura del proyecto

```
Integracion-API-REST/
├── src/
│   ├── routes/
│   │   └── user.routes.js       ← Router: recibe y dirige la petición
│   ├── controllers/
│   │   └── user.controller.js   ← Controlador: lógica y respuesta HTTP
│   ├── models/
│   │   └── user.model.js        ← Modelo: acceso a datos
│   └── app.js                   ← Configuración de Express
├── index.js                     ← Punto de entrada del servidor
└── package.json
```

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar el servidor
node index.js
```

Servidor disponible en: `http://localhost:3000`
