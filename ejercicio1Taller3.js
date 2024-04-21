//1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.

 let limite = Number(prompt("Ingrese el número límite (N):"));
 let suma = 0;

 for (let num = 1; num <= limite; num++) {
     suma += num;
 }

 document.write("La suma de los primeros " + limite + " números naturales es: " + suma + "<br>");