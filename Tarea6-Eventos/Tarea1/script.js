/*Ejercicio #1

Capturar tres números por medio de cajas de texto, 
compararlos e indicar cual número es mayor y cual menor, 
adicionar una validación en caso de que sean iguales. 
Hacer uso del evento DOMContentLoaded y clic.*/

document.addEventListener('DOMContentLoaded', function() {
    const compararBTN = document.getElementById('compararBTN');
    compararBTN.addEventListener('click', function() {

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);


    let mayor, menor;

    // Determinar el número mayor
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    // Determinar el número menor
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    // Mostrar resultados
    if (num1 === num2 && num2 === num3) {
        mostrarResultado('Todos los números son iguales.');
    } else {
        mostrarResultado(`El número mayor es ${mayor} y el número menor es ${menor}.`);
    }
});

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
}
});