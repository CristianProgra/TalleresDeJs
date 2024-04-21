// 7. Calcula la edad actual de una persona a partir de su fecha de nacimiento.
// Los datos a pedir son: día, mes y año de nacimiento.


// Pedimos la fecha de nacimiento
let diaNacimiento = parseInt(prompt("Ingresa el día de nacimiento:"));
let mesNacimiento = parseInt(prompt("Ingresa el mes de nacimiento (en formato numérico, por ejemplo, enero=1):"));
let anoNacimiento = parseInt(prompt("Ingresa el año de nacimiento:"));

// Obtenemos la fecha actual
let fechaActual = new Date();
let anoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
let diaActual = fechaActual.getDate();

// Calculamos la edad
var edad = anoActual - anoNacimiento;
if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
}

// Mostramos la edad
document.write("La edad actual es: " + edad + " años");
