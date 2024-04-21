/**
 * Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
   el mes y el valor tanto como de las horas normales de trabajo y las horas extras.
 */

// datos de entrada
let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en el mes:"));
let valorHoraNormal = parseFloat(prompt("Ingrese el valor de las horas normales de trabajo:"));
let valorHoraExtra = parseFloat(prompt("Ingrese el valor de las horas extras:"));

// Calculo
let sueldoNormal = horasTrabajadas * valorHoraNormal;
let sueldoExtra = 0; // Inicializamos el sueldo por horas extras en 0
let horasExtras = 0; // Inicializamos las horas extras en 0

// proceso
if (horasTrabajadas > 184) {
    horasExtras = horasTrabajadas - 184;
    sueldoExtra = horasExtras * valorHoraExtra;
}

let sueldoMensual = sueldoNormal + sueldoExtra;

// Datos de salida
document.write(
    `El sueldo de horas trabajas es: ${sueldoNormal}<br>
    ------------------------------------------------<br>
     El sueldo horas extras es: ${sueldoExtra}<br>
     -----------------------------------------<br>
     El sueldo mensual del trabajador es: ${sueldoMensual}`
);
     


