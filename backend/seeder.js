import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import todos from './data/todos.js'
import User from './models/userModel.js'
import Todo from './models/todoModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Todo.deleteMany()

    const createdUsers = await User.insertMany(users)

    const mainUser = createdUsers[0]._id

    const todosWithUserId = todos.map((todo) => {
      return { ...todo, user: mainUser }
    })

    await Todo.insertMany(todosWithUserId)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Todo.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
