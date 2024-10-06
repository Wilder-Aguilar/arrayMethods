//Para encontrar la posicion de un array

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const shoppingCart = [
    {name: 'Monitor', price: 500},  
    {name: 'TV', price: 100}, 
    {name: 'TABLET', price: 100}, 
    {name: 'Audifonos', price: 300}, 
    {name: 'Teclado', price: 400}, 
    {name: 'Celular', price: 700}, 
  ]
//con forEach
months.forEach( (month,i)=> {
    if(month === "Abril"){
        console.log(`Encontrado en el indice ${i}`)
    }
})

//Encontrar el indice de abril con find

const index = months.findIndex( month => month === "Abril")
console.log(index)

//Encontrar el indice de diciembre con find (como no existe nos devolver un -1)

const index1 = months.findIndex( month => month === "Diciembre")
console.log(index1)

//En el arreglo de objetos, cuando encuentra uno deja de buscar:

const index2 = shoppingCart.findIndex(product => product.price === 100);
console.log(index2)
//CONSOLA = 1

