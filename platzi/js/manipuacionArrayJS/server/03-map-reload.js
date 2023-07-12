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

const nombres = orders.map(item => item.costumerName)
const totales = orders.map(item => item.total)
const isDelivered = orders.map(item => item.delivered)
console.group()
console.log(nombres)
console.group()
console.log(totales)
console.group()
console.log(isDelivered)
console.groupEnd()
console.groupEnd()
console.groupEnd()

const agregarImpuesto = orders.map(item => {item.tax = .19; return item})/*Esta sintaxis
afecta al elemento original ya que al agregar un nuevo elemnto hace referencia al espacio en memoria
del original, esto no afecta a datos primitivos, */

const valorConImpusto = orders.map(item => { return { ...item, costeFinal : item.total + (item.total * item.tax)}});
/*Al cambiar la sintaxis y utilizar el operador de propagacion (... que quiere decir copia esos datos y propagalos
    a tal elemento) y ademas retornar un objeto, que tenga los elemntos de item, copiados con el propagador
    y anadir una propiedad:su valor */
console.log(agregarImpuesto)
console.log(orders)
console.log(valorConImpusto)