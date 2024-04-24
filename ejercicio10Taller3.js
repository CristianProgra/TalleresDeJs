// ingresamos los datos de entrada

var clientes = prompt("Deseas realizar una compra? si/no");
var contaClientes = 0;
var totalComprasXdia = 0;


// Creamos el ciclo para el cliente

for (var x = 1; clientes != "no"; x++){
  document.write("Cliente #" + x + "<br>");
  var numPro = Number(prompt("Cuantos productos desea comprar?"));
  var totalCompraPorCliente =0;


  // creamos el ciclo para las compras
    for (var y = 1; y <= numPro; y++){
        var nombrePro = prompt("Digite el nombre del producto");
        var precioPro = Number(prompt("Ingrese el precio del producto #" + y));
        
        document.write("El precio del producto" + nombrePro + " #" + y + " es de $" + precioPro + "<br>");
        totalCompraPorCliente += precioPro;
    }
        // Datos de salida del cliente
        contaClientes++;
        totalComprasXdia += totalCompraPorCliente
        document.write("-------------------");
        document.write("Total compra : " + totalCompraPorCliente+ "<br>");
        contaClientes++;
        clientes = prompt("Deseas realizar una compra? si/no");

}

//datos de salida General de las compras
document.write("Total clientes del dia : " + contaClientes + "<br>");
document.write("total Clientes del dia : " + totalComprasXdia + "<br>");