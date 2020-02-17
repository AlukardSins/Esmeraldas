const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dataBaseConfig = require('./database/db')

// Connecting mongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(dataBaseConfig.db, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log('Database connected sucessfully ')
    },
    (error) => {
      console.log('Could not connected to database : ' + error)
    }
  )

// Set up express js port
const workerRoute = require('./routes/Worker.routes')
const emeraldRoute = require('./routes/Emerald.routes')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/Esmeraldas')))
app.use('/', express.static(path.join(__dirname, 'dist/Esmeraldas')))
app.use('/api/worker', workerRoute)
app.use('/api/emerald', emeraldRoute)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(res.status(404).send('Se chingo esta mierda'))
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
