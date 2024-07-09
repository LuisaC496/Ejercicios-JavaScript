/*Ejercicio #3
Realizar una calculadora que cuente con las operaciones 
básicas: suma, resta, multiplicación y división. 
Tener en cuenta adicionar un botón para limpiar las cajas de texto. 
Implementar los eventos necesarios para resolver el ejercicio.*/

function sumar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 + num2;
    mostrarResultado(resultado);
}

function restar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 - num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 * num2;
    mostrarResultado(resultado);
}

function dividir() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (num2 === 0) {
        alert('No se puede dividir por cero');
        return;
    }
    let resultado = num1 / num2;
    mostrarResultado(resultado);
}

function limpiar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').textContent = '';
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
