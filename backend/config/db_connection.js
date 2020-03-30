/*
?    Filename: user_controller.js

?    Type: Database Connection Configuration

?    Description:
?       this file will create configuration for database connection


?    Job/Function:
?       1. Database Configuration that will use in server.js file
?       2. Check database Connection Status
?  
*/

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const databaseConnection = () => {
  dotenv.config();

  let connection = process.env.DEV_DB;

  //? this asynchronous function will be as connection interface to mongodb
  const createConnection = async () => {
    try {
      const connect = await mongoose.connect(connection, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });

      //? show connection status
      console.log(connect);
      console.log('connected to database');
    } catch (error) {
      console.log('cannot connect to database');
      console.log(error);
    }
  };

  //?
  createConnection();
};

//? exports this database conncetion configuration for server.js use
module.exports = databaseConnection();
