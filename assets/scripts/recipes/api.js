'use strict'

const config = require('../config')
const store = require('../store')

const getRecipes = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes',
    method: 'GET',
    user: store.user,
    data: {}
  })
}

const createRecipes = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes',
    method: 'POST',
    user: store.user,
    data: formData
  })
}

const deleteRecipes = function (recipeId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes/' + recipeId,
    method: 'DELETE',
    user: store.user
  })
}
const updateRecipes = function (formData, recipeId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes/' + recipeId,
    method: 'PATCH',
    user: store.user,
    data: formData
  })
}


module.exports = {
  getRecipes,
  createRecipes,
  deleteRecipes,
  updateRecipes
}
