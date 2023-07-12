var frutas = ["Manzana", "Naranja", "Pera"]

console.log(frutas) //Muestra los elemntos del array por pantalla

frutas.length() //Arroja la longitud de un array
frutas.push("uva") //Añade un lemento al final de la lista, para el caso uva
frutas.pop() //Elimina el último elemento de la lista
frutas.unshift("Durazno")//Ingresa el elemen%to al inicio de la lista.
frutas.shift()//Elimina el primer elemento del array
frutas.indexOf("Pera") //Arroja el indice del elmento indicado, siempre que esté en el arreglo

//Recorrido de Array, en este caso array de objetos
var productos = [
    {nombre: "Bicilceta", precio: 5400},
    {nombre: "TV", precio: 2500},
    {nombre: "Libro", precio: 600},
    {nombre: "Celular", precio: 12600},
    {nombre: "Laptor", precio: 32600},
    {nombre: "Teclado", precio: 1700},
    {nombre: "Audifonos", precio: 500}
];

//Métodos que generan arrays nuevos
var articuloFiltrados = productos.filter(function(articulo) {
  return articulo.precio <= 700;
} );
var nombreArticulos = productos.map(function(articulo) {
  return articulo.name ;
});
var precioArticulos = productos.map(function(articulo) {
  return articulo.precio ;
});
var encuentraArticulos = productos.find(function(articulo) {
  return articulo.nombre === "Audifonos" //find solo devuelve la primera coincidencia que encuentra
});
var articulosBaratos = productos.some(function(articulo) {
  return articulo.costo <= 1000;
}); //En este caso solo devuleve true o false a modo de confimación de existencias.


//Metodo no generan arrays nuevos
productos.forEach(function(articulo) {
  console.log(articulo.nombre)
});
productos.forEach(function(articulo) {
  console.log(articulo.precio)
});