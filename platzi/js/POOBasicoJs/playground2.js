// Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.

class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name;
    }
  
    set changeName(nuevoNombrecito) {
      if(typeof(nuevoNombrecito) === 'string'){
            let palabra = nuevoNombrecito.split(' ')
             this._name = palabra.map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
      }
    }
  }

  const curso1 = new Course({
    name: 'curso intro'
  })

console.log(curso1)
console.log(curso1.name)
curso1.changeName = 'el cursito nuevo de intro'
console.log(curso1.name)
