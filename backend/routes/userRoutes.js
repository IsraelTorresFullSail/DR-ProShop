import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.post('/', registerUser)

export default router
