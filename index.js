const express = require('express');

const app = express();
const  port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
});

app.listen(port, console.log(`server running on ${port}`));