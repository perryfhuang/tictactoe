'use strict'
let store = require('../store')

const newGameSuccess = function (response) {
  $('.board').show(500)
  $('.all-auth, #main-menu').hide()
  $('#message').text('')

  store.game = response.game
}
const newGameFail = function () {
  $('#message').text('Failed to create new game =(')
}

const moveSuccess = function (response) {
  console.log(response)
  $('#message').text('Move successful')
}
const moveFail = function () {
    $('#message').text('Failed to make that move.')
}

module.exports = {
  newGameSuccess,
  newGameFail,
  moveSuccess,
  moveFail
}
