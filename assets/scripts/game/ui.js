'use strict'
let store = require('../store')

const newGameSuccess = function (response) {
  $('.board').show(300)
}

module.exports = {
  newGameSuccess
}
