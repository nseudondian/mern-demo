const express = require('express')
const routers = express.Router()
const datatable = require('../models/Routemodels')



routers.post('/signup', (request, response)=>{
    const dbtable = new datatable({
        username : request.body.username,
        email : request.body. email,
        password : request.body.password
    })
    dbtable.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.send(error)
    })
})
module.exports = routers