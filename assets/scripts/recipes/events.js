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
    .catch(ui.failure)
}

module.exports = {
  onGetRecipes,
  onCreateRecipes
}
