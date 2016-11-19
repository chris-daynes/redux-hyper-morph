var h = require('hyperscript')

module.exports = ({cart, products}, dispatch) => {
  const keys = Object.keys(cart)
  const values = keys.map((key) => cart[key])
  let totalBooks = values.reduce((a, b) => a + b , 0)
  let totalPrice =
  console.log('The total books are: ', totalBooks);
  return h('div#cart', [
    totalBooks,
    ])
}
