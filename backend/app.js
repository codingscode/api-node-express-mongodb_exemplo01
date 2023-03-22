
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes'


const app = express()

app.use('/api/user', router)  //http://localhost:5000/api/user/logon   

mongoose.connect('mongodb+srv://admin:aladin18@cluster0.zgjyqfq.mongodb.net/Blog?retryWrites=true&w=majority')
      .then(() => app.listen(5000))
      .then( () => console.log('conectado ao banco de dados e listening o localhost 5000') )
      .catch((err) => console.log(err))  




