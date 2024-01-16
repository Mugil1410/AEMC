const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');
const cors = require('cors');
const connectDatabase= require('./config/connectDatabase');
dotenv.config({path :path.join(__dirname, 'config','config.env')});
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

const products= require('./routes/product');
const order=require('./routes/order');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',order);

app.listen(process.env.port,()=>{
    console.log("Server is running on port",process.env.port,"on",process.env.node_env)
});