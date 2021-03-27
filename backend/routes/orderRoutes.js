import express from 'express'
import { addOrderItems, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.post('/', protect, addOrderItems)
router.get('/:id', protect, getOrderById)

export default router