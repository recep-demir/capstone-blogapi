"use strict";

const express = require("express");
const app = express();



require('dotenv').config();
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000


const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();






app.listen(PORT ,HOST, ()=> console.log(`http://${HOST}:${PORT}`))