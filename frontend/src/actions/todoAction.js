import axios from 'axios'
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_USER_LIST_REQUEST,
  TODO_USER_LIST_SUCCESS,
  TODO_USER_LIST_FAIL,
  TODO_NEW_REQUEST,
  TODO_NEW_SUCCESS,
  TODO_NEW_FAIL,
} from '../constants/todoConstant'

export const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_REQUEST })

    const { data } = await axios.get('/api/todos')

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TODO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userListTodos = (dataOne) => async (dispatch) => {
  try {
    dispatch({ type: TODO_USER_LIST_REQUEST })

    const { data } = await axios.get(`/api/todos/${dataOne}`)

    dispatch({
      type: TODO_USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TODO_USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateTodo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_UPDATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'Application/json',
      },
    }

    const { receivedData } = await axios.put(
      `/api/todos/edit/${data.todoId}`,
      data,
      config
    )

    dispatch({
      type: TODO_UPDATE_SUCCESS,
      payload: receivedData,
    })
  } catch (error) {
    dispatch({
      type: TODO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const newTodoAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_NEW_REQUEST,
    })

    const { receivedData } = await axios.get(`/api/todos/${data.userId}/${data.todoText}`)

    dispatch({
      type: TODO_NEW_SUCCESS,
      payload: receivedData,
    })
  } catch (error) {
    dispatch({
      type: TODO_NEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
