'use strict'
let store = require('../store')

const newGameSuccess = function (response) {
  $('.board').show(500)
  $('#main-menu, #stats, #show-changepw, #new-game, #logout').hide()
  $('#message').text('X\'s turn')

  store.game = response.game
}
const newGameFail = function () {
  $('#message').text('Failed to create new game =(')
}

const moveSuccess = function (response) {
  console.log(response)
  if (response.game.over === true) {
    // Check to see who the winner is.
    const cells = response.game.cells
    if (cells[0] === 'x' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#message').text('X wins!')
    }
    if (cells[0] === 'o' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#message').text('O wins!')
    }
    if (cells[3] === 'x' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#message').text('X wins!')
    }
    if (cells[3] === 'o' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#message').text('O wins!')
    }
    if (cells[6] === 'x' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#message').text('X wins!')
    }
    if (cells[6] === 'o' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#message').text('O wins!')
    }
    if (cells[0] === 'x' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#message').text('X wins!')
    }
    if (cells[0] === 'o' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#message').text('O wins!')
    }
    if (cells[1] === 'x' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#message').text('X wins!')
    }
    if (cells[1] === 'o' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#message').text('O wins!')
    }
    if (cells[2] === 'x' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#message').text('X wins!')
    }
    if (cells[2] === 'o' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#message').text('O wins!')
    }
    if (cells[0] === 'x' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#message').text('X wins!')
    }
    if (cells[0] === 'o' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#message').text('O wins!')
    }
    if (cells[2] === 'x' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#message').text('X wins!')
    }
    if (cells[2] === 'o' && cells[2] === cells[4] && cells[2] === cells[8]) {
      $('#message').text('O wins!')
    }


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
