var h = require('hyperscript')

module.exports = ({cart, products}, dispatch) => {
  const totalBooks = Object.keys(cart).reduce((sum, id) => sum + cart[id] , 0)

  console.log('The total books are: ', totalBooks);
  return h('div#cart', [
    totalBooks,
    ])
}
