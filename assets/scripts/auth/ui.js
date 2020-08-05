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
  store.user = response.user
  $('#message').text('You are signed in!')
  $('form').trigger('reset')
//  $('#authenticated').show()
  //$('#unauthenticated').hide()
}

const signInFailure = function (response) {
  $('#message').text('You did not sign in. Try again!')
}

const changePasswordSuccess = function (response) {
  $('#message').text('You changed your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (response) {
  $('#message').text('You did not change your password!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
