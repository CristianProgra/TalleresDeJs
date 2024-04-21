//Realiza el cálculo del salario que debe recibir un trabajador que gana x salario 
//con un descuento del 4% por salud y 7% por pensión.

// Datos de entrada
let salario = Number(prompt("Ingrese el valor de su salario"));


//calculos
let salud = salario * 0.04;
let pension = salario * 0.07;
let salarioTotal =  salario - salud - pension

// Datos de salida
document.write("//////////////// /////////  <br>"); 
document.write("Descuento en salud " +  salud + "<br>"); 
document.write("Descuento en pension " + pension + "<br>");
document.write("El total de su salario es :" + salarioTotal);

