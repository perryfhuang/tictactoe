'use strict'
const api = require('./api.js')
const ui = require('./ui')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}
// Declare first move token
let currentMove = 'x'
const onMove = function (event) {
  // console.log(event.target)
  // console.log(event.target.dataset.index)

  // Only execute API call if cell is empty
  if (event.target.innerHTML === '') {
    let gameOver = false

    // console.log($('div.0').text(), $('div.1').text(), $('div.2').text())
    // // Logic to test if game is over!!
    // if ( $('div.0').text() === $('div.1').text() === $('div.2').text() ) {
    //   gameOver = true
    // }

    // `If` statements to check whose turn it is, swap currentMove after executing API call and updating game board
    if (currentMove === 'x') {
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      event.target.innerHTML = 'x'
      currentMove = 'o'
    } else if (currentMove === 'o') {
      api.move(event.target, currentMove)
        .then(ui.moveSuccess)
        .catch(ui.moveFail)
      event.target.innerHTML = 'o'
      currentMove = 'x'
    }
  }
}

module.exports = {
  onNewGame,
  onMove
}
