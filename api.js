const express = require("express")
const api = require('./api.json')
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/0',cors(),(req,res)=>{
    res.json(api[0]);
})
app.get('/api/1',cors(),(req,res)=>{
    res.json(api[1]);
})
app.get('/api/2',cors(),(req,res)=>{
    res.json(api[2]);
})
app.get('/api/3',cors(),(req,res)=>{
    res.json(api[3]);
})
app.get('/api/4',cors(),(req,res)=>{
    res.json(api[4]);
})
app.get('/api/5',cors(),(req,res)=>{
    res.json(api[5]);
})
app.get('/api/6',cors(),(req,res)=>{
    res.json(api[6]);
})
app.get('/api/7',cors(),(req,res)=>{
    res.json(api[7]);
})
app.get('/api/8',cors(),(req,res)=>{
    res.json(api[8]);
})
app.get('/api/9',cors(),(req,res)=>{
    res.json(api[9]);
})

console.log(PORT)

app.listen(PORT)