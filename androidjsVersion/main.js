var express = require("express");
var cors = require('cors');
var expressApp = express();
var bodyParser = require('body-parser')
var http = require('http');
var https = require('https');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
var ip = require("ip");
const fetch = require('node-fetch');
var serverIpAddress = "0.0.0.0"
const port = 3737;


//copy point 1 --> the following part comes from the custom index files (main.js and cashserver.js )
//##################################################################################
//##################################################################################
// config the express app to support json and cors
expressApp.use(bodyParser.json({
    limit: '50mb'
}));

expressApp.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));

expressApp.use(bodyParser.json());
expressApp.use(cors());

expressApp.use(bodyParser.json({ limit: '10mb' }));
expressApp.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// http init
const httpServer = http.createServer(expressApp);
httpServer.listen(port, () => {
    console.log('HTTP Server running on port 3737');
});

// serve the angular app on android
expressApp.use(express.static(__dirname + '/gimig-app/'));

expressApp.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname + '/gimig-app/' })
});

expressApp.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: __dirname + '/gimig-app/' });
});
//##################################################################################
//##################################################################################
// androidjs specific
expressApp.post('/getUserDataPath', function (req, res, next) {
    fs.writeFile(req.androidPath + '/text.txt', 'bar', (err) => { if (err) throw err; });
    res.json({ pathStatus: "allGood" })
})

var back = require('androidjs').back;
back.on('save', function (filepath) {
    back.send('datastore', 'loaded');
})
