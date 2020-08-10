'use strict'

const showRecipesTemplate = require('../templates/recipe-posting.handlebars')

const getRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('#message').text('Here are your recipes!')
}

const getOneRecipeSuccess = (data) => {
    const showRecipesHtml = showRecipesTemplate({ recipes: data.recipe })
    $('.content').html(showRecipesHtml)
}

const createRecipesSuccess = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').text(showRecipesHtml)
  $('#message-2').text('You created a recipe!')
  $('form').trigger('reset')
}

const createRecipesFailure = (data) => {
  $('#message').text('Double check your recipe and try again!')
}

const deleteRecipesSuccess = (id) => {
  $(`[data-id='${id}']`).remove()
  $('#message-2').text('You deleted a recipe!')
}

const deleteRecipeFailure = (id) => {
  $('#message').text('You can not delete that recipe because it is not yours!')
}

const updateRecipesSuccess = (id) => {
  $('#message-2').text('You updated a recipe!')
  $('form').trigger('reset')
  $('#update-modal').modal('hide')
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
  getOneRecipeSuccess,
  createRecipesSuccess,
  createRecipesFailure,
  deleteRecipesSuccess,
  deleteRecipeFailure,
  updateRecipesSuccess,
  updateRecipesFailure,
  failure
}
