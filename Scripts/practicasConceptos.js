//1-SIEMPRE SE DEBE VERIFICAR QUE SI ESTE CONECTADO CON EL HTML

console.log("Hola, soy la actividad de hoy");


//2-TRAER LOS ELEMENTOS QUE NECESITAS DE SU HTML-->los que tienen id ->los elementos que traiga deben estar en una variable->debe ser constante

//document->me accede a mi HTML
//getElementById->Me trae un elemento en particular por su identificador único
//dentro de los parentesis DEBO PONER EL MISMO ID que puse en mi html

// 1.ELEMENTO--> llevarse directamente el evento
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

//2.ELEMENTO- es mediante eventos y crean funciones asosicadas
// const btn =document.getElemetById
// ("boton");
// console.log(btn);

const mensaje = document.getElementById("mensajeEdad");
console.log(mensaje);

// 2.ELMEMENTO
function verificarEdad(){
    // yo quiero que cada que le de clik al boron me salga un mesaje que diga "hola"
// vamos a usar condicionales
    console.log("entro a mi funcion verificar edad");

//para acceder no al elemento del html sino a su valor, se debe escribir el .value

let edad = edadInput.value;
console.log(edad);

// UTILIZAR CONDICIONALES
if (edad >= 18) {
    // Acá esto es lo que sucede si la condición es verdadera
    console.log("Eres mayor de edad");  
    mensaje.textContent = "Eres mayor de edad";
} else {
    // Acá se define lo que sucede cuando la condición es falsa
    console.log("Eres menor de edad");
    mensaje.textContent = "Eres menor de edad";
}
}
