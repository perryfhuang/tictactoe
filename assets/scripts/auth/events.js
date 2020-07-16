'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onLogin = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.login(formData)
    .then(ui.loginSuccess)
    .catch(ui.loginFail)
}

const onLogout = function () {
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFail)
}

const onChangepw = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changepw(formData)
    .then(ui.changepwSuccess)
    .catch(ui.changepwFail)
}

module.exports = {
  onSignUp,
  onLogin,
  onLogout,
  onChangepw
}
