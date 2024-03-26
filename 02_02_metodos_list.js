///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//MÉTODOS APRENDIDOS EN JSCRIPT

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//.RANDOM --> MATH.RANDOM(); --> NÚMERO ALEATORIO DECIMAL
console.log(Math.random());

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//.FLOOR --> MATH.FLOOR(); --> NÚMERO ALEATORIO DECIMAL CONVERTIDO A ENTERO
console.log(Math.floor(Math.random()*20));

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//.PUSH --> ELEMENTOS.PUSH(1); --> AGREGAR ELEMENTO A UN ARRAY O ARREGLO
var elementos = [1,2,3,4];
console.log(elementos);
elementos.push(5);
console.log(elementos);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//CONCATENAR ARREGLOS

///////////////////////////////////////////////////////////////////////////////////////////
//FUNCION NUMERO ALEATORIO
//Math --> El rango será entre 0 y 1, pero nunca será 1--> Es decir [0,1)

//CASO 1
//Math se suele dar en decimales - Veamos como function

console.log(Math.random());

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Math - Veamos como function
function aleatorio(){
  return Math.random();
}
console.log(aleatorio());
console.log(aleatorio());

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Length contar
function contar(texto){
  return texto.length;
}
console.log(contar("franceliiiiizzz"));

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//CASO 2
//Math se suele dar en decimales - Usémoslo como variable
var aleatorios = Math.random();
console.log(aleatorios);
console.log(aleatorios);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//CASO 3
//Math convertir a Enteros
//Aquí pedimos un aleatorio con un rango máximo, el número por el que se multiplica al final es para esto
//Floor (es un método) --> Elimina los decimales y coloca el número que seleccinó
//Ejemplo si salió el 8,0116445646, el resultado será "8"

console.log(Math.floor(Math.random()*2))
console.log(Math.floor(Math.random()*10))

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Una función ahora para hacerlo automático
function aleatorioEntero(entero){
  return console.log(Math.floor(Math.random() * entero));
}
aleatorioEntero(20);
aleatorioEntero(4);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//Ahora con un for para no colocar uno por uno
for (var i=0; i<5;i++){
  console.log(Math.floor(Math.random() * 5));
}

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

//CASO 4
//Math con numeros enteros aleatorios con Límite inferior y superior

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");