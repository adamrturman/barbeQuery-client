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
  $('#message').text('You created a recipe!')
}
const createRecipesFailure = (data) => {
  $('#message').text('Double check your recipe and try again!')
}

const deleteRecipesSuccess = (id) => {
  $(`[data-id='${id}']`).remove()
  $('#message').text('You deleted a recipe!')
}

const deleteRecipeFailure = (id) => {
  $('#message').text('You can not delete that recipe because it is not yours!')
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
  failure
}
