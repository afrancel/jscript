///////////////////////////////////////////////////////////////////////////////////////////
//Classic Array Javascript
var datosAlumno = ["francel",36];
console.log(datosAlumno);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//Nested Array Javascript | Arreglos anidados | Llamar a un elemento del array
var listasDeEstudiantes = [["Nora",18], ["Gino",20]];
console.log(listasDeEstudiantes[0]);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Multidimensional Arrays | Acceder a arreglos multidimensionales 
var tiposDeComida = [["pera","manzana","naranja"], ["papa","lechuga","repollo"], ["porotos","lentejas","garbanzos"]];
console.log(tiposDeComida[2,2]);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Acceder a los elementos de un arreglo | Llamar array / Ejemplo de Suma
var myArreglo = [20,30,50];
var variable = myArreglo[0]+myArreglo[2];
console.log(variable);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Modificar elementos de un arreglo
var jugos = [20,30,50];
console.log(jugos);
jugos[1] = 35;
console.log(jugos);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Métodos específicos, son como funciones<br>Método .push() --> Agrega un elemento al final<br> Ejemplo I
//Ejemplo I
var tiposDeComidaB = ["Pera","Manzana","Naranja"];
tiposDeComidaB.push("Kiwi");
console.log(tiposDeComidaB);

//Ejemplo II
var datosNumeros = [1,2,3];
console.log(datosNumeros);
datosNumeros.push(4);
console.log (datosNumeros);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Método .pop() --> Elimina un elemento al final<br> Ejemplo I
var estaciones = ["Invierno","Otoño","Primavera","Verano"];
console.log(estaciones);

estaciones.pop();
console.log(estaciones);

var metodoPop = estaciones.pop();  //puedo llamar solo al ult. elemento removido
console.log(metodoPop);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Método .shift() --> Elimina un elemento al principio
var marcasDeCarro = ["Ford","Toyota","Mitsubishi"];
marcasDeCarro.shift();
console.log(marcasDeCarro);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Método .unshift() --> Agrega un elemento al principio y se debe indicar () cual será
var marcasDeCarro = ["Ford","Toyota","Mitsubishi"];
marcasDeCarro.unshift("Alpha Romeo");
console.log(marcasDeCarro);


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//CONCATE, MÉTODO PARA UNIR ARREGLOS

var textosA = ["francel", 36, "UCSAR"];
var textosB = ["Acevedo"];

console.log(textosA.concat(textosB));


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
/*
const nombres = []; //array vacio
let cantidadMaxima = 5;

for (let indice = 1; indice <= cantidadMaxima; indice++){
  let nombre = prompt("Ingrese su nombre");
  nombres.push(nombre);
  alert(nombres.length);
}

let resultadoSuma = sumarConParametros(4,5);
alert(resultadoSuma);

*/ 
/*
do{
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
  }while(listaNombres.length != cantidad)

  //Concatenamos un nuevo array de dos elementos
  const nuevaLista = listaNombres.concat(["ANA","EMA"]);

  //Salida con salto de línea usando join
  alert(nuevaLista.join("\n"));
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

