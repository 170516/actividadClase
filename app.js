import express from "express";
import path from "path";
import dotenv from "dotenv";
import { spawn } from "child_process";
import conexionMongo from "./src/config/bd.js";
import usuarioRouter from "./src/routes/usuario.routes.js";

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
app.use("/api", usuarioRouter);

// Especificar que vamos a acceder a nuestro index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(rutaPublica, "index.html"));
});

// Inicializar el servidor
const servidor = app.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}`);
}
)


