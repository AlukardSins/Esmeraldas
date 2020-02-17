const express = require('express')
const app = express()
const workerRoute = express.Router()

// Worker model
const Worker = require('../models/Worker')

// Add Worker
workerRoute.route('/worker/add').post((req, res, next) => {
  Worker.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(201).json({
        msg: data
      })
    }
  })
})

// Get all worker
workerRoute.route('/worker/list').get((req, res) => {
  Worker.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Get single worker
workerRoute.route('/worker/:id').get((req, res) => {
  Worker.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Update worker
workerRoute.route('/worker/edit/:id').put((req, res, next) => {
  Worker.findByIdAndUpdate(
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

// Delete worker
workerRoute.route('/worker/delete/:id').delete((req, res, next) => {
  Worker.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = workerRoute
