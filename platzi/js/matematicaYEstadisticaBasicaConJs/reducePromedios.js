
const calcularPromedio = (arr) => {
    return arr.reduce((acc, nv)=> acc + nv) / arr.length;
}

console.log(calcularPromedio([1,2,3,4,5,6,7]))