
//5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.

 //numero a ingresar
     
 let numero = parseInt(prompt("Ingrese un número a multiplicar de manera descendente:"));

document.write("Tabla de multiplicar del " + numero + " de manera descendente:<br>");

 operacion
    for (let i = numero; i >= 1; i--) {
     let resultado = numero * i;
     document.write(numero + " x " + i + " = " + resultado + "<br>");
 }