import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from '../components/Todo'
// import todos from '../todos'

const HomeScreen = () => {
   const [todos, setTodos]= useState([])

   useEffect(()=>{
     const fetchTodos = async()=>{
       const {data} = await axios.get('/api/todos')
       setTodos(data)
     }
     fetchTodos()
   },[])
  
  return (
    <>
      <h1>WELCOME</h1>
      <h1>My To-Do List</h1>

      {todos.map((todo) => (
        <span key={todo._id}>
          <Todo todo={todo} />
          <br />
        </span>
      ))}
      {/* <p>{todos}</p> */}
    </>
  )
}

export default HomeScreen
