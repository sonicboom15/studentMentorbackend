const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(() =>{
    console.log("DB Connected BOI");
}).catch(err =>{
    console.log("Oi there is something wrong with your DB Connection, Fix it noob",err);
    process.exit();
})

app.get('/',(req,res) =>{
    res.json({"message":"All is well"});
})

require('./routes/student.routes.js')(app);
require('./routes/mentor.routes.js')(app);

app.listen(3000,()=>{
    console.log("Server is listening on some port boi!");
});