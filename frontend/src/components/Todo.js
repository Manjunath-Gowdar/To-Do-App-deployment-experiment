import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { userListTodos } from '../actions/todoAction'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const [currentStatus] = useState(todo.status)
  const handleStatus=(e)=>{
    e.preventDefault()
    axios.get(`/api/todos/status/${todo._id}/${!currentStatus}`)
    dispatch(userListTodos(todo.user))
  }

  const handleRemove = (e) => {
    e.preventDefault()
    axios.delete(`/api/todos/delete/${todo._id}`)
    dispatch(userListTodos(todo.user))

    console.log(todo)
  }
  return (
    <>
      <form>
        <Link to={`/edit/${todo._id}/${todo.name}`}>
          <input type='text' placeholder={todo.name} />
        </Link>
          <button type='submit' onClick={handleStatus} >{todo.status ? <span>true</span>:<span>false</span>}</button>
          <button type='submit' onClick={handleRemove}>
          remove
          </button>
      </form>
    </>
  )
}

export default Todo
