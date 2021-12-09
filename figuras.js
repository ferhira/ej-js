//Codigo del cuadrado

console.group("Cuadrados"); //Nombre del grupo

function perimetroCuadrado(lado) {
    return lado * 4;

}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd(); //Fin del grupo

//Codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo (lado1Triangulo, lado2Triangulo, baseTriangulo) {
    return lado1Triangulo + lado2Triangulo + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2
}

console.groupEnd();

//codigo del circulo

console.group("Circulos");

//Diametro
function diametroCirculo(radio) {
    return radio *2;
}


//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI

}

//Area

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();
