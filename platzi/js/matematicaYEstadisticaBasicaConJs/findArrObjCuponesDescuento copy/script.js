const precioOriginal = document.querySelector('#precio');
const cuponDescuento = document.querySelector('#cupon');
const btnDescuento = document.querySelector('#btn_descuento');
const precioFinal = document.querySelector('#precio_final');

let codigos = [];
codigos.push({name:'descuento10', desc: 10})
codigos.push({name:'descuento20', desc: 20})
codigos.push({name:'descuento30', desc: 30})



const calcularDescuento = () => {
    if(!precioOriginal.value || !cuponDescuento.value) {
        precioFinal.innerText = 'Debe ingresar los datos solicitados';
        return;
    }
    // if(codigos.includes(cuponDescuento.value) == false) {
    //     precioFinal.innerText = 'El cupón de descuento no es válido o caducado';
    //     return;
    // }

    let cuponValido = codigos.find(function(codigos) {return codigos.name == cuponDescuento.value })
   

    if(cuponValido) {
         precioFinal.innerText = `El precio final es de $${(precioOriginal.value * (100 - cuponValido.desc))/100}`;
    }else {
        precioFinal.innerText = 'El cupón no es valido o caducado'
    }
    
}
btnDescuento.addEventListener('click', calcularDescuento)

//${(precioOriginal.value * (100 - porcentajeDescuento.value))/100}
