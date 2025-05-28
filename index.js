"use strict";

const express = require("express");
const app = express();



require('dotenv').config();
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000


const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

app.all('/', (req, res) => {
  res.send({
    error: false,
    message: 'Welcome to Blog API',
    documents: {
      swagger: '/documents/swagger',
      json: '/documents/json',
    },
    user: req.user,
  });
});




app.listen(PORT ,HOST, ()=> console.log(`http://${HOST}:${PORT}`))