function calcularMedina (lista) {
    lista = lista.sort((a,b) => a-b)
    if (lista.length % 2) {
        //logica cuando la lista es impar
        return lista[Math.floor(lista.length / 2)] //floor quita el decimal al numero flotanto. por tanto no necesito redondear
    }else {
        //Logica cuando la lista es par
        return ((lista[Math.floor(lista.length / 2)]) + (lista[Math.floor(lista.length / 2) -1])) /2
    }
}

a = [16,12,11,14,15,13]
b = [1,3,4,2,5,7]
c = [1,2,3,4,5,6]
console.log(calcularMedina(a))
console.log(calcularMedina(b))
console.log(calcularMedina(c))
