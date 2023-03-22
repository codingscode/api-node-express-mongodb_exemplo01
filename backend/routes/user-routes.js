
import express, { application } from 'express'
import { getAllUser, signup } from '../controllers/user-controller'


const router = express.Router()


router.get('/', getAllUser)
router.post('/signup', signup)

export default router

