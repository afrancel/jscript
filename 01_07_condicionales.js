///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//DETECTAR SI ES UN NÚMERO PAR

let numero = parseInt(prompt('Ingrese un numero'));

if (((numero % 2 == 0) && (numero > 10)) || (numero == 5)){
    alert('El numero es par y es mayor que 10, o es un 5');
}else{
    alert('El numero no es par o no es mayor que 10');
}


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");


//*************************************************************************************
//1. PIDE LA EDAD Y SI ES MAYOR DE 18 AÑOS INDICA QUE YA PUEDE CONDUCIR.
//https://tutobasico.com/basicos-javascript/

//RESOLVIENDO

function calcularEdad(){

  var edad = prompt("¿Qué edad tiene usted por favor?");
  if (Number(edad)){
     if(edad >= 18){
             console.log("Usted es mayor de edad, ya puede conducir");
        }else{
             console.log("Disculpe, usted es menor de edad, no puede conducir.")
             }
    }else{
      console.log("Introduzca un número válido");
    }
}
calcularEdad();