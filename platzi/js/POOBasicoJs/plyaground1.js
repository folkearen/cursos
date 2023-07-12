// Dadas la siguientes clases:

// Clase Banda con las propiedades:

// nombre - string
// generos - Array
// integrantes - Array
// Crea una clase llamada "Integrante" con las propiedades:

// nombre - string
// instrumento - string

// Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

class Banda {
    constructor({
        nombre = 'NN',
        generos = [],
    }){
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
        }

    agregarIntegrante(integranteNuevo) {
        if(integranteNuevo.instrumento.toLowerCase() === 'bateria'){
            if(this.integrantes.some(item => item.instrumento.toLowerCase() === 'bateria')) {
                return 'Ya hay un baterista'
            } 
        }
        this.integrantes.push(integranteNuevo)
    }
};

class Integrante {
    constructor({
        nombre,
        instrumento
    }){
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
};

const banda1 = new Banda({
    nombre: 'TTX',
    generos: ['Rock', 'Reguetone']
});
console.log(banda1)

const juanito = new Integrante({
    nombre: 'Juanox',
    instrumento: 'Guitarra'
});

const lorenza = new Integrante({
    nombre: 'Zlorenx',
    instrumento: 'Bateria'
});

banda1.agregarIntegrante(juanito);
banda1.agregarIntegrante(lorenza);
console.log(banda1)

const raul = new Integrante({
    nombre: 'ulrax',
    instrumento: 'Bateria'
});

banda1.agregarIntegrante(raul);
console.log(banda1)