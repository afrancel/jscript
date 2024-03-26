var espacio = "<----//---->"

//ASIGNAR VALOR A UNA VARIABLE
var a;
var b = 2;
a = b;
console.log(a)
console.log(espacio)

//MAYUSCULAS Y MINUSCULAS
var miVariable = 1; // No es lo mismo  miVariable que MiVariable por ejemplo
console.log(miVariable);
console.log(espacio)

//INCREMENTAR VALOR DE UNA VARIABLE
var librosLeidos = 105;
librosLeidos = librosLeidos + 1; //opcion 1
console.log(librosLeidos);

librosLeidos++; //opcion 2, más usada
console.log(librosLeidos);
console.log(espacio)

//OPERADOR DE ASIGNACIÓN COMPUESTA
//ASIGNACIÓN DE SUMA, RESTA, MULTIPLICACIÓN O DIVISIÓN

var a1 = 5;
console.log(a1);
a1 += 375;
console.log(a1);

var b1 = 25;
console.log(b1);
console.log(b1 *= 5);

var c = 25;
console.log(c);
console.log(c /= 5);
console.log(espacio)

//DIFERENCIAS ENTRE let y var
//No se puede definir más de una vez
var nombre = "Francel";
var nombre = "Acevedo";

let edad = "36";
//let edad = "36"; //error: Identifier 'edad' has already been declared.

console.log(nombre);
console.log(espacio)

//Ciclo for, puedes usar let dentro, pero no fuera de este

for (let i = 0; i<3; i++){ // usando let
console.log("Número incrementado" + " " + i);
}
//console.log(i); // Bloqueado --> error: Uncaught ReferenceError: i is not defined


for (var i = 0; i<3; i++){ // usando let
console.log("Número incrementado" + " " + i);
}
console.log(i); // Muestra valor de i
console.log(espacio)


//DEFINIR UNA VARIABLE QUE PIDA EL NOMBRE
/*

const ESPACIO = ' ';
let nombreA = prompt('Ingrese su nombre');
//almacenar un mensaje que diga Bienvenido a JS nombre
let mensajeBienvenida = 'Bienvenido a JS' + ESPACIO + nombreA;
alert(mensajeBienvenida)

*/