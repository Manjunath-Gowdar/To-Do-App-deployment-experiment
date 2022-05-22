import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

// fetch all todos from './api/todos' as public route
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.json(todos)
})

// fetch todos of logedin user from  './api/todos/id' as public route
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

// create todo from '/api/todos/:userId/:todoText' as private route
const createTodo = asyncHandler(async (req, res) => {
  const todoExists = await Todo.find({ user: req.params.userId })
    .where('name')
    .equals(req.params.todoText)

  if (todoExists.length >= 1) {
    res.status(400)
    throw new Error('Todo already exists for this user')
  }

  const todo = await Todo.create({
    user: req.params.userId,
    name: req.params.todoText,
  })

  if (todo) {
    res.status(201).json({
      _id: todo._id,
      user: todo.user,
      name: todo.name,
      status: todo.status,
    })
  }
})

export { getTodos, getTodoByUserId, updateTodo, createTodo }
