import React from 'react'
import { Link } from 'react-router-dom'

const Todo = ({ todo }) => {
  return (
    <>
      <form>
        <Link to={`/edit/${todo._id}/${todo.name}`}>
          <input type='text' placeholder={todo.name} />
        </Link>
        <Link to='/status'>
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
