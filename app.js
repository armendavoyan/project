const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.listen(3003);
mongoose.createConnection('localhost:27017/events');
