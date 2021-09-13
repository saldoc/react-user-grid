import { CHANGE_SEARCH_TEXT } from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text
})