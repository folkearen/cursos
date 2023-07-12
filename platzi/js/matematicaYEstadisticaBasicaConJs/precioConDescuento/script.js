const precioOriginal = document.querySelector('#precio');
const porcentajeDescuento = document.querySelector('#porcentaje');
const btnDescuento = document.querySelector('#btn_descuento');
const precioFinal = document.querySelector('#precio_final');

const calcularDescuento = () => {
    if(!precioOriginal.value || !porcentajeDescuento.value) {
        precioFinal.innerText = 'Debe ingresar los datos solicitados';
    } else if (porcentajeDescuento.value > 100) {
        precioFinal.innerText = 'El porcentaje a descontar no puede superar el 100%';
    }else {
        precioFinal.innerText = `El precio final es de $${(precioOriginal.value * (100 - porcentajeDescuento.value))/100}`;
    }
   
}
btnDescuento.addEventListener('click', calcularDescuento)

