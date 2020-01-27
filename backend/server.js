// models
const express=require('express')
const mongoose =require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')

const todoRoute = require('./routes')

//connect database
mongoose.connect('mongodb://localhost/todo',{useNewUrlParser:true,useUnifiedTopology:true})

// create server
const app = express()

// configure the middleware
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/api/todos',todoRoute)

// run server
app.listen(5000,()=>console.log('Server is running on port 5000'))