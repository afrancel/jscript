///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//SINTAXIS DE DESESCTRUCTURACIÓN DE UN OBJETO

const datosEstudiante = {
  "nombre" : "francel",
  edad : 36
}

//Estandar ES5 - antes en para tomar cada propiedad como una variable
/*
const nombre = datosEstudiante.nombre;
console.log(nombre);

const edad = datosEstudiante.edad;
console.log(edad);
*/

//Estandar ES6
const {nombre,edad} = datosEstudiante;
console.log("nuevo dato ---> " + nombre);
console.log("nuevo dato ---> " + edad);

///////////////////////////////////////////////////////////////////////////////////////////
console.log(""); console.log("///////////////////////"); console.log("");
///////////////////////////////////////////////////////////////////////////////////////////

//SINTAXIS DE DESESCTRUCTURACIÓN DE UN OBJETO AVANZADO ANIDADO
const conductoresAutos = {
  "conductor_1" : {
      "nombre" : "Luis Acevedo",
      edad : 35,
      "auto" : "Ford"
  },
  "conductor_2":{
    "nombre" : "Yessica Acero",
    edad : 34,
    "auto" : "Renault Kwid"
  }
}
// Con ES5 llamaríamos así a una propiedad de un objeto ANIDADO
const driver1 = conductoresAutos.conductor_1.nombre;
const driver2 = conductoresAutos.conductor_2.auto;
console.log(driver1);
console.log(driver2);

//más conciso el código
console.log(driver1, driver2);

// Con ES6 llamaríamos así
// Si necesitamos trabajar con una propiedad de un objeto en vez de llamarlo tan largamente como el caso anterior...
// ...con ES5, solo definimos una "const" como el formato a continuación y podemos renombrar las propiedades para...
// ... usarlas a elección pero es mucho más corto. Siempre se busca siemplificar el código y hacerlo entendible.

const {conductor_1: {nombre:nombreDriver01}} = conductoresAutos;
const {conductor_2: {auto:autoMarca02}} = conductoresAutos;

// lo anterior también se puede simplificar si es la misma propiedad 
const {conductor_1: {edad:edadDriver01, nombre:autoMarca01}} = conductoresAutos;

console.log("");
console.log(nombreDriver01,autoMarca02);
console.log(edadDriver01,autoMarca01);

///////////////////////////////////////////////////////////////////////////////////////////
console.log(""); console.log("///////////////////////"); console.log("");
///////////////////////////////////////////////////////////////////////////////////////////

//SINTAXIS DE DESESCTRUCTURACIÓN DE UN OBJETO AVANZADO EN ARREGLOS

//Básico, se muestra en el orden colocado
var a;
var b;
[a,b] = [21,63]
console.log(a,b); //se muestran los dos

//puedo agregar más valores, solo tomará los del primero
[a,b] = [21,63,55665,56556,322]
console.log(a,b);

//Adelantar posiciones, cada elemento tiene su coma, una coma por cada elemento a saltar
var c;
[a,b,,,,c] = [1,2,3,4,5,6]
console.log(a,b,c);

//Intercambiar lugar, tiene prioridad siempre del "valor,
//el lado izquierdo, la "asignación", mientras que el asignado será el lado derecho.

[b,a] = [a,b]
console.log(a);
console.log(b);

console.log("");
///////////////////////////////////////////////////////////////////////////////////////////
//SINTAXIS DE DESESCTRUCTURACIÓN DE UN OBJETO OPERADOR REST

var a1;
var a2;
var a3;
[a1, a2, ...a3] = [" ford", " mazda", "chevrolet", " renault", " BMW"];
var principales = [a1, a2];

console.log("Los autos principales son " + principales + " y los adicionales serán estos " + a3);


console.log("");
///////////////////////////////////////////////////////////////////////////////////////////
//OTRO EJEMPLO CON FUNCIÓN - SINTAXIS DE DESESCTRUCTURACIÓN DE UN OBJETO OPERADOR REST


//["Suzuki", "Hyundai", "Renault", "Kia", "Fiat", "KUV100", "Changan", "GAC", "Chery", "MG"]

