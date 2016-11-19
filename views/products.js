var h = require('hyperscript')

module.exports = productsTemplate


function productsTemplate(state, dispatch) {
  const products = state.products
  return h('div', products.map((product) => {
    console.log('This is the product.name', product.name);
    return h('p', product.name)
  }))
}
