const express = require('express');
const app = express();

const neo4j = require('neo4j-driver');
const bodyParser = require('body-parser');
const path = require('path')

const port = process.env.port || 3000

const boltUrl = "neo4j+s://d7f68664.databases.neo4j.io";
const password = 'IoGs126CsTNJPig5X3SuTYfIK0wCwkQC6bcflMK07aE';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));


app.get("/", (req, res) => res.send("Express running"));
app.listen(port, () => { });

const driver = new neo4j.driver(
    boltUrl,
    neo4j.auth.basic(
        'neo4j',
        password
    ),
);

// API endpoint to create a new employee with given name and id
app.post("/createEmployee", (req, res) => {

    var session = driver.session();

    new Promise((resolve, reject) => {
        session.run(`CREATE (n:Person{name: '${req.body.params.name}', emp_id: ${req.body.params.id}}) return n`
        ).then(function (result) {
            console.log("New employee created!")
            res.send('200');
        })
            .catch(function (err) {
                console.log(err);
            });
    })
})

// Endpoint to get all employees with IDs
app.get("/getAllEmployees", (req, res) => {
    var session = driver.session();
    ret = [];

    new Promise((resolve, reject) => {
        session.run(`MATCH (n) return n`).then(
            function (result) {
                result.records.forEach(element => {
                    console.log(element._fields[0])
                    ret.push(element._fields[0])
                });
                // Turns employee list into json format
                res.json(JSON.stringify(ret));
            })
            .catch(function (err) {
                console.log(err);
            });
    })
})
