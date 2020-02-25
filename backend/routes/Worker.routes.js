const express = require('express')
const app = express()
const workerRoute = express.Router()

// Worker model
const Worker = require('../models/Worker')

// Add Worker
workerRoute.route('/add').post((req, res) => {
  Worker.create(req.body, (error, data) => {
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

// Get all worker
workerRoute.route('/list').get((req, res) => {
  Worker.find((error, data) => {
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

// Get single worker
workerRoute.route('/:id').get((req, res) => {
  Worker.findById(req.params.id, (error, data) => {
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

// Update worker
workerRoute.route('/edit/:id').put((req, res) => {
  Worker.findByIdAndUpdate(
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

// Delete worker
workerRoute.route('/delete/:id').delete((req, res) => {
  Worker.findByIdAndRemove(req.params.id, (error, data) => {
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

module.exports = workerRoute
