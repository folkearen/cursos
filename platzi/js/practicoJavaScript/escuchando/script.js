const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btnCal = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const btnMensaje = document.querySelector('#btnMensaje')
const mensaje = document.querySelector('#mensaje')

const form = document.querySelector('#form')
const name = document.querySelector("#name")
const lastName = document.querySelector('#lastName')
const ident = document.querySelector('#ident')

btnMensaje.addEventListener("click", newMensaje) //Se colcola la funcion que ha de llamar una ves cumplido el evento sin
//los parentesis, ya que addEventListener los coloca por si mismo, de esta forma no escribimos codigo JS en nuestro html


form.addEventListener('submit', monstarNombre)

function escuchar() {
    const resultado =Number(input1.value ) + Number(input2.value);
    pResult.innerText = `El resultado es ${resultado}`
} //Esta funcion esta siendo llamada desde el html.

function newMensaje() {
    const msn = "Hola Mundo"
    mensaje.innerText = msn
}

function monstarNombre() {
    
    event.preventDefault()
    const nombreCompleto = `Mi nombre es ${name.value} ${lastName.value}`
    ident.innerText = nombreCompleto
}