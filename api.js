const express = require('express');
const app = express();
const data = require('./api.json');

app.get('/',(req,res)=>{
    res.send(data)
})


app.listen(5000)

module.exports = app;