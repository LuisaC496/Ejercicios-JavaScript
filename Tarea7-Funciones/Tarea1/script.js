
function contar() {
    let cantidadPositivos = 0;
    let cantidadNegativos = 0;
    let cantidadNeutros = 0;

    for (let i = 0; i < 20; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));

        if (esPositivo(numero)) {
            cantidadPositivos++;
        } else if (esNegativo(numero)) {
            cantidadNegativos++;
        } else {
            cantidadNeutros++;
        }
    }
    alert(`Cantidad de números positivos: ${cantidadPositivos}`);
    alert(`Cantidad de números negativos: ${cantidadNegativos}`);
    alert(`Cantidad de números neutros: ${cantidadNeutros}`);
}


function esPositivo(numero) {
    return numero > 0;
}
function esNegativo(numero) {
    return numero < 0;
}

// Llamar a la función principal
contar();
