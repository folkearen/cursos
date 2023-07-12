//Devuelve solo el primer elemento que cumpla con la condicion dada, si no hay elemento que la cumpla, devuelve undefine


let numbers = [12,45,67,30,90]

let rta;
for(let i = 0; i < numbers.length; i++) {
    if( numbers[i] === 30) {
        rta = numbers[i];
        break;
    }
}
console.log(rta)
let probandoFind = numbers.find(item => item === 30);
console.log(probandoFind)

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

  let findHotDog = products.find(item => item.id ==="🌭")
  console.log(findHotDog)