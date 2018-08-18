const express = require('express')
const app = express()
var router = express.Router();
const generatePassword = require('password-generator');
var router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(router);

const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => res.send("Hello there"))


router.all('/', function (req, res, next) {  
    console.log('Someone made a request!');
    next();
  });


router.get('/api/passwords', (req, res) => {

    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
    )

    res.json(passwords)
});

router.get('/api/menuItems', (req, res) => {
    const menuItems = [Math.random(), Math.random(), "item1", "item2", "item3"];

    res.json(menuItems)
});


router.get('*', (req, res) => {
    res.send("Welcome to the homepage");
  });


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


