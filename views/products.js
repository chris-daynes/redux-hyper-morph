var h = require('hyperscript')

module.exports = productsTemplate


function productsTemplate(state, dispatch) {
  const products = state.products
  return h('div', products.map((product) => {
    return h('div', [
      h('div', product.name),
      h('button', {onclick: () => dispatch({type: 'ADD_TO_CART', payload: product.id})}, 'add to cart')
    ])
  }))
}
