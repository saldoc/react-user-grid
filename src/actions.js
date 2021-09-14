import { CHANGE_SEARCH_TEXT, REQUEST_USERS_PENDING, REQUEST_USERS_FAILED, REQUEST_USERS_SUCCESS } from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text
})

export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch("https://randomuser.me/api/?results=15")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}