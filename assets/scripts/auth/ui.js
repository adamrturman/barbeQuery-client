'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are signed up!')
  $('form').trigger('reset')
}
const signUpFailure = function (response) {
  $('#message').text('You did not sign up!')
}


module.exports = {
  signUpSuccess,
  signUpFailure
}
