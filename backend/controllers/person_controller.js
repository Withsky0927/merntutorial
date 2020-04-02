/*
?    Filename: user_controller.js
?   
?    Type: Controller

?    Description:
?      this will file will handle all http request and response from assigned route/url has  
?      been hit by the user.

?    Job/Function:
?       1. handle incoming/outgoing http 
*/

const Person = require('../models/Person'); //? import Person Model from ./models folder
const asyncWrap = require('../middlewares/async_middleware'); //? import async_middleware from middlewares folder
const Errors = require('../utils/Errors'); //? import Custom subclass for Error Class for specific error

//? this controller will create new user using post request
const createPerson = asyncWrap(async (request, response, next) => {
  //? get all data from request body
  const { name, email, phone, address } = request.body;

  //? create instance of Person Class/Prototype
  const newPerson = new Person({
    name,
    email,
    phone,
    address,
  });

  const result = await newPerson.save();

  if (!result) {
    return next(new Errors(401, 'Person cannot be created'));
  } else {
    //? if new person has been added to database throw response to client with new added person
    return response
      .status(201)
      .json({ status: true, data_added: result, msg: 'New Person Added!' });
  }
});

//? this controller will get all user using get request
const getPersons = asyncWrap(async (request, response, next) => {
  //? query to database using the Person model to get all Person Collection data
  const persons = await Person.find();

  //? if query doest
  if (persons.length === 0) {
    return next(new Errors(404, 'Cannot Get All Person'));
  } else {
    //? if all Person has been get successfully response to client with all persons data
    return response.status(200).json({
      success: true,
      status: 'ok',
      data: persons,
    });
  }
});

//? this controller will get all user using get request
const getPerson = asyncWrap(async (request, response, next) => {
  //? query to database using the Person model to get all Person Collection data

  const personID = request.params.id;

  const person = await Person.findById({ _id: personID });

  //? if query doest
  if (!person) {
    return next(new Errors(404, 'Cannot Get Person'));
  } else {
    //? if all Person has been get successfully response to client with all persons data
    return response.status(200).json({
      success: true,
      status: 'ok',
      data: person,
    });
  }
});

//? this controller will update a particular user using put request
const updatePerson = asyncWrap(async (request, response, next) => {
  const personID = request.params.id;

  //? query to database using the Person model
  const updatedPerson = await Person.findByIdAndUpdate(
    { _id: personID },
    request.body,
    {
      runValidators: true,
      new: true,
    },
  );
  if (!updatedPerson) {
    return next(
      new Errors(
        401,
        "person does not exist it's because url does not match or invalid id",
      ),
    );
  } else {
    //? if the user has been updated successfully send json data to user with updated data
    return response.status(201).json({
      success: true,
      status: `Person with id ${deletePerson} has been updated`,
      id: personID,
      updated_data: updatePerson,
    });
  }
});

//? this controller will delete a particular person using delete request
const deletePerson = asyncWrap(async (request, response, next) => {
  const personID = request.params.id;

  //? delete specific person from
  const deletedPerson = await Person.findByIdAndDelete({ _id: personID });

  console.log(deletePerson);

  if (!deletedPerson) {
    //? if person cannot be delete
    return next(
      new Errors(
        401,
        "Person cannot be deleted it's because it does not exist or id",
      ),
    );
  } else {
    //? if the user has been delete successfully send json data to user with delete data
    return response.status(201).json({
      success: true,
      status: `Person with id ${personID} has been deleted`,
      id: personID,
      deleted_data: deletePerson,
    });
  }
});

//? export all crud controllers
module.exports = {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
