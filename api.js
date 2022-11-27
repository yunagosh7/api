const express = require("express")
const api = require('./api.json')

const app = express()

app.get('/',(req,res)=>{
    res.send(api)
})

console.log(PORT)

app.listen(3000)