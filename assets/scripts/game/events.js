'use strict'
const api = require('./api.js')
const ui = require('./ui')
const store = require('../store')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
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
  }

  // Only execute API call if cell is empty
  if (event.target.innerHTML === '') {
    // `If` statements to check whose turn it is, swap currentMove after executing API call and updating game board
    if (currentMove === 'x') {
      event.target.innerHTML = 'x'
      $('#message').text('O\'s turn')
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      currentMove = 'o'
    } else if (currentMove === 'o') {
      event.target.innerHTML = 'o'
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
}

module.exports = {
  onNewGame,
  onMove,
  playMenu
}
