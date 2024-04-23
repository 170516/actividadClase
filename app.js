//1. IMPORTAR LAS DEPENDENCIAS QUE VAMOS A USAR
import express from "express";
import path from "path";
import dotenv from "dotenv";
import conexionMongo from "./src/config/bd.js";


//2. CONFIGURAR NUESTRO SERVIDOR
const app = express();
const puerto = 9000;

// const puerto = 3000;6000-9000

// 2.1 CONFIGURAR LAS VARIABLES DE ENTORNO

dotenv.config();

// 2.2 CONFIGURAR CONEXION BASE DE DATOS

conexionMongo();

// 3. ESTABLECER LA CONECCION CON NUESTRO FRONT
const rutaPublica = path.join(process.cwd(),"public");
app.use(express.static(rutaPublica));
app.use(express.json())

// Especificamos que vamos acceder a nuestro index.html
app.get("/",(req,res) =>{
    res.sendFile(pant.join(rutaPublica,"index.html"))
});

// 4.INICIALIZAMOS EL SERVIDOR

app.listen(puerto, ()=>{
    console.log (`holaaaa soy ana el  servidos esta escuchando en http://localhost:${puerto}`);
});