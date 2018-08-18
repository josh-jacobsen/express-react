const express = require('express')
const app = express()
var router = express.Router();
const generatePassword = require('password-generator');

const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res) => res.send("Hello there"))


app.get('/api/passwords', (req, res) => {

    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
    )

    res.json(passwords)
});

app.get('*', (req, res) => {
    res.send("Welcome to the homepage");
  });


app.listen(4000, () => console.log('Example app listening on port 4000!'))


