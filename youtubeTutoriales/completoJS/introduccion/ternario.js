const boleto = "vip";
let codigoAcceso;

if(boleto === 'vip'){
    codigoAcceso = 'vip-123-456'
}else {
    codigoAcceso =  'regular-456-789'
}
 const codigoAccesos = boleto === 'vip' ? 'vip-123-456' : 'regular-456-789';
// Dejamos cadena vacia en el else (despues de los dos puntos) para obviarlo.
