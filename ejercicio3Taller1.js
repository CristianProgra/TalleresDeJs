// Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
// 2 números al usuario.


//datos de entrada
let nro1 = parseFloat(prompt("Digite el primer número"));
let nro2 = parseFloat(prompt("Digite el segundo número"));

//calculos
let suma = nro1 + nro2;
let resta = nro1 - nro2;
let multiplicacion = nro1 * nro2;
let division = nro1 / nro2;

// datos de salida 
document.write(
    `La suma de los números es: ${suma} <br>
    ------------------------------------- <br>
    La resta de los números es: ${resta} <br>
    ------------------------------------- <br>
    La multiplicación de los números es: ${multiplicacion} <br>
    ------------------------------------- <br>
    La división de los números es: ${division}`
);