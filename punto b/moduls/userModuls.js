// ============================================================
// MODELO (userModuls.js)
// ------------------------------------------------------------
// Este componente se comunica con la base de datos.
// Aquí se definen los datos y todas las operaciones sobre ellos:
// crear, leer, actualizar y eliminar (CRUD).
//
// En este ejemplo usamos un arreglo en memoria para simular
// una base de datos real (MySQL, MongoDB, PostgreSQL, etc.)
// ============================================================

// Simulamos la "base de datos" con un arreglo de usuarios
let usuarios = [
  { id: 1, nombre: "Ana García",  email: "ana@email.com"   },
  { id: 2, nombre: "Luis Pérez",  email: "luis@email.com"  },
  { id: 3, nombre: "María López", email: "maria@email.com" },
];

// Contador para asignar IDs únicos a nuevos usuarios
let siguienteId = 4;

const UserModuls = {

  // Retorna todos los usuarios de la "base de datos"
  obtenerTodos() {
    return usuarios;
  },

  // Busca y retorna un usuario por su ID
  obtenerPorId(id) {
    return usuarios.find((u) => u.id === parseInt(id));
  },

  // Crea un nuevo usuario y lo guarda en la "base de datos"
  crear(nombre, email) {
    const nuevoUsuario = { id: siguienteId++, nombre, email };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  },

  // Actualiza los datos de un usuario existente
  actualizar(id, nombre, email) {
    const usuario = usuarios.find((u) => u.id === parseInt(id));
    if (!usuario) return null;
    usuario.nombre = nombre;
    usuario.email  = email;
    return usuario;
  },

  // Elimina un usuario de la "base de datos"
  eliminar(id) {
    const index = usuarios.findIndex((u) => u.id === parseInt(id));
    if (index === -1) return false;
    usuarios.splice(index, 1);
    return true;
  },
};

module.exports = UserModuls;
