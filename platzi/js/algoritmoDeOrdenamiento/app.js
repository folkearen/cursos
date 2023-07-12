let numero = [1,2,3,4,5,6];
let par = [];
for(let i = 0; i < numero.length; i ++ ) {
    if( numero[i] % 2 != 0) {
        par.push(numero[i])
    }

}
console.log(par)