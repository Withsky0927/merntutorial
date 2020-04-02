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

module.exports = (error, request, response, next) => {
  let errors = { ...error };
  let errorValue;

  //* check for error name
  switch (errors.name) {
    //? check for invalid id error
    case 'CastError':
      errorValue = new Errors(400, `invalid user id`);
      break;

    //? check for mongoose validation error
    case 'ValidatorError':
      const validationErrors = Object.values(errors.errors).map(
        (value) => value.message,
      );
      errorValue = new Errors(400, validationErrors);
      console.log(validationErrors);
      break;

    default:
      errorValue = new Errors(500, `unknown error`);
      break;
  }

  //? send response error status code with error message to client
  return response.status(errors.statusCode || 500).json({
    status: false,
    errors: errorValue.message,
  });
};
