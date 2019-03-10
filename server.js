//install express server
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

//serve only the static files from the dist directory

app.use(express.static(__dirname + '/dist/angular-heroku-app'))

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/angular-heroku-app/index.hmtl'))

})

//start the app by listening on the default Heroku port
app.listen((process.env.PORT || 8080), function(){
    if(process.env.DYNO) {
        console.log('running on heroku')
        fs.openSync('/tmp/app-initialized','w')
    }
    console.log('node app is runnning on port: can we get the port');
});