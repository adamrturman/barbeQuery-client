'use strict'

const showRecipesTemplate = require('../templates/recipe-posting.handlebars')

const getRecipesSuccess = (data) => {
  console.log(data.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
  $('#message').text('Here are your recipes!')
}

const createRecipesSuccess = (data) => {
  console.log(data)
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

const updateRecipesSuccess = () => {
  console.log("This worked")
  $('#message-2').text('You updated a recipe!')
  $('form').trigger('reset')
}

const updateRecipesFailure = () => {
  console.log("This did not work")
  $('#message').text('You did not updated a recipe - try again!')
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
