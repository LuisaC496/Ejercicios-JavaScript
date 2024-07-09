
function calcularArea(base, altura) {
    return base * altura;
}

function calcularPerimetro(base, altura) {
    return 2 * (base + altura);
}

let baseRectangulo = 5;
let alturaRectangulo = 3;

let area = calcularArea(baseRectangulo, alturaRectangulo);
let perimetro = calcularPerimetro(baseRectangulo, alturaRectangulo);

console.log("El área del rectángulo es: " + area);
console.log("El perímetro del rectángulo es: " + perimetro);
