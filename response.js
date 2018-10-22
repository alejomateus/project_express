'use strict'

var express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Hola Mundo express</h1>')
    })
    .get('/express', (req, res) => {
        // res.send (`
        // <h1>
        //     I´ts time for express
        // </h1>
        // `)    
        res.redirect(301,'http://github.com/alejomateus')
    })
    .get('/json',(req,res)=>{
        res.json({
            name:"Alejandro",
            year:22,
            time: new Date()
        })
    })
    .get('/render',(req,res)=>{
        res.render(`${__dirname}/assets/index.html`)
    })

    .listen(5001)