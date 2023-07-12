const precioOriginal = document.querySelector('#precio');
const cuponDescuento = document.querySelector('#cupon');
const btnDescuento = document.querySelector('#btn_descuento');
const precioFinal = document.querySelector('#precio_final');

let codigos = ['descuento10', 'descuento20', 'descuento30'];
let descuento = 0 ;

const calcularDescuento = () => {
    if(!precioOriginal.value || !cuponDescuento.value) {
        precioFinal.innerText = 'Debe ingresar los datos solicitados';
        return;
    }
    if(codigos.includes(cuponDescuento.value) == false) {
        precioFinal.innerText = 'El cupón de descuento no es válido o caducado';
        return;
    }
    switch(cuponDescuento.value) {
        case 'descuento10':
            descuento = (precioOriginal.value * (100 - 10))/100;
            break;
        case 'descuento20':
            descuento = (precioOriginal.value * (100 - 20))/100;
            break;
        case 'descuento30':
            descuento = (precioOriginal.value * (100 - 30))/100;
            break;
    }
    precioFinal.innerText = `El precio final es de $${descuento}`;
    
}
btnDescuento.addEventListener('click', calcularDescuento)

//${(precioOriginal.value * (100 - porcentajeDescuento.value))/100}
