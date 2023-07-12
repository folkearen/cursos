//Apalana los arrays y a medida que aplana va haciendo cambios, mezcla entre flata y map XD
//solo permite un nivel de aplanamiento a diferencia de flat

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

let rt1 = users.map(item => item.attributes);
let rt2 = users.map(item => item.attributes).flat();
let rt3 = users.flatMap(item => item.attributes);
console.log(rt1)
console.log(rt2)
console.log(rt3)

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  //devovler solo las fechas de inicio en un array

//lo primero es crear un array con los valores del diccionario, recordar es un
//diccionario, por tanto debo convertir a arrayy para comenzar a trabajar con metodos

let fechasInicio = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate)
})

console.log(fechasInicio)

/*Con object.values obtengo un array de valores del objeto, en este caso un
array que dentro tiene dos array, que eran valores de primary y secondry calendar
cada uno de estos con objetos internos, pero comno son diccionarios, debo usar la funcion flatMap
y dentro de la mis llamar al metrodo map que hara un array  pocr cada starDate, una ves terminado
flatMap los palanara, debosmos leer desde dentro hacia fuera. */