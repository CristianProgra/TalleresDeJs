/**
 * 5.	Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.
 */

let valor1 = Number(prompt("Ingrese el valor del primer producto"));
let valor2 = Number(prompt("Ingrese el valor del segundo producto"));
let valor3 = Number(prompt("Ingrese el valor del tercer producto"));

let sumaProductos = valor1 + valor2+ valor3;
let cupón = sumaProductos * 0.03
let credito = sumaProductos * 0.05

let formaPago = (prompt("Elegir forma de pago: 1.efectivo 2. cupón 3. crédito "));

if (formaPago == 1){
        document.write("El total a pagar por los productos es: " + sumaProductos) ;
        document.write("Muchas gracias por su compra");

    }else if(formaPago == 2){    
        sumaProductos = sumaProductos - cupón
        document.write("El total a pagar por los productos es: " + sumaProductos ) ;
        document.write("Muchas gracias por su compra");
    
    }else if(formaPago == 3){
        sumaProductos = sumaProductos + credito
        document.write("El total a pagar por los productos es: " + sumaProductos  ) ;
        document.write("Muchas gracias por su compra");
    }else{
        prompt("Ingresa un valor correcto");
}