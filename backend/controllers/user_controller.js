/*
?    Filename: user_controller.js

?    Type: Controller
?    Description:
?        
?      
?    Job/Function:
?       
*/

//? this controller will create new user using post request
const createUser = async (request, response, next) => {
  //?
  try {
  } catch (error) {
    return response.status(400).json({ status: false, msg: error });
  }
};

//? this controller will get all user using get request
const getUsers = async (request, response, next) => {
  try {
  } catch (error) {
    return response.status(404).json({ status: false, msg: error });
  }
};

//? this controller will update a particular user using put request
const updateUser = async (request, response, next) => {
  try {
  } catch (error) {
    return response.status(400).json({ status: false, msg: error });
  }
};

//? this controller will delete a particular user using delete request
const deleteUser = async (request, response, next) => {
  try {
  } catch (error) {
    //!
    return response.status(400).json({ status: false, msg: error });
  }
};

//? export all crud controllers
module.exports = { getUsers, createUser, updateUser, deleteUser };
