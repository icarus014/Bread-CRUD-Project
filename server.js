const express = require('express')
require('dotenv').config()
const PORT  = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get('/', (req, res) => {
    res.send("<h1>an awesome app about breads</h1>")
})

// Breads
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)

app.listen(PORT, () => {
    console.log("i am alive")
})