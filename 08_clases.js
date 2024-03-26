///////////////////////////////////////////////////////////////////////////////////////////
console.log("");
//DECLAR...
//PARA CREAR MUCHOS OBJETOS, CON SUS PROPIEDADES, ESTRUCTURA, FUNCIONALIDAD
//REUTILIZAR CÓDIGOS, ESCRIBIR UNA SOLA VEZ
// class + nombre del Objeto

class Auto{// con letra mayuscula por convension
  constructor(modelo,ano){
    this.modelo = modelo;
    this.ano = ano;
  }
}
var automovil = new Auto("Renault",2022);
console.log(automovil.modelo);
console.log(automovil.ano);
console.log(automovil.modelo, automovil.ano);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");

class Producto{
    constructor(nombre, precio, stockInicial){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stockInicial)
    }

    vender(cantidad){
        if (this.verificarStock(cantidad)){
            this.stock = this.stock - cantidad;
            console.log("Se vendieron " + cantidad + " " + this.nombre);
            console.log("El stock actual es: " + this.stock);
        }else{
            console.log("No hay suficente stock, cantidad disponible para vender: " + this.stock);
        }
    }

    verificarStock(cantidad){ //tengo disponible la cantidad a vender
        if (this.stock  >= cantidad ){
            return true;
        }
    }
}

const producto1 = new Producto("Coca Cola", 120.05, 10);
const producto2 = new Producto("Galletitas Oreo", 60, 5);

producto1.vender(6);
producto2.vender(7);

///////////////////////////////////////////////////////////////////////////////////////////
console.log("");