///////////////////////////////////////////////////////////////////////////////////////////
//Funciones
// Objetivo: no repetir código usarlo muchas veces

function nombreFuncion(){// definición de la funcion
    console.log("Hola mundo");
  }
  nombreFuncion();
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function entrada(){
      return prompt("INGRESAR DATO");
  }
  function procesamiento(valor){
      return "LA ENTRADA ES "+valor
  }
  function salida(valor){
      alert(valor);
  }
  salida(procesamiento(entrada()));
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //Funciones: Parámetros y Argumentos
  function sumarNumeros(a,b){
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es igual a = " + suma);
  }
  sumarNumeros(1,2);
  sumarNumeros(111131,26644564);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //Funciones: Parámetros y Argumentos
  function sumarMasNumeros(a,b){
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es igual a = " + suma);
  }
  var num1 = 1231;
  var num2 = 5444564;
  
  sumarMasNumeros(num1,num2);
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function restar(f,g){
  var resta = (f-g);
  return resta;
  alert(resta);
  }
  var num1 = 10;
  var num2 = -25;
  
  restar(num1,num2)
  restar(num2,num1)
  */
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //Función: Undefined - Detalles a tomar en cuenta OJO
  
  function sumar(a,b){
    console.log(a+b);
  }
  sumar(2,6);
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //ASIGNAR UN VALOR POR DEFECTO A UN PARAMETRO, CUANDO ESTE FAL
  
  function sumas(num1, num2 = 3){
    return num1 + num2;
  }
  console.log(sumas(6));
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //Función: Asignar un valor retornado a una variable
  
  function sumando (a,b){
    return a + b;
  }
  
  var num3 = 65;
  var num4 = 554;
  var sumaTotal = sumando(num3,num4);
  console.log(sumaTotal);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function sumar(){//ejemplo básico
    numero1 = numerosIntroducir();
    numero2 = numerosIntroducir();
    sumarNumeros = numero1+numero2;
    alert(sumarNumeros);
  }
  function numerosIntroducir(){
    numero = parseInt(prompt("Ingresar un numero"));
    return numero;
  }
  sumar();
  */
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function saludar(x){
      alert("Hola " + x);
  }
  let nombre = prompt("ingrese su nombre");
  let nombre1 = prompt("ingrese su nombre");
  
  saludar(nombre);
  saludar(nombre1);
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //opción 1
  /*
  function sumarconParametros(num1,num2){
    let resultado = num1+num2;
    alert(resultado);
  }
  sumarconParametros(4,5);*/
  
  //opción 2
  /*
  function sumarConParametros(num1,num2){
    let resultado = num1+num2;
    return resultado;
  }
  let resultadoSuma = sumarConParametros(4,5);
  alert(resultadoSuma);
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  
  /*
  function numeroMax(valor1,valor2){
      if (valor1>valor2){
      return valor1
      }else{
      return valor2
      }
  }
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function numeroMax(valor1,valor2){
      if (valor1>valor2){
      return valor1
      }else{
      return valor2
      }
  }
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function impuesto (precio){
  let iva = 0;
  iva = precio*0.21;
  return iva;
  }
  
  function suma(precio, iva){
  let total = 0;
  total = precio + iva;
  return total;
  }
  
  function multiplicar (precio, cantidad){
  precio = precio*cantidad;
  return precio;
  }
  
  let precio = 300;
  let ivan = 0;
  let nombre = prompt ("Ingrese nombre");
  let cantidad = parseInt(prompt("hola " + nombre + "cuantas papas"));
  
  precio = multiplicar (precio, cantidad);
  ivan - impuesto (precio2)
  ivan = impuesto (precio);
  precio= suma (precio, ivan);
  
  alert (nombre + "la orden total es:" + precio);
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  let numeroPrestamo = parseInt(prompt("Ingrese el prestamo requerido"));
  let numeroCuota = parseInt(prompt("Ingrese la cantidad de cuotas 3/6"));
  
  function division (a,b){ return a/b; }
  function suma(a,b){ return a+b; }
  function  interes(x){
  if(numeroCuota == "3"){
  return x * 0.10;
  }else if(numeroCuota =="6"){
  return x *0.12;
  }
  else{alert("numero de cuota incorrecto")};
  }
  
  let pagoCuota = division (suma(numeroPrestamo, interes(numeroPrestamo)), numeroCuota);
  alert
  ("el pago por cuota es " + pagoCuota);
  */
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  
  //opcion1
  /*
  function calcularEdad(anoNacimiento){
    let anoActual = 2021;
    let edad = anoActual - anoNacimiento;
    alert("Su edad es " + edad);
  }
  let anoNacimiento = parseInt(prompt("Ingrese anio"));
  calcularEdad(anoNacimiento);*/
  
  //opcion2 para poder reutilizar la función
  /*
  function calcularEdad(anoNacimiento){
    let anoActual = 2021;
    let edad = anoActual - anoNacimiento;
    return edad;
  }
  
  let anoNacimiento = parseInt(prompt("Ingrese anio"));
  let edadPersona = calcularEdad(anoNacimiento);
  alert(edadPersona);
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  const precioProducto = 100;
  
  const iva = (precioProducto) => {
    return precioProducto * 0.21;
    }
  
  const dto = (precioProducto, dtoAplicado) =>{
    return precioProducto * (dtoAplicado/100)
    }
    let precioProducto = parseInt(prompt('Ingrese precio'));
    let montoaPagar = precioProducto + iva (precioProducto) - dto(precioProducto,10);
    alert("Monto a Pagar " + montoaPagar);
  */
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  /*
  function sumarNumeross(num1,num2){
    numero1 = numerosIntroducir();
    numero2 = numerosIntroducir();
    sumarNumeross = numero1+numero2;
    alert(sumarNumeross);
  }
  function numerosIntroducir(numero){
    numero = parseInt(prompt("Ingresar un numero"));
    return numero;
  }
  sumarNumeross();
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  /*
  var usuarioNuevo = prompt("¡Hola! ¿Por favor podrías indicarnos tu nombre?");
  
  //f1 pedir nombre
  function pacienteSaludar(nombre){
      var pacienteNombre = alert("Hola Bienvenido a nuestro Sistema Médico " + nombre);
      return pacienteNombre;
  }
  //f2 Calcular Edad
  function edadCalcular(anoNacimiento){
      var anoActual = new Date().getFullYear();
      var anoNacimiento = anoActual - parseInt(prompt("Calcularemos su edad, por favor ¿podría indicar su año de nacimiento?"));
      alert("Su edad actual es " + anoNacimiento + " años");
      return anoNacimiento;
  }
  
  //f3 Seleccionar tipo de consulta
  function consultaSeleccionar(tipoDeConsulta){
      var tipoDeConsulta = parseInt(prompt("Seleccione un tipo de consulta por favor. \n (Indique con el número) \n 1 = Odontología, \n 2 = Ginecología, \n 3 = Internista"));
      switch(tipoDeConsulta) {
  case 1:
        tipoDeConsulta = 100;
        nombreConsulta = "Odontología";
        break;
  case 2:
        tipoDeConsulta = 200;
        nombreConsulta = "Ginecología";
        break;
  
  case 3:
        tipoDeConsulta = 300;
        nombreConsulta = "Internista";
        break;
      }
      alert("Su consulta seleccionada es " + nombreConsulta + " y tiene un costo de $" + tipoDeConsulta);
  }
  
  //f4 Cerrar Conversación
  function pacienteDespedir(nombre){
      alert("¡Gracias por agendar su consulta " + nombre +"!");
  }
  
  pacienteSaludar(usuarioNuevo);
  edadCalcular();
  consultaSeleccionar();
  pacienteDespedir(usuarioNuevo);
  
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  var consultaSeleccionada = parseInt(prompt("Indique con el número \n 1 = Odontología, \n 2 = Ginecología, \n 3 = Internista"));
  var nombreConsulta;
  switch(consultaSeleccionada){
  case 1:
  consultaSeleccionada = 100;
  nombreConsulta = "Odontología";
  break;
  
  case 2:
  consultaSeleccionada = 200;
  nombreConsulta = "Ginecología";
  break;
  
  case 3:
  consultaSeleccionada = 300;
  nombreConsulta = "Internista";
  break;
  }
  
  function calcularIva(costoConsulta){
  var iva = costoConsulta * 0.19;
  
  /*do{
  if ((consultaSeleccionada == " ") && (consultaSeleccionada == "0")) {
  alert("** ¡ERROR! **\n\nPor favor, verifique los datos ingresados. Debe ingresar un usuario y/o Contraseña válidos");
  }
  }
  while((consultaSeleccionada == " ") && (consultaSeleccionada == "0"));
  
  var totalConsulta = consultaSeleccionada + iva;
  alert("Usted ha seleccionado la especialidad " + nombreConsulta + ". \n - Costo = " + consultaSeleccionada + " USD \n - Iva = " + iva + " USD \n - Total a pagar = " + totalConsulta + " USD \n\n ¡Por favor cancele este pago en línea!");
  return iva;
  }
  
  calcularIva(consultaSeleccionada);
  
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //2. Pide una nota (número). Muestra la calificación según la nota:
  // 0-3: Muy deficiente
  // 3-5: Insuficiente
  // 5-6: Suficiente
  // 6-7: Bien
  // 7-9: Notable
  // 9-10: Sobresaliente
  //https://tutobasico.com/basicos-javascript/
  
  /*
  function evaluarNota(valor){
  
     do{
      var valor = prompt(" Ingrese un numero");
      if (valor >= 1 && valor <= 5){
        alert("Nota deficiente ");
      }
      else if (valor > 6 && valor <= 10){
        alert("Muy buen trabajo");
      }
      else{
        alert("Introduzca un dato válido");
        
      }
    }while(valor <= 0 || valor >= 11 || !Number(valor))
  }
  evaluarNota();
  */