///////////////////////////////////////////////////////////////////////////////////////////
// Creo un objeto
var francel = {
    edad: 36,
    cabello: "marron",
    altura: 1.69,
    gustos: ["bici, comer, viajar, programar"]
  };
  
  console.log(francel.edad); //llamo a una propiedad del objeto
  francel.apellido = "Acevedo"; //agrego una propiedad al objeto
  francel.apellido = "AcevedoSuarez"; //modifico una propiedad al objeto
  console.log(francel.apellido); //verifico que se agregó
  
  francel.gustos.unshift("pasear con yessi "); //agrego un valor a una propiedad del objeto con el método unshift
  
  console.log(francel.gustos); //verifico que se agregó
  
  francel["Notas del curso"] = "Estas son las primeras notas del curso"; //agrego una propiedad con texto largo
  
  francel["Notas del curso"] = "Modificadas"; //modifico una propiedad con texto largo
  
  console.log(francel["Notas del curso"]); //verifico que se agregó 
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //Eliminar una propiedad
  console.log(francel);
  delete francel.cabello;
  console.log("aqui")
  console.log(francel);
  
  console.log(francel); //verificamos propiedad borrada
  
  console.log(francel.cabello); //verificamos propiedad borrada
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  // Pasar de un Switch a un objeto
  function buscarDiaSemana(dia){
    var diaSemana;
  
    switch (dia){
      case "lu":
        diaSemana = "lunes";
        break;
      case "ma":
        diaSemana = "Martes";
        break;
      case "mi":
        diaSemana = "Miercoles";
        break;
      case "ju":
        diaSemana = "Jueves";
        break;      
      case "vi":
        diaSemana = "Viernes";
        break;      
      case "sa":
        diaSemana = "Sabado";
        break;
      case "do":
        diaSemana = "Domingo";
        break;
    };
    return diaSemana;
  }
  var diaSeleccionado = buscarDiaSemana("do");
  console.log (diaSeleccionado);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  // convertir switch en objeto
  
  function searchDiaSemana (day){
    var dayWeek = {
      "lu":"lunes",
      "ma":"Martes",
      "mi":"Miércoles",
      "ju":"Jueves",
      "vi":"Viernes",
      "sa":"Sabado",
      "do":"Domingo"
    };
    return dayWeek[day];
  }
  /*function askDayUser(){
    var askUser = prompt("Indique un día");
    return askUser;  
  }
  console.log(searchDiaSemana(askDayUser()));
  */
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  // VERIFICAR SI UN OBJETO TIENE UNA propiedad
  //Método: "hasOwnProperty"
  
    if (francel.hasOwnProperty("direccion")){
      console.log("Esta informacion ya existe en el sistema");
    }else{
      console.log("Disculpe no existe la informacion indicada");
    }
  
  //en funcion ahora
  /*function verificarPropiedad(obj,propiedad){
     if (obj.hasOwnProperty(propiedad)){
       return "Propiedad: " + obj[propiedad];
     }else{
       return "No tiene esta propiedad";
     }
  }
  console.log(verificarPropiedad(francel,"direccion"));*/
  
  
  //ahora pregunto de manera dinámica cual propiedad va a consultar
  //si está, no hago nada, de lo contrario la agrego y la muestro
  
  /*function verificarPropiedad(obj,propiedadConsultada){
     var propiedadConsultada = prompt("¿qué desea verificar?");
     if (obj.hasOwnProperty(propiedadConsultada)){
       return "Esta propiedad: " + obj[propiedadConsultada] + "ya existe, no se ha agregado.";
     }else{
       alert("No tiene esta propiedad, se ha agregado");
       var nuevaPropiedad = propiedadConsultada;
       obj[nuevaPropiedad] = nuevaPropiedad;
       return "Esta propiedad: " + obj[nuevaPropiedad] + "se ha agregado."
     }
  }
  console.log(verificarPropiedad(francel,"direccion"));*/
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //VARIABLE + ARREGLO + OBJETO
  
  var ordenesPizza = [
    {
      "tamaño": "individual",
      "sabor": "napolitana",
      "precio": 212,
      "extras": ["queso", "chile"]
    },
    {
      "tamaño": "individual",
      "sabor": "napolitana",
      "precio": 212,
      "extras": ["queso", "chile"]
    }
  ];
  //LLAMARLO
  console.log(ordenesPizza[0]["precio"]);
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /* EJERCICIO COLECCIÓN DE DISCOS*/
  //Si valor = "", elimina la propiedad del tituloDelAlbum
  //Si propiedad = "canciones", pero el album != "propiedad = canciones", new() -> ["valor"]
  // Si propiedad = "canciones" && "valor" != "", new() ->"valor.push()"
  // Si "valor"  != "" && propiedad != "canciones", valor = propiedad
  // Si propiedad != existe, new(propiedad) = valor
  
  /*
  var coleccionDeDiscos = {
    7853: {
      tituloDelAlbum: "En vivo",
      artista: "Arjona",
      canciones: ["Historia"]
    },
    5439: {
      tituloDelAlbum: "Mas"
    }
  };
  
  function actualizarDiscos(discos,id,propiedad,valor){
    
      if (valor === ""){
        delete discos[id][propiedad];
      }
      if (propiedad === "canciones" && discos !== )
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  
  /*
  const auto = {marca:"chevrolet", color:"rojo"}
  alert(auto.marca);
  alert(auto.color);
  //alert(auto["color")];
  
  auto.color ="azul";
  alert(auto.color);
  
  auto.velocidades = 6;
  alert(auto.velocidades);
  
  alert(auto);
  alert(auto.marca + auto.color)*/
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  /*
  function Automovil(color, cantidadVelocidades, marca) {
      this.colorAuto = color;
      this.velocidadesAuto = cantidadVelocidades;
      this.marcaAuto = marca;	
  }
  
  const auto1 = new Automovil("Rojo",5,"Chevrolet");
  const auto2 = new Automovil("Verde",5,"Ford");
  alert(auto1.colorAuto);
  alert(auto2.marcaAuto);
  */
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  
  //OBJECT.FREEZE, CONGELA OBJETOS
  
  var participante = {
    "Nombre_Apellido": "Francel Acevedo",
    "Edad": 36
  };
  
  participante["Edad"] = 38; //modifico propiedad
  console.log(participante["Edad"]); //muestro modificación propiedad
  
  participante["Edad"] = 42; //intento modificar un elemento --> error: Uncaught TypeError: Cannot assign to read only property 'Edad' of object '#<Object>'
  participante["Altura"] = 2; //intento agregar un elemento --> error: Uncaught TypeError: Cannot assign to read only property 'Edad' of object '#<Object>'
  delete participante.edad; //intento eliminar un elemento --> error: Uncaught TypeError: Cannot assign to read only property 'Edad' of object '#<Object>'
  console.log(participante); //muestro modificación propiedad
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log("");
  
  //MÉTODOS DE UN OBJETO ES CUANDO DENTRO DE UN OBJETO HAY UNA FUNCIÓN
  // EN ES6 SERÍA ASÍ, LUEGO SUBFRE UNOS LIGEROS CAMBIOS
  
  const persona = {
    nombre: "Isabel",
    presentarse: function(){
      return `Hola, mi nombre es ${this.nombre}.`;
    }
  }
  console.log(persona.presentarse());
  
  //CON ES6
  
  const personaa = {
    nombre: "Isabel",
    presentarse(){ // indico la funcion de una vez
      return `Hola, mi nombre es ${this.nombre}.`;
    }
  }
  console.log(persona.presentarse());
  