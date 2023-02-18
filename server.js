const express = require('express')
require('dotenv').config()

const PORT  = process.env.PORT


const app = express()
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