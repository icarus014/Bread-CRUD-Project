const express = require ('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

breads.get('/', (req, res)=> {
    console.log(breads)
    // res.send('this is the index at /breads')
    res.render('index',{
        "breads": Bread, 
        "title": "Bread Index Page"
    });
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads
