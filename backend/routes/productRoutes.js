import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)

export default router
