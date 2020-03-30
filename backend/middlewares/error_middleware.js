/*
?    Filename: error_middleware.js
?   
?    Type: Middleware

?    Description:
?      this file will catch all types of Errors message for this application  
?      so this file is not neccesary but can help minimize code redundancy

?    Job/Function:
?       1. handle all errors that will occur during this application 
*/

const Errors = require('../utils/Errors');

module.exports.errorHandler = (err, request, response, next) => {
  let errors = { ...err };
  let error;

  //* check for error name
  switch (errors.name) {
    //? check for invalid id error
    case 'CastError':
      error = new Errors(400, `invalid user id`);
      break;

    //? check for mongoose validation error
    case 'ValidatorError':
      const validationErrors = Object.values(err.errors).map(
        (value) => value.message,
      );
      error = new Errors(400, validationErrors);
      console.log(validationErrors);
      break;

    default:
      error = new Errors(500, errors.message);
      break;
  }
  //? log error object
  console.log(errors);

  //? send response error status code with error message to client
  return response.status(error.statusCode || 500).json({
    status: 'failed',
    errors: error.message,
  });
};
