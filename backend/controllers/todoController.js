import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

// fetch all todos from './api/todos' as public route
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.json(todos)
})

// fetch single todos from './api/todos/id' as public route
const getTodoByUserId = asyncHandler(async (req, res) => {
  const todo = await Todo.find({ user: req.params.id })
  if (todo) {
    res.json(todo)
  } else {
    res.status(404)
    throw new Error('Todo not found')
  }
})

// update todo from '/api/todos/edit/todoId' as private route
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.todoId)
  if (todo) {
    ;(todo.user = todo.user),
      (todo.name = req.body.updatedTodo),
      (todo.status = todo.status)

    const latestTodo = await todo.save()
    res.json(latestTodo)
  } else {
    res.status(404)
    throw new Error('Todo not found')
  }
})

export { getTodos, getTodoByUserId, updateTodo }
