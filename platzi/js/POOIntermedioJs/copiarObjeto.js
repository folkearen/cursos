//Tecnica Shalow copy
//nested objects  objeto dentro de un objeto

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
};

const obj2 = {};

for(prop in obj1){ //for in recorre y adquiere el valor de indice o llaves, for of adquiere los valor del los elemntos o values
    obj2[prop] = obj1[prop]
}

console.log(obj1)
console.log(obj2)

obj2.a = 'AAAAAAAAAAAA'; //Solo modifica el obj2 y no el obj1, ya que al no ser una copia directa apuntan a espacios de memoria diferente
obj1.b = 'BBBBBBBBB'; //ViceVersa

console.log(obj1)
console.log(obj2)

//El problema de Shalow copy, vine cuando una propiedad tiene como valor otro objeto que al modificarse en uno de los dos afectara al otro simultaneamente
const obj3 = Object.assign({}, obj1); //Hace los mismo que un shalow copy, y tiene el mismo problema
const obj4 = Object.create(obj1)
console.log('----------------------------')
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)//Parece vacio, pero las propiedades copiadas estan dentro de la propiedad __proto__
console.log(obj4.__proto__)//Aqui puedo verlas

console.log('----------------------------')
obj4.a = 'XXXXXXXXXXXXXXXXXX'
obj4.c.d = "DDDDDDDDDDDDD"
console.log(obj4) //Al reasignar un propiedad esta aparecera directamente en el objeto, pero conservara el copiado dentro de la porpiedad __proto__
console.log(obj4.__proto__)// Como se reasigno un propiedad dentro de un objeto valor de un propiedad esta no se mostrara, mas aun modificara el obje origina
console.log(obj1)

console.log('----------------------------')

obj4.c ={ d: 'YYYYY', e: 'ZZZZ'} //Se modfica solo el obj 4, no asi su propiedad proto ni el obje original en este caso el obj1
//El problema con lo anterior es que se reescribe codigo, y si el subobjeto, tiene mil elementos es imposible
console.log(obj4)
console.log(obj4.__proto__)
console.log(obj1)

//OJO si modifico un obj original, para el caso el obj1, esta modificacion se vara reflejada en todos las propiedades "herdadas", en la propiedad __proto__
