/**
 * digite un numero y apartir de el cree una escalera invertida del asterisco
 */

var altura = Number (prompt("Digite la altura de la piramide"));

    for (var i = altura; i >= 1; i++){
        for(var j = 1; j <= i; j++){
            document.write("*");
        }

        // Ejemplo
        document.write("<br>");
    }