import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'

const port  = process.env.PORT || 9001

const app = express()

// setup static folder
const __filename = fileURLToPath(import.meta.url)
// console.log(__filename)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')))

// logger middleware
app.use(logger)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Routes
app.use('/api/posts',posts)
app.use(notFound)

app.use(errorHandler)


app.listen(port,() =>{
    console.log(`Server started running on port ${port}..`)
})
