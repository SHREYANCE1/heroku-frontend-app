//install express server
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

//serve only the static files from the dist directory

app.use(express.static(__dirname + '/dist/angular-heroku-app'))

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/landingPage/index.html'))

})

//start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);