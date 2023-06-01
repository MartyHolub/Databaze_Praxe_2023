require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', () => console.error(error))
db.once('open', () => console.log('Pripojeno k databazi'))

app.use(express.json())

const productRouter = require('./routes/product')
app.use('/product', productRouter)


app.listen(3000, () => console.log('Server spuštěn'))