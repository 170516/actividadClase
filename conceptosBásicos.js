//para comentar se utiliza- Slash// 

//CONSOLE.LOG --> es la forma de enviar mensajes a la consola a mi navegador

console.log("HOLA, PSICOLOGOS Y DESARROLLADORES");

//conceptos básicos en JavaScript

// 1. Tipos de variables
// 2. Manejo del DOM
// 3. Condicionales
// 4. Ciclos


// Variables en JavaScript--> contenedores de información

// Hay 3 tipos de variables en JS que se usan de acuerdo a la necesidad.

// VAR--> Es un tipo de variable que ya no se usa (NO LA VAMOS A UTILIZAR)

// LET --> Es una variable que puede cambiar en el tiempo
//CONST--> Es una variable que no puede cambiar en el tiempo

// Tipos de datos o informacion que podemos almacenar
// el igual (=) en JS no es comparatico si no me sirve para asignar valores

//Numéricos
let numeros = 7;

// Cadena de carárteres--> Texto en programacion se conoce como --> string
// El texto siempre debe estar dentro de comillas ""
let texto = "hola, mundo"

//Booleanos --> Un dato que puede ser verdadero o falso 
let esVerdadero = true; //true --> verdad
let esFalso = false; //false--> falso

// Arreglos --> arrays en programación --> me permiten almacenar varios datos al mismo tiempo   en una misma variable.
let arregloNombres = [ "Luisa", "Emmanuel", "Paula", "lucila"];
let arregloNumeros = [4,34,23];

//OBJETOS--> "una representación de elementos de la vida real, pero en nuestro codigo"
//--> Puede contener
//--> ATRIBUTOS - caracteristicas del objeto
//-->MÉTODOS-->acciones que pueden realizar el objeto--> Son funciones

// (), [], {}
// []--> corquetes son para los arreglos
// {}--> Llaves para declarar objetos
// ()--> paréntesis nos permite ejecutar acciones

const celular = {
    color:"blanco",
    modelo:"Galaxy A7",
    ancho:350,
    alto:800,
    //El metodo --> un mensaje que indica (representación de los elementos de la vida real pero en nuestro codigo) la accion
    enviarMensajes: function (){
    // entre los corchetes al lado de unos parentesis yo establezco la accion a realizar
    console.log("Mensaje enviado");
    },
    //El método -->las acciones --> directamente una operación
    sumar: function(){
        console.log(5+4);
    }
}
//las funciones pueden o no recibir datos de entrada ej: una suma--> los datos que voy a sumar
// va a ver un procesamiento de datos y luego nos devuelve un resultado
function buscarObjeto(){
    console.log("le muestra lo que esta buscando")
}
    
//EJEMPLOS DE FUNCIONES
// FUNCIONES --> acciones que ustedes pueden tener en sus sitios web

function filtrarInformacion () {
    console.log("Memuestra solo la informacion que yo quiera ej:la depresion");
}