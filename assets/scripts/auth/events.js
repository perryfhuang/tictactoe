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

module.exports = {
  onSignUp
}
