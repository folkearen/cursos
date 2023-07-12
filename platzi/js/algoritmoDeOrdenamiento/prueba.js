/*6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma : */

function priramideNumeros() {
    let multiplicador = 1;
    for(let i = 1; i <= 30; i++) {
        console.log(i * multiplicador)
        multiplicador += 10**i
        
    }
};
//priramideNumeros()

function pirnum() {
    for(let i = 1; i <=30; i++) {
        let acc = 0;
        let numS = "";
        while(acc != i) {
            numS += String(i);
            acc++
        }
        console.log(numS)
    }
    
}
//pirnum()

function numpir() {
    for(let i = 0; i <= 30; i++) {
        console.log(String(i).repeat(i))
    }
}

numpir()