const express = require('express')
const app = express()
const userRouter = require('./route/user')

app.use(express.json()) 

app.use(userRouter)

app.listen(5000, () => console.log('Server is running port 5000.....'))