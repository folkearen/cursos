const calcularModa = (array) => {
    let conteo = {}
    for(let element of array) {
        if (!conteo[element]) {
            conteo[element] = 0;
        }
        conteo[element] += 1;
    }

    let matrizBi = Object.entries(conteo)
    let matrizBiOrdenada = matrizBi.sort((a,b) => a[1] - b[1]).reverse()
    return `El elemnto que más se repite es ${matrizBiOrdenada[0][0]} con ${matrizBiOrdenada[0][1]} veces`
}
 


a = [1,1,2,2,2,2,8,8,8,8,8,8,8,2,2,2,2,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

console.log(calcularModa(a))