const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
//const fs = require('fs');


app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/app/employees", require('./routes/employes'));

module.exports = app;