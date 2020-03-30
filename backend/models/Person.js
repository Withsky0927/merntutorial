/*
?    Filename: Person.js
?    Type: Model
?    Description:
?       This type of file is required to schema of Person document
?       
?
?    Job/Function:
?       1. create the structure of Person document and its field data type
*/

const mongoose = require('mongoose');

//? create document schema structure
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add new name'],
    max: 40,
    min: 5,
  },
  email: {
    type: String,
    required: [true, 'Please add a new email'],
    max: 150,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add valid Email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please add a new phone number'],
    max: 20,
  },
  address: {
    type: String,
    required: [true, 'Please a new Address'],
    min: 10,
    max: 500,
  },
});

//? export the model for controller/middleware used
module.exports = mongoose.model('Person', PersonSchema);
