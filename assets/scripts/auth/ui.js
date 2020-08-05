'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are signed up!')
  $('form').trigger('reset')
}
const signUpFailure = function (response) {
  $('#message').text('You did not sign up!')
}

const signInSuccess = function (response) {
  $('#message').text('You are signed in!')
  $('form').trigger('reset')
}

const signInFailure = function (response) {
  $('#message').text('You did not sign in. Try again!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
