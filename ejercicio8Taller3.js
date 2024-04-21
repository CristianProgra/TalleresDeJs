    //8.	Digite un número (altura) y a partir de él cree una escalera de asteriscos o 
    //el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5.

    let altura = parseInt(prompt("Ingrese la altura de la escalera:"));
    let caracter = "*";


    if (altura > 0) {
    for (let i = 1; i <= altura; i++) {
        // Imprimir el carácter repetido i veces en cada fila
        document.write(caracter.repeat(i) + "<br>");
    }
    } else {
    document.write("La altura ingresada no es válida.");
    }