const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./src/modules/user/user.route')

const app = express()
app.use(express.urlencoded({ extend: true }))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('user mangement service is online ...')
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser : true })
.then(console.log('connecting'))
.catch(err => console.log(`error: ${err}`))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`user mangement service is online ... [PORT: ${PORT}]`)
})

module.exports = app