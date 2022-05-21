import express from 'express'
import {
  getTodoByUserId,
  getTodos,
  updateTodo,
} from '../controllers/todoController.js'
const router = express.Router()

router.route('/').get(getTodos)
router.route('/:id').get(getTodoByUserId)
router.route('/edit/:todoId').put(updateTodo)

export default router
