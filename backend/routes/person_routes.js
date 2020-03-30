/*
?    Filename: server.js
?   
?    Type: Route file
?    Description:
?         this file will register a specific route for certain url with endpoint
?
?    Job/Function:
?       1. Connect to database
?       2. Established all routes/ url
*/

const express = require('express');
const router = express.Router();

//? import user controller in here
const personController = require('../controllers/person_controller');

//? use all controller that will handle request user route

//? use getUsers and createUser for get and post method
router
  .route('/')
  .get(personController.getPersons)
  .post(personController.createPerson);

//? use updateUser and createUser for put and post method
router
  .route('/:id')
  .put(personController.updatePerson)
  .delete(personController.deletePerson);

//? export express router for http:://localhost:500/user url registration
module.exports = router;
