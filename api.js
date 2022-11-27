const express = require("express")
const api = require('./api.json')
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.json(api);
})

console.log(PORT)

app.listen(PORT)