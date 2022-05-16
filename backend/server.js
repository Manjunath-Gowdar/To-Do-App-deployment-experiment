import express from 'express'
import dotenv from 'dotenv'
import todos from './data/todos.js'

dotenv.config()
const app=express()

app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/api/todos',(req,res)=>{
    res.json(todos)
})

app.get('/api/todos/:id', (req,res)=>{
    const todo = todos.find((t)=> t._id === req.params.id)
    res.json(todo)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console. log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))