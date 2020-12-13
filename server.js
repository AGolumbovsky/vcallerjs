  
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8787;

app.use(express.static(__dirname + '/public'));

var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("vcaller REST API is running on port : " + PORT + "\n" + "timestamp " + timestamp);
});