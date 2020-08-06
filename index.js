const express = require('express')
const app = express()
const routerimport = require('./API/routes')
const dotenv = require('dotenv')
const mongoose = require ('mongoose')


dotenv.config()
mongoose.connect(process.env.DATA_ACCESS, { useUnifiedTopology: true }, ()=>console.log("Hurray Database is up!"))

app.use(express.json())
app.use('/api/routes', routerimport)

app.listen(3000, ()=>console.log("ANother try at this!"))