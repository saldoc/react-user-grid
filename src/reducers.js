import { CHANGE_SEARCH_TEXT, REQUEST_USERS_PENDING, REQUEST_USERS_FAILED, REQUEST_USERS_SUCCESS } from './constants.js'

const initialSearchState = {
  searchText: ''
}

export const searchUsers = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, { searchText: action.payload });
    default:
      return state;
  }
}

const initialUserState = {
  isPending: false,
  users: [],
  errorMessage: '',
}

export const fetchUsers = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.payload, isPending: false });
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, { errorMessage: action.payload, isPending: false });
    default:
      return state;
  }
}