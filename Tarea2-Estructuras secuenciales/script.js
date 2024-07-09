//Ejercicio 1.
//Un maestro desea saber que porcentaje de hombres y el porcentaje de mujeres que hay en un grupo de estudiantes.

/*let estudiantes = Number(prompt('Ingrese el número de estudiantes en la clase: '));
let mujeres = Number(prompt('Ingrese el número de mujeres de la clase: '));
let hombres = Number(prompt('Ingrese el número de hombres de la clase: '));


const porcentajeHombres = (mujeres / estudiantes) * 100;
const porcentajeMujeres = (hombres / estudiantes) * 100;

alert(`Porcentaje de hombres: ${porcentajeHombres.toFixed(2)}%`);
alert(`Porcentaje de mujeres: ${porcentajeMujeres.toFixed(2)}%`);*/

/*Ejercicio 2.
Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido tiene que proporcionar las medidas de la tela en pulgadas, 
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere. 
(1 pulgada = 0.0254 m).*/

/*const metrosPorPulgada = 0.0254; // 1 pulgada es igual a 0.0254 metros
let metros = Number(prompt('Ingrese los metros a usar: '));

const pulgadasPorMetro = 1 / metrosPorPulgada;
const calculo = metros * pulgadasPorMetro;

alert(`Para ${metros} metros, necesita ${calculo.toFixed(2)} pulgadas.`);*/


/*Ejercicio 3.
Un estudiante desea saber cual será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final*/

/*let n1, n2, n3;
n1= Number(prompt('Ingrese la nota 1: '))
n2= Number(prompt('Ingrese la nota 2: '))
n3= Number(prompt('Ingrese la nota 3: '))
const promedio = (n1 + n2 + n3) / 3;
const porcentaje55 = promedio * 0.55;

let calificaExamen = 0;
calificaExamen=Number(prompt('Ingrese calificación de examen final'));
const porcentaje30= calificaExamen * 0.30;

let TrabajoFinal = 0;
TrabajoFinal=Number(prompt('Ingrese calificación del trabajo final'));
const porcentaje15= TrabajoFinal * 0.15;

const calificaFinal = porcentaje55+porcentaje30+porcentaje15;

alert(`Su calificación final es de  ${calificaFinal}`);*/



