'use strict'

var express = require('express'),
    app = express();

app
    .get('/user/:id-:name-:age', (req, res) => {
        res.end (`
        <h1>
             ${req.params.name}, Welcome to Express your id is ${req.params.id}, you have a ${req.params.age} years :)
        </h1>
        `)    
    })
    .get('/search', (req, res) => {
        res.end (`
        <h1>
             Welcome to express, the results for your search are: ${req.query.s}
        </h1>
        `)    
    })

    .listen(5000)
    console.log("Escuchando port");