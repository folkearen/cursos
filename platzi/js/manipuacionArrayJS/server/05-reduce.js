let totals = [1,2,3,4];

let suma = totals.reduce((sum, element) => sum + element, 10) //Pudo daler un valor inicial al elementor acumulador con esta sintaxis

console.log(suma)


let num = [3,1,2,3]

let repe = num.reduce((obj, item)=> { //reduce igualmente itera, recordad
        if(!obj[item]) {
            obj[item] = 1;
        }else{
            obj[item] += 1
        }
        return obj
    }, {} //le paso un array vacio para empesar, reduce guarda los retornos anteriones
);
//uso de reduce para llenar un objet
// console.log(repe)

const data = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "hight"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "medium"
    },
    {
        name: "Lucia",
        level: "hight"
    }
];

const levels = data
.map(item => item.level)
.reduce((obj, item)=> { 
    if(!obj[item]) {
        obj[item] = 1;
    }else{
        obj[item] += 1
    }
    return obj
}, {} 
);

console.log(levels)

//desafio

let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let a = number.reduce(
    (obj,item) => {
        if(item < 6 && !obj["Entre 1 y 5"]){
            obj["Entre 1 y 5"] = 1;
        }else if(item < 6) {
            obj["Entre 1 y 5"] += 1;
        }else if(item > 5 && item < 11 && !obj["Entre 6 y 10"]) {
            obj["Entre 6 y 10"] = 1;
        }else if(item > 5 && item < 11) {
            obj["Entre 6 y 10"] += 1;
        }else if(item > 10 && item < 16 && !obj['Entre 11 y 15']) {
            obj["Entre 11 y 15"] = 1;
        }else if(item >10 && item < 16){
            obj["Entre 11 y 15"] += 1;
        }
        return obj;
    }, {}
);

console.log(a)

let b = number.reduce(
    (obj, item) => {
        if(item < 6) obj['1-5'] +=1;
        else if(item > 5 && item < 11) obj['6-10'] += 1;
        else obj['11-15']+= 1;
        return obj
    },{
        '1-5': 0,
        '6-10': 0,
        '11-15': 0
    }
)
console.log(b)


const beetween = (x, min, max) => x >= min && x <= max;
let c = number.reduce(
    (obj, item) => {
        if(beetween(item, 1, 5)) obj['1-5'] += 1
        if(beetween(item, 6, 10)) obj['6-10'] += 1
        if(beetween(item, 11, 15)) obj['11-15'] += 1
        
        return obj
    },{'R1-5' : 0, '6-10' : 0, '11-15' : 0}
);

console.log(c)
console.log(c['1-5']) //OJO cunado las llaves comienzan con numeros o tienen guiones al medio, no servira la notacion puntual.