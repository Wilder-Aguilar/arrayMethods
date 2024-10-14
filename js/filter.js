const shoppingCart = [
    {name: 'Monitor', price: 500},  
    {name: 'TV', price: 100}, 
    {name: 'TABLET', price: 100}, 
    {name: 'Audifonos', price: 300}, 
    {name: 'Teclado', price: 400}, 
    {name: 'Celular', price: 700}, 
  ]

  // DEVUELVE PRODUCTOS MAYORES AL PRECIO DE 400
  let resultado;
  resultado = shoppingCart.filter ( product => product.price > 400 );
  
  //DEVUELVE EL CARRITO DE COMPRAS EXCEPTO CELULAR
  resultado = shoppingCart.filter ( product => product.name !== 'Celular')

  //DEVUELVE EL CARRITO UNICAMENTE CON AUDIFONOS
  resultado = shoppingCart.filter ( product => product.name === 'Audifonos')
  
  console.log(resultado);

