const precioOriginal = document.querySelector('#precio');
const cuponDescuento = document.querySelector('#cupon');
const btnDescuento = document.querySelector('#btn_descuento');
const precioFinal = document.querySelector('#precio_final');

let codigos = {'descuento10':10, 
                'descuento20':20, 
                'descuento30':30};

const calcularDescuento = () => {
    if(!precioOriginal.value || !cuponDescuento.value) {
        precioFinal.innerText = 'Debe ingresar los datos solicitados';
        return;
    }
    if(!codigos[cuponDescuento.value]) {
        precioFinal.innerText = 'El cupón de descuento no es válido o caducado';
        return;
    }

    precioFinal.innerText = `El precio final es de $${(precioOriginal.value * (100 - codigos[cuponDescuento.value]))/100}`;
    
}
btnDescuento.addEventListener('click', calcularDescuento)

//${(precioOriginal.value * (100 - porcentajeDescuento.value))/100} 