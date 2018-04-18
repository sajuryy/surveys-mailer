const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
require('./models/user');
require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

const port = process.env.PORT || 8080;


app.listen(port, console.log(`server running on ${port}`));



// https://safe-reef-63560.herokuapp.com/