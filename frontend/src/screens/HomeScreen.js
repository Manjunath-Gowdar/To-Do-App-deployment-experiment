import React, { useState } from 'react'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { userListTodos, newTodoAction } from '../actions/todoAction.js'

const HomeScreen = () => {
  const [newTodo, setNewTodo] = useState('')

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const todoUserList = useSelector((state) => state.todoUserList)
  const { loading, error, userTodos } = todoUserList

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(userListTodos(userInfo._id))
  }

  const handleNewTodo = (e) => {
    e.preventDefault()
    dispatch(newTodoAction({ userId: userInfo._id, todoText: newTodo }))
    dispatch(userListTodos(userInfo._id))
    dispatch(userListTodos(userInfo._id))
  }

  return (
    <div className=' min-h-screen bg-gray-100'>
      <div
        style={{ padding: '10px' }}
        className=' bg-gray-100 text-gray-800 antialiased px-4  flex  justify-center sm:py-12'>
        <div className='relative sm:max-w-xl mx-auto text-center'>
          {userInfo && (
            <div>
              <div className='flex justify-center items-baseline'>
                <button
                  onClick={handleClick}
                  className=' flex border-transparent shadow-sm hover:bg-indigo-700 mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md'>
                  Show My Todos
                </button>
              </div>
            </div>
          )}

          <div className='h-1 bg-indigo-700 mt-2 rounded'></div>

          {!userInfo && <h1>Login To see your To-do's</h1>}
        </div>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : userTodos ? (
        <>
          <div className='pb-3 px-8 '>
            <input
              placeholder='Enter New Todo'
              type='text'
              id='newTodo'
              name='newTodo'
              onChange={(e) => {
                setNewTodo(e.target.value)
              }}
              className=' border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-l-md'
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
