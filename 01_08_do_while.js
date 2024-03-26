///////////////////////////////////////////////////////////////////////////////////////////
/*
//usuario ingresa el monto a retirar
//cuenta 20000 pesos
//el usuario puede retirar dinero hasta 3 veces o hasta 10000 o hasta que no tiene mas plata
//mostrar el saldo luego de retirar dinero
let saldoCuenta = 20000
let cantidadRetiros = 0;
let puedeRetirar = true;
let montoRetirado=0;
do {
  let montoaRetirar = parseInt(promp*('Ingrese el monto a retirar')); 
  if (montoaRetirar + montoRetirado <= 10000){ //1000 8000
      saldoCuenta = saldoCuenta - montoaRetirar; //19000 // 11000
      montoRetirado = montoRetirado + montoaRetirar; //1000 // 9000
      alert('Su saldo es: ' + saldoCuenta );
      }else{
        alert('Se excede el saldo del retiro');
        }
        cantidadRetiros++;
        if ((cantidadRetiros > 3) || (montoRetirado >= 10000)){ //f || v
            puedeRetirar = false;
            }
    }while (puedeRetirar);
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 1 CON WHILE
var i = 0;
while (i <= 2){
  console.log("Hola probando");
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 1 CON FOR, TODO EN UNA SENTENCIA
//Y NUMEROS PAR O IMPAR CAMBIAMOS EL i = 0; ó i = 1;
for (var i = 1; i <= 15; i+=1){
  console.log("Hola probando + " + i);
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 2 CON WHILE */
/*var diasSemana = [];
console.log(diasSemana);
var numeros = 0;

while (numeros <= 10){
  diasSemana.push(numeros);
  numeros++;
}
console.log(diasSemana);*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 2 CON FOR 
var diasSemana = [];
for (var numeros = 0; numeros<=10; numeros++){
  diasSemana.push("Día" + +numeros);
  console.log(diasSemana);
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 3

var numerosAzar = [1111,2222,3333,4444,5555,6666,7777,8888,9999,1010,1111];

while(numerosAzar.length > 1){
  numerosAzar.pop();
  console.log(numerosAzar);
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 4 = Ciclos "for": contar hacia atrás
for (var i = 40; i >= 10; i--) {
  console.log("hola" + i);
}
*/


///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 5 = Ciclos "for": contar hacia atrás
var contarRegresivo = [];
for (var contando = 10; contando >=0; contando--){
  contarRegresivo.push(contando);
  console.log(contarRegresivo);
}
*/
///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 6 = Ciclos "for": Con Arrays 01
var sumandos = [2,4,6,8];
var sumaTotal = 0;

for (var i = 0; i < sumandos.length; i++){
  console.log("Iteración " + i);
  console.log(sumandos[i]);
  sumaTotal += sumandos[i];
}
console.log(sumaTotal);*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 7 = Ciclos "for": Con Arrays 02
var idiomas = ["ingles", "Español", "Portugues", "Italiano"];
for (var i = 0; i < idiomas.length; i++){
  console.log(idiomas[i].toUpperCase());
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 8 = Ciclos "for": Con Arrays 03}
function contarNumerosPar(numeros){
var totalPar = 0;

for (var i = 0; i < numeros.length; i++) {
  if(numeros[i]%2 == 0){
    totalPar++;
  }
 }
 return totalPar;
}
console.log(contarNumerosPar([2314,12316,2323434,34532,4556]));
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 9 = Ciclos "for" anidados hasta 2 niveles}

var puntos = [[2,3,5],[5,4,8],[7,8,6]];

for(var i = 0; i < puntos.length; i++){
  console.log("Arreglo")
  console.log(puntos[i]);
  var puntosVuelta = puntos[i];
    for(var j = 0; j < puntosVuelta.length; j++){
      console.log("Subarreglo")      
      console.log(puntosVuelta[j]);
  }
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*EJERCICIO 10 = Búsqueda de Perfil*/
/*06:47:12 Ciclos "do...while"*/

var perfiles = [

  {
    "nombre": "francel",
    "apellido": "acevedo",
    "teléfono": 135792468,
    "gustos": ["correr", "caminar"]
  },
  {
    "nombre": "pedro",
    "apellido": "perez",
    "teléfono": 135792468,
    "gustos": ["comer", "engordar"]
  },
    {
    "nombre": "juan",
    "apellido": "pedro",
    "teléfono": 135792468,
    "gustos": ["leer", "cantar"]
  }
]

/*console.log(perfiles[0].nombre);
console.log(perfiles[1].gustos);*/

/*function busquedaPerfil(nombre,propiedad){
  for (var i = 0; i < perfiles.length; i++){
    if (perfiles[i].nombre === nombre){
      return perfiles[i][propiedad] || "Esta propiedad no existe";
    }
  }
  return "El perfil no existe";
}
console.log(busquedaPerfil("pedrito", "apellido"));*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");

while (entrada != 'esc') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
}
*/