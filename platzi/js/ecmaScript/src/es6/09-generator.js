function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(["Alan", "Maria", "Julio", "Pascal"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Como itera con for of, el valor del elemento cada vez que se hace un console.log va cambiando, si los console.log superan la cantidad de elementos del array arroja undefi


function* getId() {
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    } };

const id = getId();
console.log(id.next().value)