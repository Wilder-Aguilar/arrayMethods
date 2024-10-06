const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
    {nombre: 'Monitor', precio: 500},  
    {nombre: 'TV', precio: 100}, 
    {nombre: 'TABLET', precio: 100}, 
    {nombre: 'Audifonos', precio: 300}, 
    {nombre: 'Teclado', precio: 400}, 
    {nombre: 'Celular', precio: 700}, 
  ]

//Comprobar si un valor existe en un arreglo
  //Con forEach
meses.forEach(mes => {
    if ( mes === 'Enero'){
        console.log("Enero si existe")
    }
})
    //Con includes (para arreglos, NO SOPORTA DE OBJETOS)
const resultado = meses.includes('Enero');
console.log(resultado)

const resultado1 = meses.includes('Diciembre');
console.log(resultado1)


//.SOME APLICA A LOS DOS CASOS
    // .some para arreglo de objetos
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular'
})
console.log(existe);

const existe1 = carrito.some(producto => producto.nombre === 'Celular'
)
console.log(existe1);

    // some para arreglos tradicionales
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2)