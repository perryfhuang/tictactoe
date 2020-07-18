'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const ui = require('./auth/ui')

$(() => {
  $('#main-menu').slideDown(500)

  // Auth event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#login').on('submit', authEvents.onLogin)
  $('#logout').on('click', authEvents.onLogout)
  $('#changepw').on('submit', authEvents.onChangepw)
  $('#stats').on('click', authEvents.stats)

  // UI flow/menu click listeners
  $('#login-button').on('click', ui.loginClick)
  $('#sign-up-button').on('click', ui.signUpClick)
  $('.back').on('click', ui.back)
  $('#show-changepw').on('click', ui.showChangepw)
  $('.pw-back').on('click', ui.pwBack)

  // Game events
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.cell').on('click', gameEvents.onMove)
  $('#play-menu').on('click', gameEvents.playMenu)
})
