//une dos array, siendo el tercero uno nuevo

let num = [1,2,3,4,5];
let alpha = ['a','b','c']

let newArray = [...num]; //Debo clonar el elemnto, con el operador de propagacion, de lo contrario afectar[a al array orginal ya que apuintan al mismo espacio de memoria]

for(let i = 0; i < alpha.length; i++) {
    newArray.push(alpha[i])
};

console.log(num)
console.log(alpha)
console.log(newArray)


let rpt = num.concat(alpha);

console.log(rpt)

let rpt2 = [...num, ...alpha]; //uniendo con operador de propagacion

console.log(rpt2)

let rpt3 = [...num, 'Javasecript'] // El operador de propagacion funciona con array, un string tambien los, si coloco ek string, simplemente lo sumara completamente ocmo un elmento al array
let rpt4 = [...num, ...'Javasecript'] // si sumo el stringo con un operador de propagacion, este anadira cada letra del stringo como un elemnto del array, letra a letra

console.log(rpt3)
console.log(rpt4)

let a = ['a', 'A']

let b = ['b',"B"]

a.push(b) // Puedo pushear un array a otro, sin embargo el segundo array se agragra completamente como un array, pasara a ser un array dentro de un array
console.log(a)

let c = ['c', 'C']
let d = ['d', 'D']
c.push(...d) // Si ocupo propagacion, se pusharea cada elemento del segundo array al primero, cada elemnto pasara de forma idependeiente a ser elemento del primer array

console.log(c)
