//Devuelve true si el elemento esta en el array, sino false.


let pets =['dog', 'cat', 'bat'];

let rta = false
for( let i = 0; i < pets.length; i++) {
    if(pets[i] === 'dog') {
        rta = true
        break;
    }
}

console.log(rta)

let probandoIncludes = pets.includes("cow")
console.log(probandoIncludes)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
