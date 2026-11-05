# QUIZ-JAVASCRIPT

Reto Práctico: Validador y Formateador de Usuarios
Duración estimada: 60 minutos
Temas evaluados: Variables, Data Types, Operadores (aritméticos, lógicos y relacionales) y String Methods.

1. Contexto
Un sistema web recibe información de nuevos usuarios mediante un formulario externo sin validación previa. Los datos llegan "sucios": con espacios accidentales, formatos mezclados de mayúsculas/minúsculas y tipos de datos incorrectos.

Tu misión es crear un script que procese las entradas, aplique validaciones de formato, realice conversiones de tipo, calcule estadísticas de registro y genere una ficha estructurada por consola.

2. Datos de Entrada (Mock Data)
Usa las siguientes variables de prueba para inicializar tu programa:

# Datos de prueba iniciales
entrada_nombre = "   cARLOS aLBERTO   "
entrada_correo = "carlos.alberto@DOMINIO.COM"
entrada_edad = "24"
entrada_codigo_promo = "DESC-2026-X"
(Nota: Tu solución debe funcionar tanto con estos datos como si se cambian los valores por otros equivalentes).

3. Requerimientos del Programa
A. Limpieza y Métodos de Cadenas (String Methods)
Nombre completo:
Elimina los espacios en blanco a los extremos.
Conviértelo a formato título (primera letra de cada palabra en mayúscula, el resto en minúscula: "Carlos Alberto").
Correo electrónico:
Conviértelo en su totalidad a minúsculas ("carlos.alberto@dominio.com").
Valida si contiene el carácter @ y si termina con la extensión ".com".
Código promocional:
Valida si inicia con el prefijo "DESC-".
Extrae el fragmento correspondiente al año (los cuatro dígitos entre guiones: "2026").
B. Tipos de Datos y Conversión (Data Types & Casting)
Convierte la variable entrada_edad (tipo texto) a un número entero (integer).
Convierte el año extraído del cupón promocional a un número entero (integer).
C. Operadores (Aritméticos, Relacionales y Lógicos)
Mayoría de edad: Evalúa si la edad es mayor o igual a 18 (resultado booleano: True / False).
Validez del correo: Evalúa que el correo contenga @ Y termine en ".com" (resultado booleano).
Cálculo de nacimiento: Calcula el año aproximado de nacimiento del usuario:
$$\text{año_nacimiento} = 2026 - \text{edad}$$
Asignación de puntos promocionales:
Si el usuario es mayor o igual a 18 años Y el año del cupón es igual a 2026, se le otorgan 10.5 puntos (tipo flotante / decimal).
En caso contrario, se le asignan 0.0 puntos.
4. Salida Esperada en Consola
El programa debe imprimir un reporte estructurado y legible con el siguiente formato:







==================================================
        FICHA DE USUARIO PROCESADA
==================================================
Nombre Formateado    : Carlos Alberto
Correo Validado      : carlos.alberto@dominio.com
¿Correo Válido?      : True
Edad Registrada      : 24 (Tipo: int)
¿Mayor de Edad?      : True
Año Estimado Nto.    : 2002
Código Cupón Válido  : True
Puntos Asignados     : 10.5
==================================================
 
