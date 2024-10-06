const shoppingCart = [
    {name: 'Monitor', price: 500},  
    {name: 'TV', price: 100}, 
    {name: 'TABLET', price: 100}, 
    {name: 'Audifonos', price: 300}, 
    {name: 'Teclado', price: 400}, 
    {name: 'Celular', price: 700}, 
  ]

//forEach
  let total= 0;
  shoppingCart.forEach( producto => total += producto.price);
  console.log (total);

//Reduce

  let resultado = shoppingCart.reduce((total,producto) => total + producto.price, 0 );
  console.log(resultado);