
//Ejercicio #1
//Leer 10 números e imprimir solamente los números positivos.

/*let positivos = 0;
let num= 0;


for(let i=1; i<=10; i++){
    num= Number(prompt("Ingrese número: "));
     if(num > 0){
        positivos= positivos + 1;
    }
    else{
        alert(`El número ${num} es negativo`);

    }
}

alert(`Cantidad números positivos: ${positivos}`);*/

//Ejercicio #2
//Calcular e imprimir la tabla de multiplicar de un número cualquiera. Imprimir el multiplicando, el multiplicador y el producto

/*let numero = Number(prompt("Ingrese número para la tabla de multiplicar: "));
let tablaMultiplicar = '';

for (let i = 1; i <= 10; i++) {
    let producto = numero * i;
    tablaMultiplicar += `${numero} x ${i} = ${producto}\n`;
}

alert(`Tabla de multiplicar del ${numero}:\n\n${tablaMultiplicar}`);*/

//Ejercicio #3
//Leer 15 números negativos y convertirlos a positivos e imprimir dichos números.

// Array para almacenar los números convertidos a positivos
/*let numerosPositivos = [];

for (let i = 1; i <= 15; i++) {
    let num = Number(prompt(`Ingrese el número negativo ${i}: `));

    if (num < 0) {
        let numeroPositivo = Math.abs(num);
        numerosPositivos.push(numeroPositivo);
    } else {

        alert(`El número ${num} no es negativo. Por favor ingrese un número negativo.`);
        i--; 
    }
}

alert(`Números positivos convertidos:\n${numerosPositivos.join(', ')}`);*/

/*Ejercicio #4
Suponga que tiene un conjunto de calificaciones de un grupo de 40 estudiantes, 
realizar un algoritmo para calcular la calificación promedio (media) y la calificación más baja de todo el grupo.*/

/*let totalCalificaciones = 0;
let contadorEstudiantes = 0;
let calificacionMasBaja = Infinity; // Inicializamos con un valor muy grande para asegurar que cualquier calificación sea menor


while (contadorEstudiantes < 40) {
    let calificacion = Number(prompt(`Ingrese la calificación del estudiante ${contadorEstudiantes + 1}:`));

    if (!isNaN(calificacion)) {
        totalCalificaciones += calificacion; 
        contadorEstudiantes++; 
        
        if (calificacion < calificacionMasBaja) {
            calificacionMasBaja = calificacion;
        }
    } else {
        alert('Por favor ingrese una calificación válida.');
    }
}
let promedio = totalCalificaciones / 40;
alert(`El promedio de calificaciones es: ${promedio.toFixed(2)}`);
alert(`La calificación más baja del grupo es: ${calificacionMasBaja}`);*/


//Ejercicio #5
//Simular el comportamiento de un reloj digital, imprimiendo la hora, minutos y segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas.
/*let horas = 0;
let minutos = 0;
let segundos = 0;
do {

    alert(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    if (horas === 24) {
        horas = 0;
    }

} while (horas !== 0 || minutos !== 0 || segundos !== 0); 

alert('Fin del día.');*/


