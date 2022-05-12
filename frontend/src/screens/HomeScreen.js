import React from 'react'
import Todo from '../components/Todo'
import todos from '../todos'


const HomeScreen = () => {
  return (
    <>
      <h1>My To-Do List</h1>

      {todos.map((todo) => (
        <span key={todo._id}>
          <Todo todo={todo} />
          <br />
        </span>
      ))}
    </>
  )
}

export default HomeScreen
