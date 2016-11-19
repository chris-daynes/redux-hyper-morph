var test = require('tape')
var freeze = require('deep-freeze')
var reducer = require('../reducer')

test('hello world test', (t) => {
  t.ok(true)
  t.end()
})

test('adds a book to a the cart', (t) => {
  //arrange
  var state = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 1 // There are two items with id 1 in the cart
    }
  }

  var actual = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 2 // There are two items with id 1 in the cart
    }
  }
  //assert
  var expected = reducer(state, {type: 'ADD_TO_CART', payload: 1})
  //act
  t.deepEqual(actual, expected, 'Successfully adds a book item to the cart')
  t.end()
})
