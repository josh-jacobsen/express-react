const express = require('express')
const app = express()

const path = require('path');


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => res.send("Hello there"))

app.get('/food', (req, res) => res.json(
    [
        {
            id: 1,
            itemName: "French Fries",
            price: 3.50
        }, {
            id: 2,
            itemName: "Hamburger",
            price: 6.50
        }
    ]
));

app.listen(4000, () => console.log('Example app listening on port 4000!'))


