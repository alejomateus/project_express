'use strict'

var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

app
    .use (cookieParser())
    .use ( cookieSession ({secret:"secret"}))
    .get('/', (req, res) => {
        req.session.visitas || (req.session.visitas =0)
        let n = req.session.visitas++
        res.end(`<h1>Hola desde express, me has visitado ${n} veces</h1>`)
    })

    .listen(5002)