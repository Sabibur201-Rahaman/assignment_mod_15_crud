const bodyParser = require('body-parser');
const express=require('express');
const router=require('./src/route/Api.js');
const app=new express();    //express Instance
const path=require('path')

//security Middleware library import

const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors')

//Database library import

const mongoose=require('mongoose')
app.use(express.static('client/build'))

//sequrity Middleware Implement

app.use(helmet())
app.use(cors())
app.use(xss())
app.use(hpp())
app.use(mongoSanitize())

//body parser
app.use(bodyParser.json())

//rateLimiter
const limiter=rateLimit({windowMs:15*60*100,max:3000})

//Mongo DB Database connection
let URI='mongodb+srv://ostad1234:ostad1234@cluster0.e7dqzg0.mongodb.net/crud?retryWrites=true&w=majority';
try {
     mongoose.connect(URI, { useNewUrlParser: true });
    console.log('connection success');
} catch (error) {
    console.log(error);
}

//Managing Front End Routing 
// app.use(express.static('client/build'))
// app.get('*',function(req,res){
//     req.sendFile(path.resolve('--dirname','client','build','index.html'))
// })

// Managing Back End Api Routing 

app.use("/api/v1",router)

module.exports=app;