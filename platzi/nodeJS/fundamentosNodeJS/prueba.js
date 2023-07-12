let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(item => item.aprobado);
let desaprobados = estudiantes.filter(item => !item.aprobado);

console.log(aprobados)
console.log(desaprobados)