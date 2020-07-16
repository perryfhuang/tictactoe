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
  console.log(event.dataset.index)
  console.log(store)
  console.log(store.user._id)
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
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  move
}
