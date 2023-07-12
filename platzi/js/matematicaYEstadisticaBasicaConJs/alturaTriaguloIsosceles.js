//Desafio calcular altura de un triangulo isosceles
//Requisito: sabiendo la medida de los tres lados calcular la altura
//Debe ser no equilatero, dos de sus lados deben medir los mismo
//altura = a la raiz de lado1 al cuadrado menos la raiz de base al cuadrado dividido 4
const alturaIsosceles = (medidaLados, medidaBase) => {
    if (medidaBase == medidaLados) {
        return 'Es un error la medida de la base debe ser diferente a la de los lados'
    }
    return Math.sqrt((Math.pow(medidaLados, 2) - ((Math.pow(medidaBase,2) / 4))))
}
const alturaIsosceles2 = (medidaLados, medidaBase) => {
    if (medidaBase == medidaLados) {
        return 'Es un error la medida de la base debe ser diferente a la de los lados'
    }
    return ((medidaLados**2) - ((medidaBase ** 2) / 4))**0.5
}


console.log(alturaIsosceles(6, 6))
console.log(alturaIsosceles2(6, 6))

//Triangulo escaleno

const alturaEscaleno = (lado1, lado2, lado3) => {
    if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Hay lados iguales, deben ser todos diferentes'
    }
      // Si es escaleno, calculamos primero su area
    let s = (lado1 + lado2 + lado3) / 2;
    let area =Math.sqrt(s * (s - a) * (s - b) * (s - c) )

     // Ahora usamos que A = bh/2, por lo que h = 2A/b
  let altura_a = Math.floor(2 * area / a);
  let altura_b = Math.floor(2 * area / b);
  let altura_c = Math.floor(2 * area / c);

  // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
  return altura_a;
}