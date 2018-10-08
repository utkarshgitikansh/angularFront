const express = require('express');
path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/angularFront'));
// Start the app by listening on the default
// Heroku port

app.get('/*', (req,res)=>{

    res.sendFile(path.join(__dirname + '/dist/angularFront/index.html'));
});

app.listen(process.env.PORT || 8080)    