'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetRecipes = (event) => {
  event.preventDefault()
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.failure)
}

const onCreateRecipes = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRecipes(formData)
    .then(ui.createRecipesSuccess)
    .then(function () {
      onGetRecipes(event)
    })
    .catch(ui.createRecipesFailure)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  //const recipeId = $(event.target).closest('section').data('id')
  const recipeId = $(event.target).data('id')
  console.log(recipeId) // now is undefined rather than an empty string
  api.deleteRecipes(recipeId)
    .then(ui.deleteRecipesSuccess)
    .then(function () {
      onGetRecipes(event)
    })
    .catch(ui.deleteRecipeFailure)
}

module.exports = {
  onGetRecipes,
  onCreateRecipes,
  onDeleteRecipe
}
