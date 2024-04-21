//Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.


// datos de entrada
let nota1 = parseFloat(prompt("Ingrese la nota 1 (del 1 al 5):"));
let nota2 = parseFloat(prompt("Ingrese la nota 2 (del 1 al 5):"));
let nota3 = parseFloat(prompt("Ingrese la nota 3 (del 1 al 5):"));

// Verificar si las notas están dentro del rango válido (1-5)
if (nota1 < 1 || nota1 > 5 || nota2 < 1 || nota2 > 5 || nota3 < 1 || nota3 > 5) {
    document.write("Error: Las notas deben estar dentro del rango del 1 al 5.");
} else {
    // Calcular el promedio de las notas
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el promedio
    document.write(`El promedio de las 3 notas es: ${promedio}`);
}