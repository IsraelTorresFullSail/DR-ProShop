import express from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.post('/', protect, addOrderItems)
router.get('/', protect, admin, getOrders)
router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)

export default router
