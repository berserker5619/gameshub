const express= require('express');
const app=express();
const path = require("path");
const api=require('./api');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors=require('cors');

app.set('port',(process.env.PORT || 8081));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));
app.use("/resources",express.static(__dirname + "/uploads"));

app.use('/api',api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.get("/", (requestAnimationFrame, res) =>{
    res.send(" Invalid Endpoing");
});

const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/productstandups',{useNewUrlParser:true});

const db=mongoose.connection;
db.on('error',console.error.bind
(console,'connection error'));
db.once('open',function(){
    console.log('Connected to MongoDB');

    app.listen(app.get('port'),function(){
        console.log('API Server Listening on port' + app.get('port') + '!');
    });
});