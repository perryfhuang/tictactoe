'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const ui = require('./auth/ui')

$(() => {
  const cursor = document.querySelector('.cursor')
  const typedText = document.querySelector('.typed-text')
  const title = 'Tic Tac Toe'
  const typingDelay = 200
  const eraseDelay = 75
  const newTextDelay = 2000
  let charIndex = 0

  function type () {
    if (charIndex < title.length) {
      typedText.textContent += title.charAt(charIndex)
      charIndex++
      setTimeout(type, typingDelay)
    } else {
      // erase
      setTimeout(erase, newTextDelay)
    }
  }

  function erase () {
    if (charIndex > 0) {
      typedText.textContent = title.substring(0, charIndex - 1)
      charIndex--
      setTimeout(erase, eraseDelay)
    } else {
      setTimeout(type, typingDelay)
    }
  }
  setTimeout(type, 750)

  $('#main-menu').fadeIn(500)

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

  $('#play-again').on('click', gameEvents.onPlayAgain)
  $('#game-over-play-menu').on('click', gameEvents.gameOverPlayMenu)
})
