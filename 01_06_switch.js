///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//CONTAR CARTAS

var conteo = 0;

function contarCartas(carta){
var decision;

switch(carta){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    conteo++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  	conteo--;
  	break;
}

if (conteo > 0){
  decision = "Apuesta";
  } else {
    decision = "No apuestes";
    }
  return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(4));
console.log(contarCartas(5));
console.log(contarCartas(10));
console.log(contarCartas("J"));
console.log(contarCartas("Q"));
console.log(contarCartas("K"));
console.log(contarCartas("A"));


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");


//Switch con funtion doble
/*
function usuarioPreguntar(){
  var consultaUsuario = parseInt(prompt("Inserte un numero"));
  return consultaUsuario;
}

function calcularValor(valor){
  var respuesta;
  switch (valor){
      case 1: respuesta = document.write("Respuesta es 1");
      break;
      case 2: respuesta = document.write("Respuesta es 2");
      break;
      default: respuesta = document.write("No acorde al numero");
    }
    return respuesta;
    }
    
    var valorRespuesta =calcularValor(usuarioPreguntar());

*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//DETECTAR A PARTIR DE UN NÚMERO, EL RESTO, COCIENTE Y SI ES PAR O IMPAR
/*
let numero = prompt('Ingrese un numero')
let resto = numero % 2; 
let cociente = numero / 2;
alert('Resto' + resto);
alert('cociente' + cociente);
switch (resto) {
  case 0:
  alert('El numero es par');
  break;
  default:
  alert('El numero es impar');
  break;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//SOLICITAR AL USUARIO REALIZAR UNA OPERACIÓN
//operaciones validas son "dir", "cd", "clear"
//sino ingreso ninugna operacion, mostrar un mensaje que diga que la operacion no existe
let operacion = promp*('Ingrese la operacion a realizar');
switch (operacion) {
  case "DIR":
  alert('Operacion ' + operacion);
  break;
  case "CD":
  alert('Operacionnnnnn ' + operacion);
  break;
  case "CLEAR":
  alert('Operacion ' + operacion);
  break;
  default:
  alert("La operacion que ingreso no existe");
  break;
}