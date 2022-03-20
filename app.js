'use strict'

//cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express (http)
var app = express();

//cargar ficheros rutas


// middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//cors

//añadir prefijos a ruta

//ruta de prueba.
app.get('/prueba', function(req, res) {

        return res.status(200).send(`
        <ul>
            <li>Node.js</li>
            <li>Angular</li>           
            <li>MongoDB</li>
            <li>React</li>
            <li>Vue</li>
        </ul>
        <div>
            <h1>vamos a usar como arquitectura MVC</h1>
            `);
});

//exportar modulo
module.exports = app;
