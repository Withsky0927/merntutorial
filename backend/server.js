/*
?    Filename: server.js

?    Type:Express Server initializer

?    Description:
?        every node.js project required this file because this file
?        will start the node.js project settings and configuration.

?    Job/Function:
?       1. Connect to database
?       2. Established all routes/ url
?       3. start the http server
?       4. initiate global middlewares
*/
const express = require('express'); //* import express.js package
const dotenv = require('dotenv'); //* import dotenv package
const cors = require('cors'); //* import cors package
const morgan = require('morgan'); //* import morgan package
const helmet = require('helmet'); //* import helmet package
const DB = require('./config/db_connection'); //* import database connection on ./config folder
const errorMiddleware = require('./middlewares/error_middleware'); //* import global errorHandler Middleware for errors
//? get custom environment variable in here using dotenv package
dotenv.config();

//? get enviroment variables PORT for production / development
const PORT = process.env.PORT || process.env.DEV_PORT;

//? create express application by calling express class/prototype
const server = express();

//? initiate helmet xss protection global midddleware for created express application
server.use(helmet.xssFilter());

//? initiate helmet hidePoweredBy global middleware to hide server name to the user
server.use(helmet.hidePoweredBy());

//? initiate helmet noieOpen global middleware for ie security issue protection
server.use(helmet.ieNoOpen());

//? initiate helemet frameguard global middleware for frame vulnerability protection
server.use(helmet.frameguard());

//? initiate express body parser global middleware to handle http request body on controller and middleware
server.use(express.json());

//? set the format of request.body to json data
server.use(express.urlencoded({ extended: false }));

//? set cross request site origin to so we can freely use ajax working on frontend
server.use(cors());

//? connect to database
DB.databaseConnection();

//? initate custom error handler global middleware for handling errors
server.use(errorMiddleware);

//? set logger for http request/ response log for development environment
if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
}

//? set routes in here
server.use('/person', require('./routes/person_routes'));

//? start the node server at port 5000
server.listen(PORT, () =>
  console.log(`server started at ${process.env.NODE_ENV} at port ${PORT}`),
);

process.on('UnhandledRejection', (error) => {
  console.log(error);
  process.exit(0);
});
