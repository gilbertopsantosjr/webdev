const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like HTML
app.use(express.static('views'));

// Handle POST request
app.post('/submit', (request, res) => {
    const { userId, txtName, gender } = request.body;
    if(txtName === 'Gilberto'){
        return res.status(400).send('name is already exists');    
    }
    console.log(`User ID: ${userId}, gender: ${gender}`);
    // store the data in the database
    // send email
    // send SMS
    res.send(`Hello, ${txtName}! Thank you for submitting the form.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
