//Los hash table tambien son una estructura de dato clave-valor pero con un tercer elemento

class hashTable {
    constructor(size) {
        this.data = new Array(size);
        //Crea un array de x tamno, este array almacenara nuestra tabla de hash, cada espacio es un bucket, que alamcenara hash, key y value
    }
    hashMethod(key) {
        let hash = 0
        for(let i= 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // key.charCodeAt(i) devuelve el valor unicode de cada letra, se hace una formula para crear ses numero random
            //Las hash funcion ya estan hechas, y mas complejas, hay que buscar en internet, rara vez tocara crear una.
        }
        return hash
    }

    set(key, value) {
        const address = this.hashMethod(key); //Cramos una direccion hash a partir del key
        if(!this.data[address]) { //Si no existe una propiedad con esa direccion hash, la creara y le asignara un array vacio, para luego guardar datos keys y valus
            this.data[address] = [];
        };
        this.data[address].push([key, value]);
        //Aca prevenimos la colicion, si un key genera un hash ya existente, ya se porque lo creamos recien o en otra ocacion,
        //pushaear el key y el value dentro de un array, teniendo dos array de  keys y  values o mas
    }
    get(key) {
        const address = this.hashMethod(key); //Trasnformasmos la key a una direccion hash
        const currentBucket = this.data[address]; //Asignamos a la variable nuestra supuesta direccion del diciconario elemento[propiedad hash]
        if(currentBucket) {//si existe
            for(let i = 0; i < currentBucket.length; i++) { //Recorremos dicho elemnto, que es una array de arrays, con uno o mas si hubo cocnrurencia
                if(currentBucket[i][0] === key) {//comparamos el primer valor del primer array, del objeto con la direccion hash, con nuestra key sino coinciden pasara al siguiente array en la lista
                    return currentBucket[i][1]//Si coinciden me devovlera el elemto 1, osea el value, el 0 es la key, de dicho elemnto almacenado en sa direccion hash
                }
            }
        }
        return undefined;
    }

    //Delete
    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            let deletedBucket; 
            for(let i = 0; i < currentBucket.length; i++) {/*&& currentBucket.length > 1*/
                if(currentBucket[i][0] === key && currentBucket.length > 1){
                    deletedBucket = currentBucket[i];
                    currentBucket.shift(currentBucket[i])
                    //delete currentBucket[i]
                    //currentBucket.splice(i, 1)
                    return deletedBucket;
                 }else {
                    deletedBucket = currentBucket[i];
                    delete this.data[address];
                    return deletedBucket;
                }
            }
        };
        return undefined;
    }
    //Devolver todas las Keys del bucket
    getAllKeys() {
        let allNivelData = this.data.flat(2);
        let allKeys = []
        for(let i = 0; i < allNivelData.length; i++){
            if(i % 2 == 0){
                allKeys.push(allNivelData[i])
            }
        }
        return allKeys;
      }
      getAllKeys2(){
        return this.data
          .flat()
          .map(([name]) => name)
      }
}

const myHashTable = new hashTable(50)
myHashTable.set('Alan', 1988)
myHashTable.set('Tamara', 1990)
myHashTable.set('Pascal', 2012)
myHashTable.set('Diego', 2016)
myHashTable.set('Mariana', 2032)//Aqui se produce una colicion con diego

console.log(myHashTable)
console.log(myHashTable.get('Alan'))
console.log(myHashTable.delete('Alan'))
console.log(myHashTable)
console.log(myHashTable.getAllKeys())
console.log(myHashTable.getAllKeys2())

