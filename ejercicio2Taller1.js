/**
 * Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
base y altura se deben pedir al usuario que las digite.
 */

// datos de entrada
let base = parseFloat(prompt("Ingrese la longitud de la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

// Calculo
let area = (base * altura) / 2;

// datos de salida
document.write(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
