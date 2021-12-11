function altura(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        alert("Es un triangulo Isoseles")
        const base2 = (base / 2)^2;
        const hipotenusa = lado1^2;
        const calculo = Math.sqrt(base2/2 - hipotenusa)

        alert(`La altura del triangulo es ${calculo} cm`)
    } else {
        alert("No es un triangulo Isoseles")
    }
}