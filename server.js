const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require ('morgan');
require('dotenv').config();
require('./config/database')


const app = express();

// some middleware
app.use(logger('dev'));
app.use(express.json());


// config both favicon and static middleware + serve from build folder
app.use(favicon(path.join(__dirname, 'build', 'favicon')));
app.use(express.static(path.join(__dirname, 'build')));


// routes
app.get('/*', (req,res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// listening


const port = process.env.PORT || 4000;

app.listen(port,() => {
  console.log(`Express app running on  ${port}`)
});