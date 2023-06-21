require('dotenv').config();
import app from './app';
import db from './config';

const PORT = process.env.PORT || 3003;

// Función para iniciar el servidor

// ...

let server: any;

const startServer = async () => {
  await db();
  const server = app.listen(PORT, () => console.log('server on PORT =>', PORT));
  return server;
};

export const closeServer = async () => {
  if (server) {
    await server.close();
  }
};

// Inicio del servidor solo si este archivo se ejecuta directamente
if (require.main === module) {
  startServer();
}

// Exportación del servidor
export { startServer, app };
