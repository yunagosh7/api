const express = require("express")
const api = require('./api.json')
const PORT = process.env.PORT || 3000;

const app = express()

app.get('/',(req,res)=>{
    res.send(api)
})

console.log(PORT)

app.listen(PORT)