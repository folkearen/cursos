const perimetroCuadrado = (longitudLadosFigura, numeroLadosFigura) => {
    const perimetro = longitudLadosFigura * numeroLadosFigura;
    return `El perimetro de la figura es ${perimetro}`;
}

const perimetroTriangulo = (lado1, lado2, lado3) => {
    const perimetro = lado1 + lado2 + lado3
    return `El perimetro de la figura es ${perimetro}`;
}

const areaCuadrado = (LongitudLadosCuadrado) => {
    const area = LongitudLadosCuadrado ** 2;
    return  `El area del cuadrado son ${area} cm2`
}

const areaTriangulo = (base, altura) => {
    const area =(base * altura) / 2;
    return `El area del triangulo es ${area}`
}

console.log(perimetroCuadrado(5, 4))
console.log(perimetroTriangulo(5, 4, 4))
console.log(areaCuadrado(5))
console.log(areaTriangulo(10, 15))

const todoCirulo = (radio) => {
    const pi = 3.1415;
    const diametro = radio * 2;
    const circunferencia = diametro * pi;
    const area = (radio ** 2) * pi;
    return `El diamtro del circulo es ${diametro}, su circunferencia es ${circunferencia}, su area es ${area}`
} 

console.log(todoCirulo(3))

const otroCirculo = (radio) => {
    return `
    El ciruculo indicado tiene:
    Un radio de ${radio}
    Un diametro de ${radio * 2}
    Una circunferencia de ${(radio * 2)* Math.PI})
    Y un area de ${Math.pow(radio, 2) * Math.PI}
    `
}
console.log(otroCirculo(3))

console.log(Math.PI)