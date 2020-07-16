'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const ui = require('./auth/ui')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#login').on('submit', authEvents.onLogin)
  $('#logout').on('click', authEvents.onLogout)
  $('#changepw').on('submit', authEvents.onChangepw)

  $('#login-button').on('click', ui.onLoginClick)

  $('#new-game').on('click', gameEvents.onNewGame)

  $('.cell').on('click', gameEvents.onMove)
})
