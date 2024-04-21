
//2.	Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas 
// y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).  

 let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
 let numNotas = Number(prompt("Digite el número de notas:"));
 let sumaNotas = 0;

 for (let num = 1; num <= numNotas; num++){
     let notas = Number(prompt("Digite nota #" + num));
     sumaNotas += notas;
 }

 let promedio = sumaNotas / numNotas;

 if (promedio >= 3) {
     document.write("El estudiante " + nombreEstudiante + " aprobó con un promedio de " + promedio);
 } else {
     document.write("El estudiante " + nombreEstudiante + " reprobó con un promedio de " + promedio);
 }