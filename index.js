'use strict'

var express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Hola Mundo express</h1>')
    })

    .listen(5000)