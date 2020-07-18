'use strict'
const store = require('../store')
const gameEvents = require('./events')

const newGameSuccess = function (response) {
  $('.board, #play-menu').show(500)
  $('#main-menu, #stats, #show-changepw, #new-game, #logout').hide()
  $('#message').text('X\'s turn')

  store.game = response.game
}
const newGameFail = function () {
  $('#message').text('Failed to create new game =(')
}

const playAgainSuccess = function (response) {
  $('.0 ,.1, .2, .3, .4, .5, .6, .7, .8').text('')
  $('.board, #play-menu').hide(500)
  $('.board, #play-menu').show(500)
  $('#main-menu, #stats, #show-changepw, #new-game, #logout').hide()
  $('#message').text('X\'s turn')

  store.game = response.game
  console.log(store)
  // Turn click listeners BACK ON for the cells after Play Again is successful
  $('.cell').on('click', gameEvents.onMove)
}
const playAgainFail = function () {
  $('#message').text('Failed to create new game =(')
}

const moveSuccess = function (response) {
  console.log(response)
  if (response.game.over === true) {
    // Check to see who the winner is. First check if it's a tie (if all cells are filled). Must place all logic AFTER tie logic in case there is a case where winner is decided on the last cell.
    const cells = response.game.cells
    if (response.game.cells.includes('') === false) {
      $('#message').text('It\'s a tie!')
    }
    if (cells[0] === 'x' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#message').text('X wins by first row!')
    }
    if (cells[0] === 'o' && cells[0] === cells[1] && cells[0] === cells[2]) {
      $('#message').text('O wins by first row!')
    }
    if (cells[3] === 'x' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#message').text('X wins by second row!')
    }
    if (cells[3] === 'o' && cells[3] === cells[4] && cells[3] === cells[5]) {
      $('#message').text('O wins by second row!')
    }
    if (cells[6] === 'x' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#message').text('X wins by third row!')
    }
    if (cells[6] === 'o' && cells[6] === cells[7] && cells[6] === cells[8]) {
      $('#message').text('O wins  by third row!')
    }
    if (cells[0] === 'x' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#message').text('X wins by first column!')
      console.log('X wins by first column.')
    }
    if (cells[0] === 'o' && cells[0] === cells[3] && cells[0] === cells[6]) {
      $('#message').text('O wins by first column!')
      console.log('O wins by first column.')
    }
    if (cells[1] === 'x' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#message').text('X wins by second column!')
    }
    if (cells[1] === 'o' && cells[1] === cells[4] && cells[1] === cells[7]) {
      $('#message').text('O wins by second column!')
    }
    if (cells[2] === 'x' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#message').text('X wins by third column!')
    }
    if (cells[2] === 'o' && cells[2] === cells[5] && cells[2] === cells[8]) {
      $('#message').text('O wins by third column!')
    }
    if (cells[0] === 'x' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#message').text('X wins by diagonal!')
    }
    if (cells[0] === 'o' && cells[0] === cells[4] && cells[0] === cells[8]) {
      $('#message').text('O wins by diagonal!')
    }
    if (cells[2] === 'x' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#message').text('X wins by diagonal!')
    }
    if (cells[2] === 'o' && cells[2] === cells[4] && cells[2] === cells[6]) {
      $('#message').text('O wins by diagonal!')
    }
    // Turn off cell click listeners if game is over
    $('.cell').off('click')

    // Bring up modal on game over for option to 'Play Again' or go to 'Main Menu'
    $('#gameOver').modal('show')
  }
}
const moveFail = function () {
  $('#message').text('Failed to make that move.')
}

const deleteGameSuccess = function () {
  $('#message').text('Returned to Main Menu and deleted current game!')
  $('.board, #play-menu').hide()
  $('#new-game, #stats, #show-changepw, #logout').fadeIn(500)
  $('.0 ,.1, .2, .3, .4, .5, .6, .7, .8').text('')
}
const deleteGameFail = function () {
  $('#message').text('Could not move to main menu or delete current game.')
}

const gameOverPlayMenu = function () {
  console.log('going to main menu')
  $('.board, #play-menu').hide()
  $('#new-game, #stats, #show-changepw, #logout').fadeIn(500)
  $('#message').text('')
}
module.exports = {
  newGameSuccess,
  newGameFail,
  moveSuccess,
  moveFail,
  deleteGameSuccess,
  deleteGameFail,
  playAgainSuccess,
  playAgainFail,
  gameOverPlayMenu
}
