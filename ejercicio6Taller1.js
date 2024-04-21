// //Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
// alumnos hombres y mujeres.


//datos de entrada
let totalHombres = parseFloat(prompt("Ingrese el total de alumnos hombres:"));
let totalMujeres = parseFloat(prompt("Ingrese el total de alumnas mujeres:"));

// Ctotal de alumnos
let totalAlumnos = totalHombres + totalMujeres;

// Calcular el porcentaje de hombres y mujeres
let porcentajeHombres = (totalHombres / totalAlumnos) * 100;
let porcentajeMujeres = (totalMujeres / totalAlumnos) * 100;

// datos de salida
document.write(`
Porcentaje de alumnos hombres: ${porcentajeHombres}%<br>
--------------------------------------------------------- <br>
Porcentaje de alumnas mujeres: ${porcentajeMujeres}%`
);
