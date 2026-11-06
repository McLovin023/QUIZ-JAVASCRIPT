//Datos de prueba iniciales
let entrada_nombre = "   cARLOS aLBERTO   ";
let entrada_correo = "carlos.alberto@DOMINIO.COM";
let entrada_edad = "24";
let entrada_codigo_promo = "DESC-2026-X";

//limpieza de datos
let nombre = entrada_nombre.trim().toLowerCase();
nombre = nombre.split(" ");
nombre[0] = nombre[0].slice(0, 1).toUpperCase() + nombre[0].slice(1);
nombre[1] = nombre[1].slice(0, 1).toUpperCase() + nombre[1].slice(1);
nombre = nombre.join(" ");

//validacion de correo
//
let correo = entrada_correo.toLowerCase();
let correo_valido = correo ;
correo_valido.includes("@");
correo_valido.includes(".com");


//validacion de codigo
let codigo_promo = entrada_codigo_promo.startsWith("DESC");
let codigo_promo2 = entrada_codigo_promo.slice(5, 9);

//convertir cde string a numeros enteros
let año_promo = Number(codigo_promo2);
let edad_usuario = Number(entrada_edad);

//mayor o igual a 18 años 
let mayor_de_edad = edad_usuario >= 18;

//año aproximado
let año_nacimento = 2026 - edad_usuario;

//asignacion de puntos
let puntos = (mayor_de_edad && año_promo == 2026) ? 10.5 : 0.0; 


//salida esperada
console.log( `
    ==================================================
        FICHA DE USUARIO PROCESADA
    ==================================================
    Nombre Formateado    : ${nombre}
    Correo Validado      : ${correo}
    ¿Correo Válido?      : ${correo_valido}
    Edad Registrada      : ${edad_usuario} (tipo:int)
    ¿Mayor de Edad?      : ${mayor_de_edad}
    Año Estimado Nto.    : ${año_nacimento}
    Código Cupón Válido  : ${codigo_promo}
    Puntos Asignados     : ${puntos}
`);