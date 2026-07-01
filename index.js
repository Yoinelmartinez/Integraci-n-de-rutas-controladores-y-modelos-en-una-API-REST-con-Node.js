// ============================================================
// INDEX.JS — Punto de entrada del servidor
// ------------------------------------------------------------
// Arranca el servidor y lo expone en la IP real de la máquina
// para que pueda probarse desde Thunder Client con la IP,
// no solo con localhost.
// ============================================================

const app = require("./punto b/routes/app");
const os  = require("os");

const PUERTO = 3000;

// Obtiene la IP local real de la máquina
function obtenerIP() {
  const interfaces = os.networkInterfaces();
  for (const nombre of Object.keys(interfaces)) {
    for (const iface of interfaces[nombre]) {
      // Filtra IPv4 y descarta la dirección de loopback (127.0.0.1)
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const IP = obtenerIP();

// Escucha en 0.0.0.0 para aceptar conexiones desde cualquier interfaz
app.listen(PUERTO, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://${IP}:${PUERTO}`);
  console.log("");
  console.log("Endpoints disponibles:");
  console.log(`  GET    http://${IP}:${PUERTO}/api/usuarios`);
  console.log(`  GET    http://${IP}:${PUERTO}/api/usuarios/:id`);
  console.log(`  POST   http://${IP}:${PUERTO}/api/usuarios`);
  console.log(`  PUT    http://${IP}:${PUERTO}/api/usuarios/:id`);
  console.log(`  DELETE http://${IP}:${PUERTO}/api/usuarios/:id`);
});
