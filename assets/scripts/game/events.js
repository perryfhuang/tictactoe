'use strict'
const api = require('./api.js')
const ui = require('./ui')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onPlayAgain = function (event) {
  api.newGame()
    .then(ui.playAgainSuccess)
    .catch(ui.playAgainFail)

  // Turn click listeneres for game board BACK ON
  $('.cell').on('click', onMove)
  console.log('Play Again successful through events.js')

  // Set first move token as 'X' on successful play again API call
  currentMove = 'x'
  console.log('Current move is: ' + currentMove + 'at playAgainSuccess')
}

// Declare first move token
let currentMove = 'x'
const onMove = function (event) {
  // if (store.game.over === true) {
  //   return null
  // }
  // console.log(event.target)
  // console.log(event.target.dataset.index)

  // Message to client if cell is taken
  if (event.target.innerHTML !== '') {
    $('#message').text('Cell is taken! Try again.')
    console.log('Why is this happening?')
  }

  // Only execute API call if cell is empty
  if (event.target.innerHTML === '') {
    // `If` statements to check whose turn it is, swap currentMove after executing API call and updating game board
    console.log('Current move is: ' + currentMove + ' at event.js')
    if (currentMove === 'x') {
      $(event.target).text('x')
      $('#message').text('O\'s turn')
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      currentMove = 'o'
    } else if (currentMove === 'o') {
      $(event.target).text('o')
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
  $('.cell').on('click', onMove)
  currentMove = 'x'
}
const gameOverPlayMenu = function () {
  $('.cell').on('click', onMove)
  currentMove = 'x'
  ui.gameOverPlayMenu()
}
module.exports = {
  onNewGame,
  onMove,
  playMenu,
  onPlayAgain,
  gameOverPlayMenu
}
