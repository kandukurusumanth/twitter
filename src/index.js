const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {server} = require('./config/indxex');
const api = require('./routers/index');
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/api',api)

app.listen(server.PORT,async ()=>{
    console.log(`we are listening to port : ${server.PORT}`);
    await mongoose.connect(server.MONGO_PORT)
    
    console.log('Mongo DB is connected');
   
   
})