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
    data: {
      recipes: []
    }
  })
}

const createRecipes = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  getRecipes,
  createRecipes
}
