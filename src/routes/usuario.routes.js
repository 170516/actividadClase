// importamos dependencias
// Las rutas que nos conectan el front (esta en el servidor)- con lógica

import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

// Definir una variable que me va a definir todas las rutas

const usuarioRouter = express.Router();

// Definimos nuestras rutas especificas

usuarioRouter.get("/obtenerUsuario", getUsuario);

// Ruta para crear usuarios

usuarioRouter.post("/crearUsuario", postUsuario);

// Ruta para modificar usuarios por su id --> identificador unico
usuarioRouter.put("/modificarUsuario/:_id",putUsuario);

// Ruta para eliminar usuarios por su id

usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);

// Exportamos las rutas

export default usuarioRouter;