import React from 'react'
import { Link } from 'react-router-dom'

const Todo = ({ todo }) => {
  return (
    <>
      <form>
        <input type='text' placeholder={todo.name} />
        <Link to='/status'>
          <button>{todo.status}</button>
        </Link>
        <Link to='/edit'>
          <button>edit</button>
        </Link>
      </form>
    </>
  )
}

export default Todo
