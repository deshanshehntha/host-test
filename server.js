//importing express framework and creating an instance
const express = require('express');
const app = express();


const router = express.Router();
const assignments = require('assignment.model');

//importing bodyParser and cors
const bodyParser = require('body-parser');
const cors = require('cors');

//importing mongooes to work with mongodb
const mongoose = require('mongoose');
//making router instance from express

const PORT = process.env.PORT || 4030;

//add middleware cors and bodyParser to express
app.use(cors());
app.use(bodyParser.json());

//crate connection
mongoose.connect('mongodb://root:root@cluster0-shard-00-00-pbjoq.mongodb.net:27017,cluster0-shard-00-01-pbjoq.mongodb.net:27017,cluster0-shard-00-02-pbjoq.mongodb.net:27017/Course_Web?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority\n',{useNewUrlParser:true});
//get a instance of a connection

const connection =mongoose.connection;

//check DB connection
connection.once('open',function(){
    console.log("MongoDB databse connection established successfully");
});




//start the server using express
app.listen(PORT,function(){
    console.log("Server is running on PORT: "+PORT);
});


router.get("/all", function (req,res) {

    console.log(req);
    assignments.find()
        .populate("")
        .exec()
        .then(assignments=>{
            res.status(200).json(assignments)
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});
