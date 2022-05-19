import React from 'react'
import { Link } from 'react-router-dom'

const Todo = ({ todo }) => {
  return (
    <>
      <form>
        <input type='text' value={todo.name} />
        <Link to='/status'>
          <button>edit</button>
        </Link>
        <Link to='/edit'>
          <button>finished</button>
        </Link>
        <Link to='/remove'>
          <button>remove</button>
        </Link>
      </form>
    </>
  )
}

export default Todo
