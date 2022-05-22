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

  const handleClick = () => {
    dispatch(userListTodos(userInfo._id))
  }

  const handleNewTodo = (e) => {
    e.preventDefault()
    dispatch(newTodoAction({ userId: userInfo._id, todoText: newTodo }))
    dispatch(userListTodos(userInfo._id))
    console.log('todo added')
  }

  return (
    <>
      {userInfo && (
        <>
          <h2>Welcome {userInfo.name}</h2>
          <button onClick={handleClick}>Show All My Todos</button>
          <br />
          <span style={{ paddingTop: '20px' }}>&nbsp; </span>
        </>
      )}
      {!userInfo && <h1>Login To see your To-do's</h1>}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : userTodos ? (
        <>
          <div>
            <input
              type='text'
              id='newTodo'
              name='newTodo'
              placeholder='Add New Todo'
              onChange={(e) => {
                setNewTodo(e.target.value)
              }}
            />
            <button type='submit' onClick={handleNewTodo}>
              Add Todo{' '}
            </button>
          </div>
          <br />
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
    </>
  )
}

export default HomeScreen
