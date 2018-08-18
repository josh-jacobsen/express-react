const express = require('express')
const app = express()
var router = express.Router();
const generatePassword = require('password-generator');
var router = express.Router();
const path = require('path');

const csvFilePath='./test.csv';
const csv=require('csvtojson')

const succeed = true;
const a = [];
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // console.log(jsonObj);
     
})

// console.log("a is :", a)
// const jsonArray = await csv().fromFile(csvFilePath);


// const readFromFile = function (callback) {
//     csv().fromFile(csvFilePath)
//     .subscribe((json)=>{
//         const myPromise = new Promise((resolve,reject)=>{
//             if (succeed){
//                 var phone = {color: "red"}
//                 // console.log("success")
//                 // console.log(json)
//                 callback(json)
//                 resolve(json)
//             } else {
//                 var reason = new Error('fucked that one up');
//                 reject(reason)
//             }
//         myPromise.then(function(result) {
//             console.log("reusle it: ", result); // "Stuff worked!"
//           }, function(err) {
//             console.log(err); // Error: "It broke"
//           });
//             // Async operation on the json
//             // dont forget to call resolve and reject
//         })
//     })
// }

// const howToResolve = (payload) => {
//     return {payload}
// }

// readFromFile(console.log);
// // var a = readFromFile(console.log);

// console.log("a is: ", a)

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

router.get('/api/meshblock', (req, res) => {
    const meshblock = "this is a meshblock"; 
    
    res.json(meshblock)
});


router.get('*', (req, res) => {
    res.send("Welcome to the homepage");
  });


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


