'use strict'

const showRecipesTemplate = require('../templates/recipe-posting.handlebars')

const getRecipesSuccess = (data) => {
  console.log(data.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').html(showRecipesHtml)
}
const createRecipesSuccess = (data) => {
  console.log(data.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.content').val(showRecipesHtml)
}


const failure = (error) => {
  console.error(error)
}

module.exports = {
  getRecipesSuccess,
  createRecipesSuccess,
  failure
}
