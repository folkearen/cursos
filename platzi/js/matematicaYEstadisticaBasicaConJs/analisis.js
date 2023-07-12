import AlanMath from "./superAlanMath.js";
import salarios from "./registroSalarios.js";

//Analisis Salarial por persona
function buscarDatosPersona(nombrePersona) {
    const datosPersonas = salarios.find(dato => dato.name == nombrePersona);
    return datosPersonas;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = buscarDatosPersona(nombrePersona).trabajos;
    const salario = trabajos.map((dato)=> dato.salario)
    const mediana = AlanMath.Mediana(salario)
    return mediana
} 

function proyeccionSalarial(nombrePersona) {
    const trabajos = buscarDatosPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((dato)=> dato.salario);
    let porcentajesCrecimiento = [];
    for (let i = 1; i < salarios.length; i++) {
        const salarioActual = salarios[i];
        const salarioPasado = salarios[i-1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimieto = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimieto);
    }
    const mediaDeCrecimiento = AlanMath.Mediana(porcentajesCrecimiento);
    const ultimoSalario = salarios[salarios.length -1] ;
    const aumento = ultimoSalario * mediaDeCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
    return nuevoSalario
  
}

// ============================================================================================

/*Analisis salarial por empresa
este tipo de comentario me permite saltar lineas
la puta madre me vengo a entrear recien ahora...
*/

function datosSalarialesEmpresa(sal) {
    const empresas = {} //Guardara informacion de la los sueldos de cada anio entregadaos a x personas, tendra un propiedad por cada empresa
    for (let persona of sal) {//Recorremos el arreglo de salarios, devuelve un obj con pro name:'Nombre' y trabajo:[{year: n, empresa:"", salario:n}]
        for (let trabajo of persona.trabajos) {//recorremos el obj persona que tiene los elementos del paso anterio, pero buscamos el elemento trabajos:[{year: n, empresa:"", salario:n}]
        //entonces trabajo = [{year: n, empresa:"", salario:n}]
            if(!empresas[trabajo.empresa]) { //Si en el objeto empresas. no existe una empresa, nombrada en empresa:'' de el arreglo trabajo, que recorre la propiedad trabajos: del arreglo salarios
            empresas[trabajo.empresa] = {}
            }
            if(!empresas[trabajo.empresa][trabajo.year]) { // empresas:{ trabajo.empresas:{trabajo.year} }
            //consulta si dentro del obj empresas su elemento 'empresa' que a su vez tiene como propieda un objeto con la prieda anio yerar, y le crea un year: []
            empresas[trabajo.empresa][trabajo.year] = [] //resultando empresas:{nombreEmpres:{year:[]}}
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario) //Dentro del ultimo array creado year: [] le insertamos los salarios de ese anio en particular 
    }
    }
    return empresas
}
// console.log(datosSalarialesEmpresa(salarios) )

function mediaAnioEmpresaEspacifica(listaEmpresas, nombre, year) {
    if(!listaEmpresas[nombre]) {
        return 'No existe empresa'
    }
    if(!listaEmpresas[nombre][year]) {
        return 'No exite el anio'
    }
    let salarioAnioEspecifico = listaEmpresas[nombre][year]
    let mediaAnioEsoecifico = AlanMath.Mediana(salarioAnioEspecifico)
    return mediaAnioEsoecifico
}

// let empresasAnalisis = datosSalarialesEmpresa(salarios)
// console.log(Object.keys(empresasAnalisis))
// console.log(Object.values(empresasAnalisis))
// console.log(Object.entries(empresasAnalisis))

// console.log(mediaAnioEmpresaEspacifica(empresasAnalisis, 'Industrias Mokepon', 2021))
//  console.log(empresasAnalisis['Freelance']['2018'])

function mediaAniosEmpresa() {
    const datosEmpresas = datosSalarialesEmpresa(salarios);
    let mediaPorAnios = {};
    for(let empresa of Object.keys(datosEmpresas)) {
            mediaPorAnios[empresa] = {}
        for(let year of Object.keys(datosEmpresas[empresa])) {
            mediaPorAnios[empresa][year] = AlanMath.Mediana(datosEmpresas[empresa][year]); 
        }
    }
    return mediaPorAnios
   
}
 console.log(mediaAniosEmpresa())

// console.log(mediaAniosEmpresa())
function proyeccionSalarialEmpresas() {
    let mediasSalariales = mediaAniosEmpresa()
    let anios = Object.values(mediasSalariales)
    let porcentajesCrecimiento = []
    for (let anio of anios ) {
       let mediasPorAnios = Object.values(anio);
       for (let i = 1; i < mediasPorAnios.length; i++) {
        const salarioActual = mediasPorAnios[i];
        const salarioPasado = mediasPorAnios[i-1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimieto = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimieto);
        }
       
    }
    
    
    console.log(porcentajesCrecimiento)
    // mediaSalarialesUltimosanios = 
}
proyeccionSalarialEmpresas()
 

