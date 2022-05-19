import express from 'express'
import { getTodoById, getTodos } from '../controllers/todoController.js'

const router = express.Router()

router.route('/').get(getTodos)
router.route('/:id').get(getTodoById)

export default router
