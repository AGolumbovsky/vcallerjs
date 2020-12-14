#!/usr/bin/env node

'use strict'
const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/username', (req, res) => {
    
    console.log("GET request username"); 
    res.send("dummy username");
	
});

app.delete('/api/delete', function(req, res) {
    
    console.log("DELETE request");
    
});

var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();


// const PORT = process.env.PORT || 8787;
// app.listen(PORT, () => {
//     console.log("vcaller REST API is running on port : " + PORT + "\n" + "timestamp " + timestamp);
// });

const httpsPort = 8787;
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(httpsPort, () => {
    console.log("vcaller https listening on port:", httpsPort);
  })