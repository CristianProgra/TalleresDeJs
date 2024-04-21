/**
 * Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.

 */

let nota1 = Number(prompt("Ingrese su nota 1"));
let nota2 = Number(prompt("Ingrese su nota 2"));
let nota3 = Number(prompt("Ingrese su nota 3"));

let sumnotas = nota1 + nota2 + nota3
let promedio = sumnotas /3;

if (promedio <= 2){
    document.write("Su promedio fue malo. Su promedio fue de " + promedio);
    
}else if(promedio >= 2 && promedio < 3){
    document.write("Debe recuperar. Su promedio fue de " + promedio);    

}else if(promedio >= 3 && promedio < 4){
    document.write("Su promedio fue Regular. Su promedio fue de " + promedio);  

}else if(promedio>=4 && promedio <=4.4){
    document.write("Sacaste buen promedio. Su promedio fue de " + promedio);

}else if(promedio >=4.5 ){
    document.write("Su promedio fue muy Bueno. Su promedio fue de " + promedio);      
}