import express from 'express'
import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

const router = express.Router()


// fetch all todos from './api/todos' as public route 
router.get('/', asyncHandler(async (req,res)=>{
    const todos = await Todo.find({})
    res.json(todos)
}))

// fetch single todo from './api/todos/id' as public route 
router.get('/:id', asyncHandler(async(req,res)=>{
    const todo = await Todo.findById(req.params.id)

    if(todo){

        res.json(todo)
    }else{
        res.status(404).json({message:"todo not found"})
    }
}))

export default router