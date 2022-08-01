import express from 'express'
import routes from './routes/routes'
import wrongRoute from './middlewares/wrongRoute'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)
app.use(wrongRoute)//Middleware: checks not implemented route.


app.listen(port, () => { 
    console.log(`Server listening on port: ${port}`)
})
