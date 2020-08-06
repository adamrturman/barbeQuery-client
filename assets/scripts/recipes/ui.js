'use strict'

const showRecipesTemplate = require('../templates/recipe-posting.handlebars')

const getRecipesSuccess = (data) => {
  console.log(data.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  console.log("This is showRecipesHtml", showRecipesHtml)
  $('.content').html(showRecipesHtml)
  $('#message').text('Here are your recipes!')

}
const createRecipesSuccess = (data) => {
  console.log(data)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').text(showRecipesHtml)
  $('#message').text('You created a recipe!')
}


const failure = (error) => {
  console.error(error)
}

module.exports = {
  getRecipesSuccess,
  createRecipesSuccess,
  failure
}
