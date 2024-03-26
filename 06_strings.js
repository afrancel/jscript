///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Escapar comillas
var nombreYApellido = "Francel es mi \"nombre\" y Acevedo mi \"Apellido\" ";
console.log(nombreYApellido + "<br><br>");

var nombreYApellido = 'Francel es mi "nombre" y Acevedo mi "Apellido"';
console.log(nombreYApellido);


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Longitud de una cadena de caracteres

var cadena = "Francel";
var cantLetras = cadena.length;
console.log("La cadena de texto \"cadena\"tiene " + cantLetras + " caracteres.");

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Inmutabilidad de las Cadenas de Texto</h3>
//No se puede cambiar una letra de una cadena de texto una vez se ha definido.<br>
//Lo que si se puede hacer es cambiar la cadena de texto completo.

var cadena = "Francel";
console.log(cadena);

/* Esto no es permitido, pero si las otras líneas siguientes
cadena[0] = "R";
console.log(cadena[0]);
*/

cadena = "Francel ha sido modificado ahora sí";
console.log(cadena);


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Acceder al último caracter de una cadena de texto con la propiedad .lenght
var cadena = "Francel es mi nombre";
console.log(cadena[cadena.length - 1]);


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");


var cadena1 = 'Francel es mi nombre';
var cadena2 = 'En este momento estudio programación';
var cadena3 = 'Todo: ${cadena1} ${cadena2}';

console.log(cadena3);