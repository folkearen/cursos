var auto = {
    marcar: "Toyota", //Propiedades
    modelo: "Corola",
    annio: 2022,
    datosDeAuto: function(){
        console.log(`La marcar del auto es ${this.marcar} modelo ${this.modelo} año ${this.annio}`);
    }//Metodos
}

//funcion constructora es como una clase en otros lenguajes
function auto2(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto1 = new auto2("Toyota", "Corola",2022); //Objetos creados a partir de la funcion constructora ojo con new
var auto2 = new auto2("Mazda","3",2001);
var auto1 = new auto2("Chevrolette", "Cavallier",1999);


//Ejercicos
//En este desafío vas a recibir un objeto car como parámetro de la función solution.
//Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

function solution(car) {
    if (car.licensePlate === undefined) {
      car.drivingLicense = false
      return car
    } else {
      car.drivingLicense = true
      return car
    }
    // Tu código aquí 👈
  }
// Prueba 1
solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255'  });  

 