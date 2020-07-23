'use strict'
const api = require('./api.js')
const ui = require('./ui')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
  if ($._data($('.cell')[0], 'events') === undefined) {
    $('.cell').on('click', onMove)
  }
}

const onPlayAgain = function (event) {
  api.newGame()
    .then(ui.playAgainSuccess)
    .catch(ui.playAgainFail)
  // Turn click listeners for game board BACK ON if it is off using the _data function in jquery (checking to see if an event listener exists)
  if ($._data($('.cell')[0], 'events') === undefined) {
    $('.cell').on('click', onMove)
  }
  // Set first move token as 'X' on successful play again API call
  currentMove = 'x'
}

// Declare first move token
let currentMove = 'x'
const onMove = function (event) {
  // Message to client if cell is taken
  if (event.target.innerHTML !== '') {
    $('#taken').text('Cell is taken! Try again.')
  }

  // Only execute API call if cell is empty
  if (event.target.innerHTML === '') {
    // `If` statements to check whose turn it is, swap currentMove after executing API call and updating game board
    $('#taken').text('')
    if (currentMove === 'x') {
      $(event.target).text('x')
      $(event.target).addClass('ani')
      setTimeout(function () {
        $(event.target).removeClass('ani')
      }, 500)
      $('#message').text('O\'s turn')
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      currentMove = 'o'
    } else if (currentMove === 'o') {
      $(event.target).text('o')
      $(event.target).addClass('ani')
      setTimeout(function () {
        $(event.target).removeClass('ani')
      }, 500)
      $('#message').text('X\'s turn')
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      currentMove = 'x'
    }
  }
}
const playMenu = function () {
  api.deleteGame()
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFail)
  currentMove = 'x'
}
const gameOverPlayMenu = function () {
  ui.gameOverPlayMenu()
}
module.exports = {
  onNewGame,
  onMove,
  playMenu,
  onPlayAgain,
  gameOverPlayMenu
}
