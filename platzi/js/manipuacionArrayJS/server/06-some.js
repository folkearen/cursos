//Devuelve true si al menos un elemento cumple una condicion.

let number = [1,2,3,4,5,6];
let rta = false;
for(let i = 0; i < number.length; i++) {
    if(number[i] % 2 === 0) {
        rta = true;
        break;
    }
};

let rta2 = false
rta2 = number.some(item => item % 2 === 0);



const orders = [
    {
        costumerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        costumerName: 'Zulema',
        total: 120,
        delivered: true
    },
    {
        costumerName: 'Santiago',
        total: 180,
        delivered: false
    },
    {
        costumerName: 'Valentina',
        total: 240,
        delivered: true
    }
];

let noDelivered = orders.some(item => !item.delivered) ? "Faltan entregas" :"Todo entregado";


function comprobarEntrega(arr) {
    let estadoEntregas = "Todo Entregado";
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].delivered){
            estadoEntregas = "Faltan Entregas"
            break;
        }
    }
    return estadoEntregas
}

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment =   {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const isOverlap = newDate => dates.some(date => areIntervalsOverlapping({start: date.startDate, end: date.endDate}, {start: newDate.startDate, end: newDate.endDate})) ? "Hay tope de horario": "";

console.log(isOverlap(newAppointment)) //Retorna true por que hay un tope de horario, pero puedo ocupar ese true para condicionar la impresion del mensje hay tope de horario

  