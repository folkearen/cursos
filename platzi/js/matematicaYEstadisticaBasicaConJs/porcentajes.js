console.log((100 * 15) / 100)

console.log((100 * (100 -15))/100)

const aplicacionDescuento = (precioProducto, porcentajeDescuento) =>{
    return `El precio final es de $${(precioProducto * (100 - porcentajeDescuento))/100}`;
}

console.log(aplicacionDescuento(100, 15))
