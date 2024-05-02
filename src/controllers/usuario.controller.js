// Importamos dependencias que es lo que necesitamos para el funcionamiento del código
import usuarioModel from "../models/usuario.model.js";

// Peticiones   
// GET-Me muestra mis usuarios
// POST -> crear usuarios 
// PUT --> me modifica mis usuarios
// DELETE --> me elimina mis usuarios

// PRUEBA INICIAL
// Logica para mostrar usuarios
export const getUsuario = async(req, res) => { return res.send("Funciona la peticion GET"); 
}

// Logica para crear usuarios
export const postUsuario = async(req, res) => { return res.send("Funciona la peticion POST"); 
}

// Logica para modificar usuarios
export const putUsuario = async(req, res) => { return res.send("Funciona la peticion PUT"); 
}

// Logica para eliminar usuarios
export const deleteUsuario = async(req, res) => { return res.send("Funciona la peticion DELETE"); 
}