// REQUIREMENTS
const express = require('express');
const mongoose = require('mongoose');
const mustache = require('mustache-express');

const router = require('./routes/index');
const helpers = require('./helpers');/*
const errorHandler = require('./handlers/errorHandler');
*/

// GENERAL CONFIG
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    res.locals.h = helpers;
    next();
});
app.use('/', router);

app.engine('mst', mustache(__dirname+'/views/partials'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;