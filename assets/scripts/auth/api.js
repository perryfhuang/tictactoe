'use strict'
const config = require('../config')
// const store = require('../store')

const signUp = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}
