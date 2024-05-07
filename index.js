const express = require('express');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle GET requests to the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Handle POST requests to the "/login" endpoint
app.post('/login', (req, res) => {
    // Handle login logic here
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});