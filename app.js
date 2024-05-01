import express from "express";
import path from "path";
import dotenv from "dotenv";
import { spawn } from "child_process";
import conexionMongo from "./src/config/bd.js";

// Configurar el servidor
const app = express();
const puerto = 9000;

// Configurar las variables de entorno
dotenv.config();

// Configurar la conexión a la base de datos
conexionMongo();

// Establecer la conexión con el front-end
const rutaPublica = path.join(process.cwd(), "public");
app.use(express.static(rutaPublica));
app.use(express.json());

// Especificar que vamos a acceder a nuestro index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(rutaPublica, "index.html"));
});

// Inicializar el servidor
const servidor = app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
  
  // Abrir automáticamente index.html en la consola
  const comando = process.platform === "win32" ? "start" : "xdg-open";
  spawn(comando, ["http://localhost :" + puerto], { shell: true });
});

// Manejo de errores
servidor.on("error", (error) => {
  console.error("Error al iniciar el servidor:", error);
});

