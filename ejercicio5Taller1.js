// Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
// IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.

// datos de entrada
let producto = parseFloat(prompt("Ingrese el precio del producto:"));
let iva = parseFloat(prompt("Ingrese el iva:"));


// Calculo
let ivaAgr = (producto/100) * iva;
let totalPagar = producto + ivaAgr;

// Mostrar el sueldo mensual
document.write(
    `El precio del producto es: ${producto}<br>
    ------------------------------------------------<br>
     El iva a agregar es: ${iva} % <br>
     -----------------------------------------<br>
     total a pagar es: ${totalPagar}`
);