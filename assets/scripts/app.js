'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const recipeEvents = require('./recipes/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#get-recipes').on('submit', recipeEvents.onGetRecipes)
  $('#create-recipes').on('submit', recipeEvents.onCreateRecipes)
  $('.content').on('click', '.delete-recipe', recipeEvents.onDeleteRecipe)
  $('.content').on('submit', '.update-recipe-forms', recipeEvents.onUpdateRecipe)
})
