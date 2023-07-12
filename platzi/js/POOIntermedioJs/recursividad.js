//ejemp

// function recursiva(numerito) {
//     if(validacion){
//         //Llamdos recursivos
//     }else {
//         //Llamados nomale, sin recursividad
//     }
// }


function recursiva(numerito) {
    if(numerito <= 5){
        console.log(numerito);
        return recursiva(numerito + 1);
    }else {
        return numerito
    }
}

recursiva(0)
console.log('-----------')

const numeros = [1,8,45,78,287,4,1234,1,3,4]

function recursiva2(numbersArray) {
    if(numbersArray.length != 0){
        //const firstNumber = numbersArray[0];
        console.log(numbersArray[0]);
        numbersArray.shift();
        return recursiva2(numbersArray);
    }

}

recursiva2(numeros)
console.log(numeros)