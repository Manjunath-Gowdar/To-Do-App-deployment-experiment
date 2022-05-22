import express from 'express'
import {
  getTodoByUserId,
  getTodos,
  updateTodo,
  createTodo
} from '../controllers/todoController.js'
import  {protect} from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').get(getTodos)
router.route('/:id').get(getTodoByUserId)
router.route('/edit/:todoId').put(updateTodo)
router.route('/:userId/:todoText').get( createTodo)

export default router
