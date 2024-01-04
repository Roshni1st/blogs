const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const passport = require('passport')
const { port } = require('./configurations/config')
const { errorHandle } = require('./middlewares/errorHandle')
const routes = require('./routes/routes')
const database = require('./connection')
database.connect()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',routes)
app.use(passport.initialize())
//app.use(errorHandle)
app.listen(port,()=>{
    console.log(`Server is listening on port:${port}`);
})
module.exports = app