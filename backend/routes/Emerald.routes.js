const express = require('express')
const app = express()
const emeraldRoute = express.Router()

// Emerald model
const Emerald = require('../models/Emerald')

// Add Emerald
emeraldRoute.route('/add').post((req, res) => {
  Emerald.create(req.body, (error, data) => {
    if (error) {
      res.status(404).json({
        error
      })
    } else {
      res.status(201).json({
        data
      })
    }
  })
})

// Get all emerald
emeraldRoute.route('/list').get((req, res) => {
  Emerald.find((error, data) => {
    if (error) {
      res.status(404).json({
        error
      })
    } else {
      res.status(200).json({
        data
      })
    }
  })
})

// Get single emerald
emeraldRoute.route('/:id').get((req, res) => {
  Emerald.findById(req.params.id, (error, data) => {
    if (error) {
      res.status(404).json({
        error
      })
    } else {
      res.status(200).json({
        data
      })
    }
  })
})

// Update emerald
emeraldRoute.route('/edit/:id').put((req, res, next) => {
  Emerald.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        res.status(404).json({
          error
        })
      } else {
        res.status(200).json({
          data
        })
      }
    }
  )
})

// Delete emerald
emeraldRoute.route('/delete/:id').delete((req, res, next) => {
  Emerald.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      res.status(404).json({
        error
      })
    } else {
      res.status(200).json({
        data
      })
    }
  })
})

module.exports = emeraldRoute
