//Ejercicio #1
//Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra, 
//si son menos de tres camisas un descuento del 10%

/*let camisas=Number(prompt('Ingrese cantidad de camisas a pagar: '));
let ValorCamisas=Number(prompt('Ingrese el valor unitario de las camisas: '));
let valorCompra= 0;
valorCompra=camisas*ValorCamisas;

if(camisas>=3){
    valorCompra *= 0.20;
}else if(camisas < 3){
    valorCompra *= 0.10;
}else{
    alert(`No existe promoción para la compra`);
}
alert('El valor de su compra con descuento es: ' +valorCompra);*/


/*Ejercicio #2
Una empresa quiere hacer una compra de varias piezas de la misma clase a una fábrica de refacciones. La empresa, dependiendo del monto de la compra,
decidirá que hacer para pagar al fabricante. Si el monto total de la compra excede de $500.000 la empresa tendrá la capacidad de invertir de su propio dinero el 55% del monto de 
la compra, pedir prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante. Si el monto total de la compra no excede de $500.000 la empresa tendrá capacidad 
de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le 
pague a crédito. 
Es necesario mostrar por pantalla, según el valor de la compra, cómo se pago, cuánto se saco de la empresa, cuánto prestó el fabricante y si es el caso cuánto prestó al banco.*/

/*let inversionPropia, prestamoBanco, creditoFabricante, totalIntereses;
let montoCompra = Number(prompt("Ingrese el monto total de la compra: "));


    switch (true) {
        case (montoCompra > 500000):
            // Monto de compra superior a $500,000
            inversionPropia = montoCompra * 0.55;
            prestamoBanco = montoCompra * 0.30;
            creditoFabricante = montoCompra - (inversionPropia + prestamoBanco);
            totalIntereses = creditoFabricante * 0.20;
            alert(`Para una compra de $${montoCompra.toFixed(2)}:
            - Se invierte el 55% de la empresa: $${inversionPropia.toFixed(2)}
            - Se pide prestado al banco el 30%: $${prestamoBanco.toFixed(2)}
            - Se solicita un crédito al fabricante para el restante: $${creditoFabricante.toFixed(2)}
            - El fabricante cobra un 20% de intereses sobre el crédito: $${totalIntereses.toFixed(2)}
            - Total a pagar al fabricante: $${(creditoFabricante + totalIntereses).toFixed(2)}`);
            break;

        case (montoCompra <= 500000):
            // Monto de compra igual o menor a $500,000
            inversionPropia = montoCompra * 0.70;
            creditoFabricante = montoCompra - inversionPropia;
            totalIntereses = creditoFabricante * 0.20;

            // Mostrar los resultados
            alert(`Para una compra de $${montoCompra.toFixed(2)}:
            - Se invierte el 70% de la empresa: $${inversionPropia.toFixed(2)}
            - Se solicita un crédito al fabricante para el restante: $${creditoFabricante.toFixed(2)}
            - El fabricante cobra un 20% de intereses sobre el crédito: $${totalIntereses.toFixed(2)}
            - Total a pagar al fabricante: $${(creditoFabricante + totalIntereses).toFixed(2)}`);
            break;

        default:
            alert("Error en el cálculo. Verifique el monto ingresado.");
            break;
    }*/


/*Ejercicio#3
Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
Si trabaja 40 horas o menos se le paga $16 por hora
Si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra.*/

/*let horas=Number(prompt('Ingrese horas trabajadas semanalmente: '));
let salario;
const tarifaNormal = 16;  // Tarifa por hora hasta 40 horas
const tarifaExtra = 20;  // Tarifa por hora extra
if (horas <= 40) {
    salario = horas * tarifaNormal;
} else {
    let horasExtra = horas - 40;
    salario = (40 * tarifaNormal) + (horasExtra * tarifaExtra);
}

alert(`El salario semanal del obrero es: $${salario.toFixed(2)}`);*/

/*Ejercicio#4
Una persona enferma, que pesa 70kg, se encuentra en reposo y desea saber cuántas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. 
Las actividades que tiene permitido realizar son únicamente dormir y estar sentado en reposo.
Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto.*/


/*let actividad = prompt('Ingrese la actividad realizada (dormir/reposo): ');
let tiempo = Number(prompt('Ingrese el tiempo en minutos: '));

const Caldormir = 1.08;
const Calreposo = 1.66;
let caloriasConsumidas;

switch (actividad) {
    case 'dormir':
        caloriasConsumidas = tiempo * Caldormir;
        break;
    case 'reposo':
        caloriasConsumidas = tiempo * Calreposo;
        break;
    default:
        alert('Actividad no válida.');
}
    alert(`Calorías consumidas durante ${tiempo} minutos de ${actividad}: ${caloriasConsumidas.toFixed(2)} calorías.`);*/






/*Ejercicio#5
Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. 
El descuento lo hace en base a la clave. Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% (solo existen dos claves).*/

let nombreArticulo = prompt('Ingrese el nombre del artículo:');
let claveArticulo = prompt('Ingrese la clave del artículo (01 o 02):');
let precioOriginal = Number(prompt('Ingrese el precio original del artículo:'));
let precioConDescuento;

    switch (claveArticulo) {
        case '01':
            precioConDescuento = precioOriginal * 0.90; 
            break;
        case '02':
            precioConDescuento = precioOriginal * 0.80; 
            break;
        default:
            alert('Clave no válida.');
    }
     alert(`Nombre del artículo: ${nombreArticulo}\nClave: ${claveArticulo}\nPrecio original: $${precioOriginal.toFixed(2)}\nPrecio con descuento: $${precioConDescuento.toFixed(2)}`);
    



