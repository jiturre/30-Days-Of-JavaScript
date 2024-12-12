// this is your main.js script
let desafio = "30 Days of JavaScript";
console.log(desafio);
console.log("La longitud de la variable desafio es " + desafio.length);
let desafioMayusculas = desafio.toUpperCase();
console.log("La variable desafio en Mayúsculas es " + desafioMayusculas);
let desafioMinusculas = desafio.toLowerCase();
console.log("La variable desafio en Minúsculas es " + desafioMinusculas);
let desafioExtrayendo = desafio.substring(0, 2);
console.log(
  "Extrayendo la primer palabra de la variable desafio es " + desafioExtrayendo
);
let extrayendoDesafio = desafio.substring(3);
console.log("Extrayendo el 30 y espacio de desafio " + extrayendoDesafio);
let contienePalabraScript = desafio.includes("Script");
console.log(
  "La variable que contiene estos datos " +
    desafio +
    "contiene la palabra 'Script'? : " +
    contienePalabraScript
);
let dividiendoEnCadena = desafio.split();
console.log("Dividendo en cadena ", dividiendoEnCadena);
let dividendoEnCadenaEspacio = desafio.split(" ");
console.log(
  "Diviendo cadena en matriz usando como delimitador el espacio ",
  dividendoEnCadenaEspacio
);
let ejercicio11 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let arrayConEmpresas = ejercicio11.split(",");
console.log("Array de empresas separadas por el espacio. ", arrayConEmpresas);
let ejercicio12 = desafio.replace("Javascript", "Python");
console.log("Output Ejercicio 12 : ", ejercicio12);
let ejercicio13 = desafio.charAt(15);
console.log("Output Ejercicio 13 : ", ejercicio13);
let ejercicio14 = desafio.charCodeAt(11);
console.log("Output Ejercicio 14 : ", ejercicio14);
let ejercicio15 = desafio.indexOf("a");
console.log("Output Ejercicio 15 : ", ejercicio15);
let ejercicio16 = desafio.lastIndexOf("a");
console.log("Output Ejercicio 16 : ", ejercicio16);
let oracion =
  "No puedes terminar una oración con porque porque porque es una conjunción";
let ejercicio17 = oracion.indexOf("porque");
console.log("Output Ejercicio 17 : ", ejercicio17);
let ejercicio18 = oracion.lastIndexOf("porque");
console.log("Output Ejercicio 18 : ", ejercicio18);
let ejercicio19 = oracion.search("porque");
console.log("Output Ejercicio 19 : ", ejercicio19);
let desafioConEspacios = " 30 Days Of JavaScript ";
let ejercicio20 = desafioConEspacios.trim();
console.log("Output Ejercicio 20 : ", ejercicio20);


