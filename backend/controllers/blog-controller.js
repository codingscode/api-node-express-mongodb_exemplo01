
import Blog from '../model/Blog'


export const getAllBlogs = async (req, res, next) => {
   let blogs
   
   try {
      blogs = await Blog.find()
   }
   catch(err) {
      return console.log(err)
   }
   if (!blogs) {
      return res.status(404).json({message: 'Nenhum Blog Encontrado!'})
   }
   return res.status(200).json({blogs})
}




