import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, userListTodos } from '../actions/todoAction'

const Edit = () => {
  const location = useLocation()
  const placeHolder = location.pathname.split('/')[3].replace(/%20/g, ' ')
  const todoId = location.pathname.split('/')[2]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.userLogin)

  const [updatedTodo, setUpdatedTodo] = useState('')

  const submitHandler = () => {
    dispatch(updateTodo({ updatedTodo, todoId }))
    dispatch(userListTodos(userInfo._id))
    navigate('/')
  }
  console.log(updatedTodo)
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>Update Your Todo</label>
        <br />
        <input
          type='text'
          id='edit'
          name='edit'
          placeholder={placeHolder}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
        <input type='submit' value='update' />
      </form>
    </div>
  )
}

export default Edit
