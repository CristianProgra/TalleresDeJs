// 4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.

// ingresar numero
 let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));


 if (numero >= 1 && numero <= 30) {
     document.write("Tabla de multiplicar del " + numero + ":<br>");

     operacion
 for (let i = 1; i <= 30; i++) {
      let resultado = numero * i;
      document.write(numero + " x " + i + " = " + resultado + "<br>");
     }
 } else {
     document.write("El número ingresado está fuera del rango permitido.");
 }