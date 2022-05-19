import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import todoRoutes from './routes/todoRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is running')
})

app.use('/api/todos', todoRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
