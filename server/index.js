const express = require('express');
const db = require('./utils/db')
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// Health check for server
app.get('/run', (req,res) => {
    return res.json("Server is running properly.");
})







// Listening server in port 5000
app.listen(5000, (req, res) => {
    console.log("Starting server now!");
})