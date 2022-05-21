import axios from 'axios'
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAIL,
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

export const updateTodo = (data) => async (dispatch, getState) => {
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
