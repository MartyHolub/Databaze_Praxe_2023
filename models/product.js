const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      is_Active: {
            type: Boolean,
            required: true,
            default: 0
      },
      quantity: {
            type: Number,
            required: true
      },
      description: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: true
      },
      permalink: {
            type: String,
            required: true
      },
      images: {
            type: String,
            required: true
      },
      categories: {
            type: String,
            required: true
      },
      related_Products: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model('Product', productSchema)