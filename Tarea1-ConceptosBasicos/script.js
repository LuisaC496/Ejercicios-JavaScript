//Ejercicio# 2
//Hacer un programa que convierta los grados centígrados (30 grados) a grados Fahrenheit, la fórmula es la siguiente: (C*1.8) +32. Imprimir los resultados en una alerta.

/*let centigrados;
let formula = 0;

centigrados= Number(prompt('Ingrese grados centigrados'));

formula =  (centigrados*1.8) +32;

alert(`Los centrigrados ${centigrados} en Fahrenheit son ${formula}`);*/


//Ejercicio #3
//Pedir un número al usuario y escribirlo/imprimirlo sumándole 10. Imprimir los resultados por consola.

/*console.log('Ingrese un número: ');

process.stdin.once('data', (input) => {
let numero = Number(input.toString().trim());
const constante= 10;
let resultado= numero + constante;

console.log(`El número ${numero} + ${constante} es ${resultado}`);
 
process.exit();
});*/


//Ejercicio #4

//Realizar el mismo programa del Ejercicio #2, pero ahora se debe pedir el dato inicial (grados centígrados) al usuario (teclear el dato).
/*let centigrados;
let formula = 0;

centigrados= Number(prompt('Ingrese grados centigrados'));

formula =  (centigrados*1.8) +32;

alert(`Los centrigrados ${centigrados} en Fahrenheit son ${formula}`);*/


//TAREA 2. 
//Realizar un algoritmo en JavaScript que permita calcular la suma, resta, multiplicación y división de dos números, donde num1 = 5 y num2 = 7. Mostrar los resultados por consola.

/*let num1=5;
let num2=7;

let suma= num1 + num2;
let resta= num1 - num2;
let multiplicación= num1 * num2;
let división= num1 / num2;

console.log(`El número ${num1} + ${num2} es ${suma}`);
console.log(`El número ${num1} - ${num2} es ${resta}`);
console.log(`El número ${num1} * ${num2} es ${multiplicación}`);
console.log(`El número ${num1} / ${num2} es ${división}`);*/


//TAREA 3.
//Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora. Use redline para permitir 
//multiples ingresos de datos por consola. 

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un nombre: ', (nombre) => {
rl.question('Ingrese horas trabajadas: ', (horasStr) => {
let horas = Number(horasStr);
rl.question('Ingrese valor horas: ', (valorStr) => {
let valor = Number(valorStr);
let total = horas * valor;
console.log(`El señor@ ${nombre} con número de horas ${horas} y un valor de horas ${valor} tiene un total en pesos de ${total} por horas trabajadas`);
 rl.close();
        });
    });
});*/


//TAREA 4.
//Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. 
//Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. Realizar el algoritmo que permita determinar el cobro.

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese horas de uso: ', (horasStr) => {
let horas = Number(horasStr);
rl.question('Ingrese valor por hora: ', (valorStr) => {
let valor = Number(valorStr);
let cobro = horas * valor;
console.log(`El uso fue de ${horas} horas, el valor de la hora es ${valor} su cobro es de ${cobro}`);
 rl.close();
        
    });
});*/

