const express = require('express');

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
const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
    console.log("vcaller REST API is running on port : " + PORT + "\n" + "timestamp " + timestamp);
});