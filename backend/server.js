const express = require('express');
const app = express();
const port = process.env.port || 5000
const neo4j = require('neo4j-driver');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const boltUrl = "neo4j+s://d7f68664.databases.neo4j.io";
const password = 'IoGs126CsTNJPig5X3SuTYfIK0wCwkQC6bcflMK07aE';
app.get("/", (req, res) => res.send(""));
app.listen(port, () => { });

const driver = new neo4j.driver(
    boltUrl,
    neo4j.auth.basic(
        'neo4j',
        password
    ),
);

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

app.get("/getAllEmployees", (req, res) => {
    var session = driver.session();
    ret = [];

    new Promise((resolve, reject) => {
        session.run(`MATCH (n) return n`
        ).then(function (result) {
            result.records.forEach(element => {
                console.log(element._fields[0])
                ret.push(element._fields[0])
            });
            res.json(JSON.stringify(ret));
        })
            .catch(function (err) {
                console.log(err);
            });
    })
})