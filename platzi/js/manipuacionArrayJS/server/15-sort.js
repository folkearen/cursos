//Ordena el array siguiendo el codigo ASCII

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months) //[ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers) //[ 1, 100000, 21, 30, 4 ]
numbers.sort((a,b) => a - b);
console.log(numbers) //[ 1, 4, 21, 30, 100000 ]
numbers.sort((a,b) => b- a);
console.log(numbers) //[ 100000, 30, 21, 4, 1 ]

const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
words.sort()
console.log(words)//Orden caracteres especiales, deja al ultimo aquellas que comiezan con un caracter especial
//words.sort((a,b) => a.localeCompare(b))//Para versiones antiguas de node o navegadores, que no ordenaban por ASCII los caracteres especiales.
//console.log(words)

//oredenar array de objetos
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log(orders)

orders.sort((a,b)=> b.total - a.total)
console.log(orders)
// console.log(orders)
// console.log(orders)

