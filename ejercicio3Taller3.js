
//3.Ingrese varios números enteros y muestre la cantidad de números ingresados y 
//la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.

 let numero = prompt("Ingrese un número entero o escriba 'FIN' para detener:");

 let suma = 0;
 let contador = 0;

 while (numero !== "FIN") {
     suma += parseInt(numero);
     contador++;
     numero = prompt("Ingrese otro número entero o escriba 'FIN' para detener:");
 }

 document.write("Cantidad de números ingresados: " + contador + "<br>");
 document.write("Suma total de los números: " + suma + "<br>");