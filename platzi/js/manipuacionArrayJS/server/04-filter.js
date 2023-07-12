const colores = ['Rojo', 'Azul', 'Blanco', 'Negro'];
const noColores = [];

for(i = 0; i<= colores.length; i++) {
    if(colores[i] == 'Blanco'|| colores[i] == "Negro"){
        noColores.push(colores[i]);
    }
}

console.log(noColores)

let realColor = colores.filter(color =>  {if( color != 'Negro'|| color != 'Negro'){return color}})
console.log(realColor)

const words = ["spray", 'limit', 'elite', 'exhuberant'];

const shortWords =[]
for(let word of words) {
    if(word.length <= 5){
        shortWords.push(word)
    }
}
const newWord = words.filter(word => word.length <= 5)
console.log(words)
console.log(shortWords)
console.log(newWord)

const orders = [
    {
        costumerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        costumerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        costumerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        costumerName: 'Valentina',
        total: 240,
        delivered: true
    }
];

let paquetesEntregados = orders.filter(item => item.delivered && item.total > 200)
console.log(paquetesEntregados)

const sarch = (query) => orders.filter((item) => item.costumerName.includes(query))
console.log("🚀 ~ file: 04-filter.js:55 ~ sarch:", sarch("San"))
