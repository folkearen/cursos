//La idea es emular como es un array en su interior.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item; // Crea una propiedad dentro de data, que lleva como llave un numero, ese numero es el almacenado en length en ese momento
        //por tanto se veria asi {0:item}, que es el index-valor de cualquier array, recordando que estos son deribado del Objeto Padre de todo js
        this.length++
    }
    pop() {
        const lastItem = this.data[this.length -1] //Recordar que pop devuelve el elemento borrado
        delete this.data[this.length -1];
        this.length--
        return lastItem; //Recordar que pop devuelve el elemento borrado
    }
    delete(index) {
       const selectedItem = this.data[index] 
       this.shiftIndex(index);
       return selectedItem;

    }
    shiftIndex(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+ 1];
            delete this.data[this.length -1];
            //OJO al ir cambiar el valor de index por el siguiente, este desaparece porque se reasigna, sin embargo
            //El ultimo index disponible no tiene un valor por el cual reasignarse (no hay mas indices)
            //entonces js lo asignara con undefined, por tanto debemos eliminarlo
            this.length--// y restar uno a la propiedad length
        }
    }

    //Agregar al inicio unshift
    unshift(item) {
        if(item === undefined){
        return this.length;
        }
        for(let i = this.length; i >= 0; i--){
                this.data[i] = this.data[i - 1];
            };
        this.data[0] = item;
        this.length++
        return this.length;
    }

    //Quitar al inicio shift
    shift() {
        if(this.length == 0){
            return undefined
        }
        const selectedItem = this.data[0];
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return selectedItem;
    }

}

const myArray = new MyArray()
myArray.push('a')
myArray.push('b')
myArray.push('c')
myArray.push('d')

console.log(myArray)
let a = myArray.shift()
console.log(myArray)
console.log(a)


// myArray.shiftIndex(2)
// myArray.unshift('nuevo');
// console.log(myArray)
// myArray.unshift(0);
// console.log(myArray)
// myArray.unshift(null);
// console.log(myArray)
// console.log(myArray.get(0))
// console.log(myArray)
// myArray.pop()
// console.log(myArray)



// Object.defineProperty(myArray, 'length', {
//     writable: false
// })

// console.log(Object.getOwnPropertyDescriptors(myArray))