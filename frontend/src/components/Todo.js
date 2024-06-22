import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { userListTodos } from '../actions/todoAction'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const [currentStatus] = useState(todo.status)
  const handleStatus = (e) => {
    e.preventDefault()
    axios.get(`/api/todos/status/${todo._id}/${!currentStatus}`)
    dispatch(userListTodos(todo.user))
    dispatch(userListTodos(todo.user))
  }

  const handleRemove = (e) => {
    e.preventDefault()
    axios.delete(`/api/todos/delete/${todo._id}`)
    dispatch(userListTodos(todo.user))
    dispatch(userListTodos(todo.user))
  }

  return (
    <>
      <form className="flex items-center justify-center space-x-2">
        <Link to={`/edit/${todo._id}/${todo.name}`}>
          <input
            className='placeholder-gray-600 font-sans border w-60 h-9 rounded-l-md p-2'
            type='text'
            placeholder={todo.name}
          />
        </Link>
        <button type='submit' onClick={handleStatus} className="flex items-center justify-center">
          {todo.status ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='text-green-500 h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='text-blue-400 h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )}
        </button>
        <button
          className='text-pink-400 h-10 rounded-md p-1 flex items-center justify-center'
          type='submit'
          onClick={handleRemove}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </form>
    </>
  )
}

export default Todo
