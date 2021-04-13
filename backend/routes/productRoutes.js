import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', protect, admin, createProduct)
router.post('/:id/reviews', protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)

export default router
