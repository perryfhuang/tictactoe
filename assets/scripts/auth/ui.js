'use strict'
let store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Account created!\nGo out there and dominate!')
  $('form').trigger('reset')
}
const signUpFail = function (error) {
  $('#message').text('Failed to create account.\nSee error message: ' + error.message)
}

const loginSuccess = function (response) {
  $('#message').text('Succesfully logged in.\n Let\'s play!')
  $('form').trigger('reset')
  store.user = response.user
}
const loginFail = function () {
  $('#message').text('Login failed. =(\nPlease check credentials.')
}

const logoutSuccess = function () {
  $('#message').text('Succesfully logged out.\nCya later!')
  $('form').trigger('reset')
  store.user = null
}
const logoutFail = function () {
  $('#message').text('Failed to logout. =(')
}

const changepwSuccess = function () {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
}
const changepwFail = function () {
  $('#message').text('Failed to change password.')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  changepwSuccess,
  changepwFail
}
