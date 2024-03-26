console.log(""); console.log("///////////////////////"); console.log("");
///////////////////////////////////////////////////////////////////////////////////////////
//Plantillas literales, se debe usar `backticks`

//Con variable básica
const nombre = "Francel";
console.log(`${nombre}`)

//Con objetos
const clienteDatos = {
  nombre: "Francel",
  edad: 36 + " años",
  empleo: "cm"
}
console.log(`El cliente ${clienteDatos.nombre} de ${clienteDatos.edad} actualmente se desempeña como ${clienteDatos.empleo}`);