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
const playAgain = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const move = function (event, currentMove) {

  // Game over logic
  let gameOver = false
  if ($('.0').text() === $('.1').text() && $('.0').text() === $('.2').text() &&
   $('.0').text() !== '' && $('.1').text() !== '' && $('.2').text() !== '') {
    gameOver = true
  }
  if ($('.3').text() === $('.4').text() && $('.3').text() === $('.5').text() &&
   $('.3').text() !== '' && $('.4').text() !== '' && $('.5').text() !== '') {
    gameOver = true
  }
  if ($('.6').text() === $('.7').text() && $('.6').text() === $('.8').text() &&
   $('.6').text() !== '' && $('.7').text() !== '' && $('.8').text() !== '') {
    gameOver = true
  }
  if ($('.0').text() === $('.3').text() && $('.0').text() === $('.6').text() &&
    $('.0').text() !== '' && $('.3').text() !== '' && $('.6').text() !== '') {
    gameOver = true
  }
  if ($('.1').text() === $('.4').text() && $('.1').text() === $('.7').text() &&
    $('.1').text() !== '' && $('.4').text() !== '' && $('.7').text() !== '') {
    gameOver = true
  }
  if ($('.2').text() === $('.5').text() && $('.2').text() === $('.8').text() &&
    $('.2').text() !== '' && $('.5').text() !== '' && $('.8').text() !== '') {
    gameOver = true
  }
  if ($('.0').text() === $('.4').text() && $('.0').text() === $('.8').text() &&
    $('.0').text() !== '' && $('.4').text() !== '' && $('.8').text() !== '') {
    gameOver = true
  }
  if ($('.2').text() === $('.4').text() && $('.2').text() === $('.6').text() &&
    $('.2').text() !== '' && $('.4').text() !== '' && $('.6').text() !== '') {
    gameOver = true
  }
  // Logic to detect tie game (all cells filled with no winner)
  if ($('.0').text() !== '' && $('.1').text() !== '' && $('.2').text() !== '' &&
      $('.3').text() !== '' && $('.4').text() !== '' && $('.5').text() !== '' &&
      $('.6').text() !== '' && $('.7').text() !== '' && $('.8').text() !== '') {
    gameOver = true
  }

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
const deleteGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  move,
  deleteGame,
  playAgain
}
