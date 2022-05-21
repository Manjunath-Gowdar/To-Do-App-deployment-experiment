import React, { useEffect } from 'react'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { listTodos } from '../actions/todoAction.js'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todoList)
  const { loading, error, todos } = todoList

  useEffect(() => {
    dispatch(listTodos())
  }, [dispatch])
  return (
    <>
      <h1>WELCOME</h1>
      <h1>My To-Do List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          {todos.map((todo) => (
            <span key={todo._id}>
              <Todo todo={todo} />
              <br />
            </span>
          ))}
        </>
      )}
    </>
  )
}

export default HomeScreen
