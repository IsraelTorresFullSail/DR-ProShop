import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'

const router = express.Router()

router.post('/', registerUser)
router.get('/', protect, admin, getUsers)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)
router.delete('/:id', protect, admin, deleteUser)

export default router
