
const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const edad = parseInt(document.getElementById('edad').value);
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
    const tipo = tipoJubilacion(edad, antiguedad);
    resultadoDiv.innerHTML = `<p>Tipo de jubilación: <strong>${tipo}</strong></p>`;
});


function tipoJubilacion(edad, antiguedad) {
    if (edad >= 60 && antiguedad < 25) {
        return "Jubilación por Edad";
    } else if (edad < 60 && antiguedad >= 25) {
        return "Jubilación por Antigüedad Joven";
    } else if (edad >= 60 && antiguedad >= 25) {
        return "Jubilación por Antigüedad Adulta";
    } else {
        return "No cumple con los requisitos para jubilación en 1997";
    }
}
