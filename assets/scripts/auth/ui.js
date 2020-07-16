'use strict'

const signUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Account created!')
}

const signUpFail = function (error) {
  $('#message').text('Failed to create account. See error message: ' + error.message)
}

module.exports = {
  signUpSuccess,
  signUpFail
}
