'use strict'

const showRecipesTemplate = require('../templates/recipe-posting.handlebars')

const getRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('body').removeAttr('class')
  $('#message-2').text('')
  if (data.recipes.length === 0) {
    $('#message').text('You do not have any recipes yet! Create one first!')
  } else {
    $('#message').text('Here are your recipes!')
  }
}

const createRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').text(showRecipesHtml)
  $('#message-2').text('You created a recipe!')
  $('form').trigger('reset')
}

const createRecipesFailure = (data) => {
  $('#message').text('Double check your recipe and try again! Temperture should be between 180-350ºF. Time should be between 2 and 24 hours.')
}

const deleteRecipesSuccess = (id) => {
  $(`[data-id='${id}']`).remove()
  $('#message').text('You deleted a recipe!')
}

const deleteRecipeFailure = (id) => {
  $('#message').text('You can not delete that recipe because it is not yours!')
}

const updateRecipesSuccess = (id) => {
  $('#message-2').text('You updated a recipe!')
  $('form').trigger('reset')
  $('.modal').modal('hide')
  $('.modal-backdrop').remove()
}

const updateRecipesFailure = () => {
  $('#message').text('You did not update a recipe - try again!')
  $('#message-2').text('')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getRecipesSuccess,
  createRecipesSuccess,
  createRecipesFailure,
  deleteRecipesSuccess,
  deleteRecipeFailure,
  updateRecipesSuccess,
  updateRecipesFailure,
  failure
}
