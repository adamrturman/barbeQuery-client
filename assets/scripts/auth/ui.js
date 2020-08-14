'use strict'

const store = require('../store')

$('#authenticated').hide()
$('#unauthenticated').show()

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
  $('#authenticated').show()
  $('#unauthenticated').hide()
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
  $('#message-2').text('')
}

const signOutSuccess = function () {
  store.user = null
  $('#message').text('You are signed out')
  $('#message-2').text('')
  $('.content').text('')
  $('#unauthenticated').show()
  $('#authenticated').hide()
}

const signOutFailure = function () {
  $('#message').text('You are not signed out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
