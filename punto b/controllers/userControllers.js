// ============================================================
// CONTROLADOR (userControllers.js)
// ------------------------------------------------------------
// Este componente:
//   1. Recibe la petición que viene del Router (app.js)
//   2. Llama al Modelo (userModuls) para operar sobre los datos
//   3. Envía la respuesta HTTP final al cliente con su código:
//
//   GET    → 200 OK       (datos obtenidos correctamente)
//   POST   → 201 Created  (recurso creado exitosamente)
//   PUT    → 200 OK       (recurso actualizado correctamente)
//   DELETE → 200 OK       (recurso eliminado correctamente)
//   Errores→ 400 / 404    (datos inválidos / no encontrado)
// ============================================================

const UserModuls = require("../moduls/userModuls");

const UserControllers = {

  // ── GET /api/usuarios ──────────────────────────────────────
  // Obtiene todos los usuarios → responde con 200 OK
  obtenerTodos(req, res) {
    const usuarios = UserModuls.obtenerTodos();
    res.status(200).json({
      ok: true,
      datos: usuarios,
    });
  },

  // ── GET /api/usuarios/:id ──────────────────────────────────
  // Obtiene un usuario por ID → responde con 200 OK o 404
  obtenerUno(req, res) {
    const usuario = UserModuls.obtenerPorId(req.params.id);

    if (!usuario) {
      // 404 Not Found: el usuario no existe
      return res.status(404).json({
        ok: false,
        mensaje: "Usuario no encontrado",
      });
    }

    // 200 OK: datos obtenidos correctamente
    res.status(200).json({ ok: true, datos: usuario });
  },

  // ── POST /api/usuarios ─────────────────────────────────────
  // Crea un nuevo usuario → responde con 201 Created
  crear(req, res) {
    const { nombre, email } = req.body;

    // 400 Bad Request: faltan campos obligatorios
    if (!nombre || !email) {
      return res.status(400).json({
        ok: false,
        mensaje: "Los campos nombre y email son obligatorios",
      });
    }

    const nuevoUsuario = UserModuls.crear(nombre, email);

    // 201 Created: recurso creado exitosamente
    res.status(201).json({
      ok: true,
      mensaje: "Usuario creado exitosamente",
      datos: nuevoUsuario,
    });
  },

  // ── PUT /api/usuarios/:id ──────────────────────────────────
  // Actualiza un usuario → responde con 200 OK o 404
  actualizar(req, res) {
    const { nombre, email } = req.body;

    // 400 Bad Request: faltan campos obligatorios
    if (!nombre || !email) {
      return res.status(400).json({
        ok: false,
        mensaje: "Los campos nombre y email son obligatorios",
      });
    }

    const usuarioActualizado = UserModuls.actualizar(req.params.id, nombre, email);

    if (!usuarioActualizado) {
      // 404 Not Found: el usuario no existe
      return res.status(404).json({
        ok: false,
        mensaje: "Usuario no encontrado",
      });
    }

    // 200 OK: recurso actualizado correctamente
    res.status(200).json({
      ok: true,
      mensaje: "Usuario actualizado correctamente",
      datos: usuarioActualizado,
    });
  },

  // ── DELETE /api/usuarios/:id ───────────────────────────────
  // Elimina un usuario → responde con 200 OK o 404
  eliminar(req, res) {
    const eliminado = UserModuls.eliminar(req.params.id);

    if (!eliminado) {
      // 404 Not Found: el usuario no existe
      return res.status(404).json({
        ok: false,
        mensaje: "Usuario no encontrado",
      });
    }

    // 200 OK: recurso eliminado correctamente
    res.status(200).json({
      ok: true,
      mensaje: "Usuario eliminado correctamente",
    });
  },
};

module.exports = UserControllers;
