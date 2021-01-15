const express = require("express");
const dotenv = require("dotenv").config({path: './config.env'});
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const requestIp = require('request-ip');
const path = require('path');


const app = express();

// to get ip address of request
app.use(requestIp.mw());

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/dist/client/index.html')));

// connecting to db
const connectDB = async(MONGO_URI) => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });


        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jqp6p.mongodb.net/albums?retryWrites=true&w=majority`
connectDB(MONGO_URI);

// routes
app.use('/api/albums', require('./routes/albums'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/dist/client/index.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, `/client/dist/client/${req.url}`));
});



// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("The app is listening on port " + listener.address().port);
});



module.exports = app;
