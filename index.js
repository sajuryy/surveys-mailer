const express = require('express');
const passport = require('passport');
const app = express();
const  port = process.env.PORT || 8080



app.listen(port, console.log(`server running on ${port}`));