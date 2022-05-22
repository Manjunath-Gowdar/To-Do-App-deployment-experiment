import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_RESET,
  TODO_USER_LIST_REQUEST,
  TODO_USER_LIST_SUCCESS,
  TODO_USER_LIST_FAIL,
  TODO_USER_LIST_RESET,
  TODO_NEW_REQUEST,
  TODO_NEW_SUCCESS,
  TODO_NEW_FAIL,
} from '../constants/todoConstant'

export const todoListReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return { loading: true, todos: [] }
    case TODO_LIST_SUCCESS:
      return { loading: false, todos: action.payload }
    case TODO_LIST_FAIL:
      return { loading: false, error: action.payload }
    case TODO_RESET:
      return {}
    default:
      return state
  }
}

export const todoUserListReducer = (state = { userTodos: [] }, action) => {
  switch (action.type) {
    case TODO_USER_LIST_REQUEST:
      return { loading: true, userTodos: [] }
    case TODO_USER_LIST_SUCCESS:
      return { loading: false, userTodos: action.payload }
    case TODO_USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    case TODO_USER_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const todoUpdateReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODO_UPDATE_REQUEST:
      return { loading: true, todos: [] }
    case TODO_UPDATE_SUCCESS:
      return { loading: false, todos: action.payload }
    case TODO_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const todoNewReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_NEW_REQUEST:
      return { loading: true }
    case TODO_NEW_SUCCESS:
      return { loading: false, newTodo: action.payload }
    case TODO_NEW_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
