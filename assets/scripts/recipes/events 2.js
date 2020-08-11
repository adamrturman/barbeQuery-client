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
  const recipeId = $(event.target).data('id')
  api.deleteRecipes(recipeId)
    .then(ui.deleteRecipesSuccess)
    .then(function () {
      onGetRecipes(event)
    })
    .catch(ui.deleteRecipeFailure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const recipeId = $(event.target).closest('.update-recipe-forms').data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipes(formData, recipeId)
    .then(ui.updateRecipesSuccess)
    .then(function () {
      onGetRecipes(event)
    })
    .catch(ui.updateRecipesFailure)
}

module.exports = {
  onGetRecipes,
  onCreateRecipes,
  onDeleteRecipe,
  onUpdateRecipe
}
