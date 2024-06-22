import React, { useState, useEffect } from 'react'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { userListTodos, newTodoAction } from '../actions/todoAction.js'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const [newTodo, setNewTodo] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate() // initialize useNavigate

  const { userInfo } = useSelector((state) => state.userLogin)

  const todoUserList = useSelector((state) => state.todoUserList)
  const { loading, error, userTodos } = todoUserList

  useEffect(() => {
    if (userInfo) {
      dispatch(userListTodos(userInfo._id))
    } else {
      navigate('/')
    }
  }, [dispatch, userInfo, navigate])

  const handleNewTodo = (e) => {
    e.preventDefault()
    dispatch(newTodoAction({ userId: userInfo._id, todoText: newTodo }))
    dispatch(userListTodos(userInfo._id))
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <div
        style={{ padding: '10px' }}
        className='bg-gray-100 text-gray-800 antialiased px-4 flex justify-center sm:py-12'>
        <div className='relative sm:max-w-xl mx-auto text-center'>
          <div className='h-1 bg-indigo-700 mt-2 rounded'></div>

          {!userInfo && (
            <h1 
              onClick={() => navigate('/login')} 
              className='cursor-pointer'
            >
              Login To Create and See your To-do list
            </h1>
          )}
          <div className='h-1 bg-indigo-700 mt-2 rounded'></div>
        </div>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : userTodos ? (
        <>
          <div className='pb-3 px-8'>
            <input
              placeholder='Enter New Todo'
              type='text'
              id='newTodo'
              name='newTodo'
              onChange={(e) => {
                setNewTodo(e.target.value)
              }}
              className='border h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-l-md'
            />
            <button
              onClick={handleNewTodo}
              type='submit'
              className='mt-3 ml-1 bg-indigo-500 text-white h-10 w-20 rounded-r-md'>
              Add Todo
            </button>
          </div>

          {userTodos.map((todo) => (
            <span key={todo._id}>
              <Todo todo={todo} />
              <br />
            </span>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default HomeScreen