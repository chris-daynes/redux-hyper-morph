var clone = require('clone')

module.exports = reducer


function reducer (state, action) {
  var newState = clone(state)
  const { type, payload} = action
  const { cart, products } = newState
  switch (action.type) {
    case 'INIT':
      return newState
    case 'ADD_TO_CART':
    if (cart[payload] == undefined || 0) cart[payload] = 1
    else cart[payload] = cart[payload] + 1
     return newState
  }
  return newState
}
