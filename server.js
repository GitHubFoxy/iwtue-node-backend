import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './routes/posts.js'
import bodyParser  from 'body-parser'
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect(process.env.DB_CONNECTION)
