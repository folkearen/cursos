const AlanMath = {}

AlanMath.esPar = function esPar(num) {
    let par = []
    for (let n of num) {
        if (n % 2) { 
            false
        }else {
            par.push(n)
        }
    }
    return par
}
AlanMath.esImpar = function esImpar(num) {
    let impar = []
    for (let n of num) {
        if (n % 2) { 
            impar.push(n)
        }else {
            false
        }
    }
    return impar
}

AlanMath.calcularPromedio = function calcularPromedio(arr) {
    return arr.reduce((acc, nv)=> acc + nv) / arr.length;
}
AlanMath.calcularModa = function calcularModa(array) {
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
AlanMath.Mediana = function calcularMediana (lista) {
    lista = lista.sort((a,b) => a-b)
    if (lista.length % 2) {
        return lista[Math.floor(lista.length / 2)] //floor quita el decimal al numero flotanto. por tanto no necesito redondear
    }else {
        return ((lista[Math.floor(lista.length / 2)]) + (lista[Math.floor(lista.length / 2) -1])) /2
    }
}

export default AlanMath;