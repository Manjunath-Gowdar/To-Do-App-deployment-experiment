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
    dispatch(userListTodos(userInfo._id))
  }

  return (
    <div className='min-h-screen bg-gray-100 text-gray-800  py-6 flex  justify-center sm:py-12'>
      <div className='relative  sm:max-w-xl mx-auto text-center'>
        <label className='font-sans text-2xl font-semibold ' htmlFor='email  '>
          Update Your Todo
        </label>
        <div className='relative mt-4 bg-white shadow-md sm:rounded-lg text-left'>
          <div className='py-6 px-8 flex'>
            <input
              type='text'
              placeholder={placeHolder}
              onChange={(e) => setUpdatedTodo(e.target.value)}
              className=' border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md'
            />
            <button
              onClick={submitHandler}
              className='mt-3 ml-1 bg-indigo-500 text-white h-9 w-20 rounded-lg'>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
