const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
app.use(morgan('dev'))


app.use('/users', require('./routes/users'))


app.listen(3000)
console.log('server on port 3000')

module.exports = app