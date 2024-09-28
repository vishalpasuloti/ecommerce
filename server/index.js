const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const RegisterModel =require('./modals/register/register')
const app = express()
app.use(cors())
app.use(express.json())
const upload = multer();
app.use(upload.none());

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register',(req,res)=>{
    RegisterModel.create(req.body)
    .then(register =>res.json(register))
    .catch(err =>console.log(err))
})



app.listen(4000,()=>{
    console.log('server is running on 4000')
})