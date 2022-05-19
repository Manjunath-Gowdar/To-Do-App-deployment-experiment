import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

// fetch all todos from './api/todos' as public route
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.json(todos)
})

// fetch single todos from './api/todos/id' as public route
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404)
    throw new Error('Todo not found')
  }
})

export { getTodos, getTodoById }
