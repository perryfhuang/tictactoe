'use strict'
let store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Account created!\nGo out there and dominate!')
  $('form').trigger('reset')

  $('#main-menu').show()
  $('#sign-up, .back').hide()
}
const signUpFail = function (error) {
  $('#message').text('Failed to create account.\nSee error message: ' + error.message)
  $('form').trigger('reset')
}

const loginSuccess = function (response) {
  $('#message').text('Succesfully logged in.\n Let\'s play!')
  $('form').trigger('reset')
  store.user = response.user

  $('#new-game, #logout, #stats, #show-changepw').show()
  $('#login, .back').hide()
  console.log(store)
}
const loginFail = function (response) {
  $('#message').text('Login failed. =(\nPlease check credentials.')
}

const logoutSuccess = function () {
  $('#message').text('Succesfully logged out.\nCya later!')
  $('form').trigger('reset')
  store.user = null
  $('#main-menu').show()
  $('#logout, #new-game, #stats, #show-changepw, #change-pw').hide()
}
const logoutFail = function () {
  $('#message').text('Failed to logout. =(')
}

const changepwSuccess = function () {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
  $('#new-game, #logout, #stats, #show-changepw').show()
  $('#login, #changepw, .back, .pw-back').hide()
}
// const changepwFail = function () {
//   $('#message').text('Failed to change password.')
// }

const loginClick = function () {
  $('#main-menu').hide()
  $('#login, .back').show()
  $('#message').text('')
}
const signUpClick = function () {
  $('#main-menu').hide()
  $('#sign-up, .back').show()
  $('#message').text('')
}
const back = function () {
  $('#main-menu').show()
  $('#login, #sign-up, .back').hide()
  $('#message').text('')
}
const showChangepw = function () {
  $('#changepw, .pw-back').show()
  $('#new-game, #stats, #logout, #show-changepw').hide()
  $('#message').text('')
}
const pwBack = function () {
  $('#new-game, #logout, #stats, #show-changepw').show()
  $('#login, #changepw, .back, .pw-back').hide()
  $('#message').text('')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  changepwSuccess,
  // changepwFail,
  loginClick,
  signUpClick,
  back,
  showChangepw,
  pwBack
}
