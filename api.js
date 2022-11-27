import express from 'express'
import { PORT } from './config.js'
import api from './api.json'

const app = express()

app.get('/',(req,res)=>{
    res.send(api)
})


app.listen(PORT)
