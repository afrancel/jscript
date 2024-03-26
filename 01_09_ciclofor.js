///////////////////////////////////////////////////////////////////////////////////////////

//quiero ejutar 10 veces un ciclo pero solo mostrar los numeros pares
/*for(let i=1; i<=5; i++){
  if (i == 3){
    continue;
  }
  alert(i);
  }
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*const ingresarNumero = parseInt(prompt('Ingrese un numero')); //2
for(let i=1; i <=10; i++){
  let resultado = ingresarNumero * i; // 2 * 1 -- 2 * 2
  alert(ingresarNumero + ' X ' + i + '=' + resultado);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let i = 0; i < cantidad; i++) {
    console.log(texto);
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let i = 0; i < lados; i++) {
    if (i > 3) {
        break;
    }
    alert("lado");
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += "- " + prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);
*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
function redondeo(valor){
    return Math.round(valor)
}
for (let i = 0; i < 5; i++) {
    let entrada = prompt("INGRESAR NUMERO");
    alert(redondeo(entrada));
}*/

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

/*
function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let i= 0; i < 5; i++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}
*/