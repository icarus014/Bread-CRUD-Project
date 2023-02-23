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


// CREATE
breads.post('/', (req, res) => {
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  
// NEW
breads.get('/new',(req,res)=> {
    res.render('new')
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  })

  
  

module.exports = breads
