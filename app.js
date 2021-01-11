const express = require("express");
const dotenv = require("dotenv").config({path: './config.env'});


const app = express();



// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("The app is listening on port " + listener.address().port);
});


module.exports = app;



// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
