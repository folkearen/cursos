const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} =HIGH_TEMPERATURES //OJS las variables deben tener el mismo nombre de las propiedades, sino las declarara como undefined
  
console.log(today)
console.log(tomorrow)

  // Only change code above this line

  const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today: highToday ,tomorrow: highTomorrow } = HIGH_TEMPERATURES2; //Esta sintaxis si permite asignar nombres diferentes
  //a las variables que recibiran como valor los valores de la propiedad correspondiente del objeto
  
  // Only change code above this line

  console.log(highToday)
  console.log(highTomorrow)

  //desestructuracion de objetos anidads 
  const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

  const { johnDoe: { age, email }} = user;

  const { johnDoe: { age: userAge, email: userEmail }} = user;

  //mas anidacion 
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  
  const {today:{low: lowTodayX, high: highTodayX}, tomorrow: {low: lowTomx, high: highTomx}} = LOCAL_FORECAST
  // Only change code above this line

  console.log(lowTodayX)
  console.log(highTodayX)
  console.log(lowTomx)
  console.log(highTomx)

let a = 8, b = 6;
[a,b] = [b,a] 
//Intercambiando datos, encerramos nuestras variables sueltas en un matriz, y le asignamos como valor de desestructuracio
//Otra matriz que tendra nuestras variables intercambiadas, esto sucede por que a la inzquierda del igual cada valor asumira
//un valor de la izquieda guiandose por el numero indice

//ejem

const [x,y,z] =[1,2,3]
console.log(x,y,z) // 123 es la salida x asume el valor del primer indice que es uno, y el del segundo etc.

const  [,,,r,,,,t] = [1,2,3,4,5,6,7,8]//Puedo salta elemntos con , hasta llegar al indice del elemento que deseo asignar en, 
//este caso 4 y 8, cada espacio entre las comas representa un indice del array derecho,
console.log(r,t)

//Seleccionando ciertos eelmentos y creando un nuevo array con el resto

const [i, j, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(i, j);
console.log(arr);

function removeFirstTwo(list) {
    // Only change code below this line
    const [,, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }

 // Use una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo()debe devolver un subarreglo del arreglo original listcon los primeros dos elementos omitidos.


  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  //Desestructurando a prametro de funcion

  const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }
  const profileUpdate2 = ({ name, age, nationality, location }) => {

  }

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) => (max + min) / 2.0; 
  // Only change code above this line