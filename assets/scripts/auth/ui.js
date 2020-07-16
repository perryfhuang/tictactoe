'use strict'
let store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Account created! Go out there and dominate!')
  $('form').trigger('reset')
}
const signUpFail = function (error) {
  $('#message').text('Failed to create account. See error message: ' + error.message)
}

const loginSuccess = function (response) {
  $('#message').text('Succesfully logged in. Let\'s play!')
  $('form').trigger('reset')
  store.user = response.user
  console.log(store)
}
const loginFail = function () {
  $('#message').text('Login failed. =( \n Please check credentials.')
}

const logoutSuccess = function () {
  $('#message').text('Succesfully logged out. Cya later!')
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
