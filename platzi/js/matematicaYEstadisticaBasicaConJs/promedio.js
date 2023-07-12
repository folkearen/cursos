notas = [1,2,3,4,5,6,7];

let suma = 0

for (let i=0; i < notas.length; i++) {
    suma += notas[i]
}
promedio = suma / notas.length
console.log(promedio)

suma2 = 0

for (nota of notas) {
    suma2 += nota
}

promedio2 = suma2 / notas.length
console.log(promedio2)

