//Datos de prueba iniciales
let entrada_nombre = "   cARLOS aLBERTO   ";
let entrada_correo = "carlos.alberto@DOMINIO.COM";
let entrada_edad = "24";
let entrada_codigo_promo = "DESC-2026-X";

console.log(entrada_nombre);
console.log(entrada_correo);
console.log(entrada_edad);
console.log(entrada_codigo_promo);
console.log("--------------------------------------------------");

let nombre = entrada_nombre.trim().toLowerCase();
nombre = nombre.split(" ");
nombre[0] = nombre[0].slice(0, 1).toUpperCase() + nombre[0].slice(1);
nombre[1] = nombre[1].slice(0, 1).toUpperCase() + nombre[1].slice(1);
nombre = nombre.join(" ");
console.log(nombre);
