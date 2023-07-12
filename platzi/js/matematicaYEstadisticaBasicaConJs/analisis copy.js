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
    const empresas = {} 
    for (let persona of sal) {
        for (let trabajo of persona.trabajos) {
            if(!empresas[trabajo.empresa]) { 
            empresas[trabajo.empresa] = {}
            }
            if(!empresas[trabajo.empresa][trabajo.year]) { 
            empresas[trabajo.empresa][trabajo.year] = [] 
            }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario) 
    }
    }
    return empresas
}

console.log(datosSalarialesEmpresa(salarios))





