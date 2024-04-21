// 3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado;

let numero = Number(prompt("Digite un numero del 1 al 7 para saber cuál es el dia de la semana 0 para salir"));

switch(numero){
    case 1:
        document.write("Es Lunes, Comienzo de semana");
        break;
    case 2:
        document.write("Es Martes, Todavia falta mucho para el fin de semana");
        break;
    case 3:
        document.write("Es Miercoles, Ombligo de la semana");
        break;
    case 4:
        document.write("Es Jueves, Ya hay moral");
        break;
    case 5:
        document.write("Es Viernes, Comienzo de fin de semana!");
        break;
    case 6:
        document.write("Es Sabado, Por fin!!!");
        break;
    case 7:
        document.write("Es Domingo, Que guayabo!");
        break;
    default:
        document.write("Elegiste salir del sistema, Hasta luego!");
         break;
}