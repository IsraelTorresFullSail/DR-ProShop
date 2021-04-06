import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', protect, admin, createProduct)
router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)

export default router
