'use strict'
let store = require('../store')

const newGameSuccess = function (response) {
  $('.board').show(500)
  $('#new-game, #logout').hide()
  $('.all-auth, #main-menu, #stats, #show-changepw').hide()
  $('#message').text('X\'s turn')

  store.game = response.game
}
const newGameFail = function () {
  $('#message').text('Failed to create new game =(')
}

const moveSuccess = function (response) {
  console.log(response)
  if (response.game.over === true) {
    $('#message').text('Game Over!')

    $('.cell').off('click')
  }
  if (response.game.cells.includes('') === false) {
    $('#message').text('It\'s a tie!')
    $('.cell').off('click')
  }
  // else {
  //   $('#message').text('Move successful')
  // }
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
