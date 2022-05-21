import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { listTodos, updateTodo } from '../actions/todoAction'

const Edit = () => {
  const location = useLocation()
  const placeHolder = location.pathname.split('/')[3].replace(/%20/g, ' ')
  const todoId = location.pathname.split('/')[2]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [updatedTodo, setUpdatedTodo] = useState('')

  const submitHandler = () => {
    dispatch(updateTodo({ updatedTodo, todoId }))
    dispatch(listTodos)
    navigate('/')
  }
  console.log(updatedTodo)
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for='email'>Edit Your Todo</label>
        <br />
        <input
          type='text'
          id='edit'
          name='edit'
          placeholder={placeHolder}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
        <p>{updatedTodo}</p>
        <input type='submit' value='update' />
      </form>
    </div>
  )
}

export default Edit
