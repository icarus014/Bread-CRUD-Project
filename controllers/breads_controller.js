const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')
const seedData = require('./seedData')
const Baker = require('../models/baker')



// Index:
breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean()
  const foundBreads = await Bread.find().limit(5).lean()
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
})



// NEW
breads.get('/new', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      res.render('new', {
        bakers: foundBakers
      })
    })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
          .then(foundBread => {
            res.render('edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
          })
    })
})




// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy()
        console.log(bakedBy)
          res.render('show', {
              bread: foundBread
          })
      })
      .catch(err=> {
        res.send('404')
      })
})



// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  console.log("Updating Bread: " + req.params.arrayIndex)
  console.log(req.body)
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new:true} )
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    }) 
})


// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// CREATE MANY(SEED)
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(seedData)
     .then(createdBreads => {
      res.redirect('/breads')
     })
})



// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      console.log(deletedBread);
      res.status(303).redirect('/breads')
    })
})




module.exports = breads