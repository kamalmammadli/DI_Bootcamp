// const products = require('./products');

// console.log(products);
const products = require('./products');

function findProductByName(productName) {
  const foundProduct = products.find(product => product.name === productName);
  console.log(findProductByName)
}

products("item")
