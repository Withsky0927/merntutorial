# MERN Tutorial

## Description

The goal of this application is to teach you how MERN stack worked, i will guide you how api using node.js and javascript Framework in our case React.js, so you will know how to use this for your application.</br>

## Required Dependecies

1. Backend dependencies</br>
   A. express - as http server</br>
   B. mongoose - for mongodb database</br>
   C. morgan - for logging http routes</br>
   D. dotenv - for global environment variables</br>
   E. Socket.io Server - for websocket programming</br>
   D. jsonwebtoken - for authetication package</br>
   F. bcryptjs - for hashing/encrypting sensitive information</br>
   G. moment.js - for date/time library</br>
   H. helmet - for settingup basic security enhancement</br>
   I. cors - for enabling ajax request</br>
   J. express-validator/@hapi/joi - for validation of incoming data from client</br>
   K. slugify - for string manipulation</br>
   L. uuid - for generating random uuid string</br>

2. React.js/Frontend dependencies</br>
   A. axios - for ajax calls to apis </br>
   B. Socket.io Client - for connecting to websocket in backend/api</br>
   C. node-sass - for enabling scss for fun styling</br>

## Installation instruction

1. open git bash and run this command in your prepared directory.</br>
   command: git clone https://github.com/Withsky0927/merntutorial.git</br>
2. and then open another git bash window</br>
3. run this command to run mongodb server</br>
   command:mongod</br>
4. go to the first git bash window and go to clone directory using cd command and from there run code . command
5. go to backend directory using cd backend and press enter</br>
6. run this command to install neccesary dependencies</br>
   command: npm install && npm install -D</br>
7. and then run npm run dev to start api server</br>

## Main Directory Structure

1. **_Backend_** - This folder will be our api for proccessing CRUD, it also contains required package like Express.js, mongoose, and other neccesary backend/api development package goes in here.</br>

### Backend folder subfolder structure

1. **_config_** - this folder holds all specific configuration javascript files for this web application ex:database connection.</br>
2. **_controllers_** - this folder holds all controller javasript files for all routes of this web applcation
3. **_middlewares_** - this folder holds all required functionality for example validation functions, error handler, asynchronous wrapper.</br>
4. **_models_** - this folder holds all models javascript files for mongoose and mongodb used.</br>
5. **_node_modules_** - this folder holds all downloaded package using npm or yarn</br>
6. **_routes_** - this folder holds all routes configuration.</br>
7. **_utils_** - this folder holds all customized tools to ease the development.</br>

### backend main files

1. **_server.js_** - this javascript file will start the express server.</br>
2. **_.env_** - this file holds all sensitive and global variables for entire application use. </br>
3. **_package.json_** - this json file holds all scripts, install packages and other project informations</br>
4. **_package-lock.json_** - this json file holds all package sub dependencies and its integrity.

# I WILL ADD MORE DOCUMENTATION BELOW...
