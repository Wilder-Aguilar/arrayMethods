const shoppingCart = [
    {name: 'Monitor', price: 500},  
    {name: 'TV', price: 100}, 
    {name: 'TABLET', price: 100}, 
    {name: 'Audifonos', price: 300}, 
    {name: 'Teclado', price: 400}, 
    {name: 'Celular', price: 700}, 
  ]

  //forEach
  let resultado = "";
  shoppingCart.forEach((product, index) => {
    if(product.name === "TABLET"){
        resultado = shoppingCart[index]
    }
  });

  console.log(resultado)

  // .find
  const result=shoppingCart.find(product => product.name === "TABLET");
  console.log(result)
