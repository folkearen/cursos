const calcularModa = (array) => {
    let conteo = {}
    for(let element of array) {
        if (!conteo[element]) {
            conteo[element] = 0;
        }
        conteo[element] += 1;
    }

    let repticiones= Object.values(conteo).sort((a, b) =>  a - b)
    repticionesMasAltas = repticiones[repticiones.length -1]
    let indexMax = (Object.values(conteo).indexOf(repticionesMasAltas))
    let elementoMasRepetido = Object.keys(conteo)[indexMax]


    return `El elemnto que más se repite es ${elementoMasRepetido} con ${repticionesMasAltas} veces`
}
 


a = [1,1,2,2,2,2,8,8,8,8,8,8,8,2,2,2,2,2,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

console.log(calcularModa(a))