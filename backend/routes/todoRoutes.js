import express from 'express'
import { getTodoByUserId, getTodos } from '../controllers/todoController.js'

const router = express.Router()

router.route('/').get(getTodos)
router.route('/:id').get(getTodoByUserId)

export default router
