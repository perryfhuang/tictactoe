'use strict'
const api = require('./api.js')
const ui = require('./ui')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

module.exports = {
  onNewGame
}
