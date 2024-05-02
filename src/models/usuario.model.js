
import { text } from "express";
// Impotar las dependencias que necesitamos usar
import mongoose from "mongoose";

const schema = mongoose.Schema;

// Ahora creamos nuestro esquema de datos, que es lo que vamos a guar en nuestra base de datos
// Estructura

const usuarioSchema = new schema({
nombreCompleto:{
    type: String,
    required: true
},
telefono:{
    type: String,
    required: true
},

correo:{
    type: String,
    required: true

},
cargoAplicar:{
    type: String,
    required: true
}
}
)
// yo quiero enviar la plantilla (schema) a nuestra base de datos
// Crear nuestro modelo

const usuarioModel = mongoose.model("usuario", usuarioSchema);

// Exportamos nuestro modelo

export default usuarioModel;