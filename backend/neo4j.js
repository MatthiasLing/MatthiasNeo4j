const express = require('express')
const app = express()
const port = 5000
const neo4j = require('neo4j-driver');
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get("/", (req,res) => res.send("hello world"))
app.listen(port, ()=>console.log(`app listening on ${port}`))

const driver = new neo4j.driver(
    'bolt://localhost',
    neo4j.auth.basic(
        'neo4j',
        'guest'
    ),
);

app.post("/createEmployee", (req,res) => {

    var session = driver.session();

    new Promise((resolve, reject) => {
        session.run(`CREATE (n:Person{name: '${req.body.params.name}', emp_id: ${req.body.params.id}}) return n`
        ).then(function (result) {
            
            console.log("New employee created!")
            res.send('111');
        })
            .catch(function (err) {
                console.log(err)
            });
    })

    // session.close()
})

app.get("/getAllEmployees", (req,res) => {
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
                console.log(err)
            });
    }) 
    // session.close()
})


