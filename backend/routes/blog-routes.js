
import express from 'express'
import { addBlog, getAllBlogs } from '../controllers/blog-controller'


const blogRouter = express.Router()


blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)


export default blogRouter

