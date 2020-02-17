const express = require('express')
const app = express()
const emeraldRoute = express.Router()

// Emerald model
const Emerald = require('../models/Emerald')

// Add Emerald
emeraldRoute.route('/emerald/add').post((req, res, next) => {
  Emerald.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(201).json({
        msg: data
      })
    }
  })
})

// Get all emerald
emeraldRoute.route('/emerald/list').get((req, res) => {
  Emerald.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Get single emerald
emeraldRoute.route('/emerald/:id').get((req, res) => {
  Emerald.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Update emerald
emeraldRoute.route('/emerald/edit/:id').put((req, res, next) => {
  Emerald.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data
        })
      }
    }
  )
})

// Delete emerald
emeraldRoute.route('/emerald/delete/:id').delete((req, res, next) => {
  Emerald.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = emeraldRoute
