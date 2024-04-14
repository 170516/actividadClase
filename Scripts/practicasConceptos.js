//SIEMPRE SE DEBE VERIFICAR QUE SI ESTE CONECTADO CON EL HTML

console.log("Hola, soy la actividad de hoy 10/04/2024");



//TRAER LOS ELEMENTOS QUE NECESITAS DE SU HTML-->los que tienen id ->los elementos que traiga deben estar en una variable->debe ser constante
//document->me accede a mi HTML
//getElementById->Me trae un elemento en particular por su identificador único
//dentro de los parentesis DEBO PONER EL MISMO ID que puse en mi html
const edadInput = document.getElementById("edadInput");
console.log(edadInput);
