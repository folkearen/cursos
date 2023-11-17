const invitados = ['Pedro', 'Maria', 'Jose', 'Carla', 'Alberto']
const persona = {
    nombre: 'Alan',
    edad: 35,
    corre: 'correo@corre.cl'
}

for(let i = 0; i < invitados.length; i++){
    console.log(invitados[i])
}
console.log('------------------------')

for(let i = invitados.length -1; i >= 0; i--){
    console.log(invitados[i])
}

console.log('------------------------')

for(let i = 0; i < invitados.length; i++){
    if(invitados[i][0] == 'J'){
        break
    }    
    console.log(invitados[i])
}

console.log('------------------------')

for(let i = 0; i < invitados.length; i++){
    if(invitados[i].startsWith('C')){
        break
    }    
    console.log(invitados[i])
}

console.log('------------------------')

for(let i = 0; i < invitados.length; i++){
    if(invitados[i].startsWith('M')){
        continue
    }    
    console.log(invitados[i])
}

console.log('------------------------')

invitados.forEach((invitado, index) => console.log(`El invitado #${index} es: ${invitado}`))

console.log('------------------------')

for(invitado in invitados) {
    console.log(invitado)
}

console.log('------------------------')

for(dato in persona) {
    console.log(dato)
}

for(dato in persona) {
    console.log(persona[dato])
}
console.log('------------------------')
//for of Permite recorrer los valores de un objeto iterable, arreglos, strings, mapas, lista de nodos, etc.

for(invitado of invitados) {
    console.log(invitado)
}
