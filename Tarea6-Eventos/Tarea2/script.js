/*Ejercicio #2 
Implementar 5 cajas de texto, activar los siguientes eventos 
(un evento por cada caja de texto): focus, blur, keypress, keyup. 
Cada vez que se active el evento de cada caja de texto mostrar 
un mensaje en una alerta.*/


document.addEventListener('DOMContentLoaded', function() {
    const texto1 = document.getElementById('texto1');
    const texto2 = document.getElementById('texto2');
    const texto3 = document.getElementById('texto3');
    const texto4 = document.getElementById('texto4');
    const texto5 = document.getElementById('texto5');

    // Evento Focus
    texto1.addEventListener('focus', function() {
        alert('Evento Focus activado en Texto 1');
    });

    // Evento Blur
    texto2.addEventListener('blur', function() {
        alert('Evento Blur activado en Texto 2');
    });

    // Evento Keypress
    texto3.addEventListener('keypress', function() {
        alert('Evento Keypress activado en Texto 5');
    });

    // Evento Keypress
    texto4.addEventListener('keyup', function() {
        alert('Evento Keyup activado en Texto 4');
    });

    // Evento Keypress
    texto5.addEventListener('keyup', function() {
        alert('Evento Keyup activado en Texto 4');
    });

});
    
