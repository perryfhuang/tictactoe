'use strict'
const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const move = function (event, currentMove) {
  // console.log(event.dataset.index)
  // console.log(store)
  // console.log(store.user._id)
  let gameOver = false
  // console.log($('#zero').text(), $('#one').text(), $('#two').text())
  if ($('#zero').text(), $('#one').text(), $('#two').text()) {
    gameOver = true
  }
  console.log(gameOver)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: event.dataset.index,
          value: currentMove
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  move
}
