// // 4. Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. 
// (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), 
// (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). 
// Mostrar en pantalla la etapa de la persona.

let edad = Number(prompt("Digite su edad por favor"));

if(edad <= 18){
    document.write("Usted es un adolente");
}else if(edad >=18 && edad <=28){
    document.write("Usted es un adulto adolecente");
}else if(edad >=29 && edad <=48){
    document.write("Usted es un adulto");
}else {
    document.write("Usted es un adulto mayor");
}