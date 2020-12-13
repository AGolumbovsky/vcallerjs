  
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/public'));

let currentDate = new Date();
let timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("vcaller REST API is running, timestamp: " + PORT + "\n" + timestamp);
});