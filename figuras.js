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
    const diametro = radio;
    return diametro * Math.PI

}

//Area

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML

//Cuadrado
 function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);

 }
 function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value)
    alert(perimetro);

 }

 //Triangulo
 function calcularPerimetroTriangulo(){
     const input = document.getElementById("InputTriangulo1");
     const value1 = parseInt(input.value);
     const input1 = document.getElementById("InputTriangulo2");
     const value2 = parseInt(input1.value);
     const input2 = document.getElementById("InputTriangulo3");
     const value3 = parseInt(input2.value);

     const perimetro = perimetroTriangulo(value1,value2,value3)
     alert(perimetro);
 }
    function calcularAreaTriangulo(){
        const input = document.getElementById("InputTrianguloArea");
        const value1 = parseInt(input.value);
        const input1 = document.getElementById("InputTrianguloArea2");
        const value2 = parseInt(input1.value);

        const area = areaTriangulo(value1,value2)
        alert(area);
    }

    //Circulo
    function calcularDiametroCirculo(){
        const input = document.getElementById("InputCirculo");
        const value = input.value;

        const diametro = diametroCirculo(value)
        alert(diametro);
    }
    function calcularCircunsferenciaCirculo(){
        const input = document.getElementById("InputCirculo");
        const value = input.value;

        const circunsferencia = perimetroCirculo(value)
        alert(circunsferencia);
    }
    function calcularAreaCirculo(){
        const input = document.getElementById("InputCirculo");
        const value = input.value;

        const perimetro = areaCirculo(value)
        alert(perimetro);
    }
