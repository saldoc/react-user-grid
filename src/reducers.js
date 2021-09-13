import { CHANGE_SEARCH_TEXT } from './constants.js'

const initialState = {
  searchText: ''
}

export const searchUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, { searchText: action.payload });
    default:
      return state;
  }
}