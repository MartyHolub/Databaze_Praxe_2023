const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//Name
//Is_Active
//Quantity
//Description
//Price
//Permalink
//Images
//Categories
//Related Products

//Getting all
router.get('/', (req,res) => {
      res.send('TEST')
})
//Get one
router.get('/:id', (req,res) => {
      res.send(req.params.id)
})
//Create one
router.post('/', (req,res) => {
      req.params
})
//Update one
router.patch('/', (req,res) => {

})
//Delete one
router.delete('/:id', (req,res) => {

})
module.exports = router