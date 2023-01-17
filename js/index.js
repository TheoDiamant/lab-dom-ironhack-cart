// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value

  let subtotal = product.querySelector(`.subtotal span`)
  subtotal.innerHTML = price * quantity

  return subtotal.innerHTML
  
}

function calculateAll() {
  
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let total = 0
  console.log(products)
  let allProducts = [...products]
  console.log(allProducts)
  allProducts.forEach(product => {
    updateSubtotal(product)
    total += Number(product.querySelector(".subtotal span").innerHTML);
    console.log(updateSubtotal(product))
    console.log(total)
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct() {
   let td = event.target.parentNode;
  let tr = td.parentNode.parent; // the row to be removed
  tr.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
