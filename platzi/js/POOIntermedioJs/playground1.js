// Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados de forma recursiva para así realmente 
// lograr bloquear todo el objeto. A esto se le conoce comunmente como deepFreeze.

function deepFreeze(obj) {
    for(key in obj) {
        if(Array.isArray(obj[key])) {
            continue //En el fondo esto es inncesario, ya que los array en el fondo tambien son objetos, y cada elemnto tiene value, enumerable, writable, configurable 
        }else if(typeof obj[key] == 'object'){
             Object.freeze(obj[key])
            deepFreeze(obj[key])
        }else{
            continue //Idem innecesario, ya que claramente no sera un objeto
        }
    }
    return Object.freeze(obj)
}

//Version optimizada
function deepFreeze2(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  }


const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1","Curso 2"],
    caracteristicas: {
      age: 18,
      colorCabello: 'Negro',
      gustos: {
        musica: ['rock', 'punk', 'ska'],
        peliculas: ['drama', 'horros', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

  function deepFreeze2(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  }

//console.log(Object.getOwnPropertyDescriptors(juan))
deepFreeze2(juan)
console.log(Object.getOwnPropertyDescriptors(juan))
console.log('------------')

juan.name = 'Alan'
console.log(Object.getOwnPropertyDescriptors(juan.caracteristicas))

//LOHICECONCHETUMARE !!!!!!!!!!!!!!!!!!!!! 


function deepFreeze2(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  }