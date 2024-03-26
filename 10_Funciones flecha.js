///////////////////////////////////////////////////////////////////////////////////////////
//FUNCIONES FLECHA

function sumar (x){// funcion normal
    return x + 3;
  }
  console.log(sumar(10));
  
  console.log(""); //vamos a transformar ***********************************
  //Asignamos a una constante la funcion
  //Desaparece la palaba function y aparece el símbolo de funcion flecha "=>"
  // Desaparece el return y las llaves
  
  const NUEVO = (x) => x + 3; // Así queda
  console.log(NUEVO(11)); // Imprimimos
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //FUNCIONES FLECHA OTRO EJEMPLO PERO CON DOS VALORES
  
  const NUMEROS = function (x,y){// funcion normal
    return x.concat(y);
  }
  //...convirtiendo en flecha
  const NUMEROS_NUEVO = (x,y) => x.concat(y);
  
  console.log("");
  console.log(NUMEROS_NUEVO([2313,31121,11213],[4554,56,64]));
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  //COTIZAR CAMBIO DOLAR VS PESO
  
  /*
  const COTIZACION_DOLAR = 880;
  const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR; 
  const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
  let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
  let valor = prompt("VALOR");
  switch (seleccion) {
      case "1":
          alert(cotizarPesos(valor));
          alert("Cotización en $ realizada");
          break;
      case "2":
          alert(cotizarDolar(valor));
          alert("Cotización en clp realizada");
          break;
      default:
          break;
  }
  */
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //OPERADOR REST
  //CONTAR NUMEROS INTERNOS
  
  function cont(...args){
    console.log(args.length);
  }
  cont(1212,12,12,12,12,121);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //OPERADOR REST AHORA A FLECHA
  //CONTAR NUMEROS INTERNOS
  
  const CONTAR = (...args) => console.log(args.length);
  cont(1212,12,12,222,12,12,121);
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  //TRES FORMAS DE ESCRIBIR UNA FUNCIÓN FLECHA
  
  //Función -tradicional- para crear objetos
  function crearPersona(nombre, edad, idioma){
      return {
        nombre: nombre,
        edad: edad,
        idioma: idioma,
      };
  };
  console.log(crearPersona("Francel",35,"Español"));
  
  //Función -flecha- para crear objetos
  const CREARPERSONA = (nombre,edad,idioma) => {
    return{
      nombre: nombre,
      edad: edad,
      idioma: idioma,
    };
  };
  console.log(CREARPERSONA("Luis",31,"Español"));
  
  //Función flecha para crear objetos en una sola línea
  const crearUsuario = (usuario,rut,nacionalidad) => ({usuario, rut, nacionalidad});
  console.log(crearUsuario("yessica",256281910,"Venezolana"));
  
  
  //Objeto con una función interna
  //Al ser una función interna, se conoce como método
  
  const nuevoRegistro = {
    nombrea: "Francel",
    saludar(){ //saludar: function(){ --> con standar CS6
      console.log(`Hola, mi nombre es ${this.nombrea}`);
    }
  };
  nuevoRegistro.saludar();