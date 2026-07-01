// ============================================================
// ROUTER (app.js)
// ------------------------------------------------------------
// Este componente:
//   1. RECIBE la petición HTTP del cliente
//   2. Lee la URL y el método (GET, POST, PUT, DELETE)
//   3. DIRIGE la petición al controlador correcto
//
// También configura Express y sus middlewares.
// El router NO procesa datos ni responde al cliente,
// solo actúa como "director de tráfico".
// ============================================================

const express         = require("express");
const UserControllers = require("../controllers/userControllers");

const app = express();

// Middleware: permite leer el body en formato JSON
// (necesario para peticiones POST y PUT)
app.use(express.json());

// ── Rutas de la API ────────────────────────────────────────

// GET    /api/usuarios       → obtener todos los usuarios  → 200 OK
app.get("/api/usuarios", UserControllers.obtenerTodos);

// GET    /api/usuarios/:id   → obtener un usuario por ID   → 200 OK
app.get("/api/usuarios/:id", UserControllers.obtenerUno);

// POST   /api/usuarios       → crear un nuevo usuario      → 201 Created
app.post("/api/usuarios", UserControllers.crear);

// PUT    /api/usuarios/:id   → actualizar un usuario       → 200 OK
app.put("/api/usuarios/:id", UserControllers.actualizar);

// DELETE /api/usuarios/:id   → eliminar un usuario         → 200 OK
app.delete("/api/usuarios/:id", UserControllers.eliminar);

// Ruta raíz de bienvenida
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API REST funcionando correctamente" });
});

module.exports = app;
