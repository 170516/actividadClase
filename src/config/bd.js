// IMPORTAMOS LAS DEPENDENCIAS QUE NECESITAMOS
import mongoose from "mongoose";

// CREAR UNA FUNCION QUE NOS CONECTE LA BASE DE DATOS
const conexionMongo = async() => {

await mongoose.connect(process.env.BD_URL,{})

// CONTROL DE ERRORES CON TRY-CATCH

try{console-log("conexion exitosa");}
catch(error){console.log("error de conexion:",error.message);}
}