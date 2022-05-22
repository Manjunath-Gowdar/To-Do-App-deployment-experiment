import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { userListTodos } from '../actions/todoAction'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const handleRemove = (e) => {
    e.preventDefault()
    axios.delete(`/api/todos/delete/${todo._id}`)
    dispatch(userListTodos(todo.user))

    console.log(todo)
  }
  return (
    <>
      <form>
        <Link to={`/edit/${todo._id}/${todo.name}`}>
          <input type='text' placeholder={todo.name} />
        </Link>
        <Link to='/status'>
          <button>finished</button>
        </Link>
        <button type='submit' onClick={handleRemove}>
          remove
        </button>
      </form>
    </>
  )
}

export default Todo
