# MERN Tutorial

## Description

The goal of this application is to teach you how MERN stack worked, i will guide you how api using node.js and javascript Framework in our case React.js, so you will know how to use this for your application.</br>

## Required Dependecies

1. Backend dependencies</br>
   A. <b>express</b> - as http server</br>
   B. <b>mongoose</b> - for mongodb database</br>
   C. <b>morgan</b> - for logging http routes</br>
   D. <b>dotenv</b> - for global environment variables</br>
   E. <b>Socket.io Server</b> - for websocket programming</br>
   D. <b>jsonwebtoken</b> - for authetication package</br>
   F. <b>bcryptjs</b> - for hashing/encrypting sensitive information</br>
   G. <b>moment.js</b> - for date/time library</br>
   H. <b>helmet</b> - for settingup basic security enhancement</br>
   I. <b>cors</b> - for enabling ajax request</br>
   J. <b>express-validator/@hapi/joi</b> - for validation of incoming data from client</br>
   K. <b>slugify</b> - for string manipulation</br>
   L. <b>uuid</b> - for generating random uuid string</br>

2. React.js/Frontend dependencies</br>
   A. <b>axios</b> - for ajax calls to apis </br>
   B. <b>Socket.io Client</b> - for connecting to websocket in backend/api</br>
   C. <b>node-sass</b> - for enabling scss for fun styling</br>

## Installation instruction

1. open git bash and run this command in your prepared directory.</br>
   command: <code>git clone https://github.com/Withsky0927/merntutorial.git</code></br>
2. and then open another git bash window</br>
3. run this command to run mongodb server</br>
   command:<code>mongod</code></br>
4. go to the first git bash window and go to clone directory using <code>cd</code> command and from there run <code>code .</code> command
5. go to backend directory using <code>cd backend</code> and press enter</br>
6. run this command to install neccesary dependencies</br>
   command: <code>npm install && npm install -D</code></br>
7. and then run npm run dev to start api server</br>

## Main Directory Structure

1. **_Backend_** - This folder will be our api for proccessing CRUD, it also contains required package like Express.js, mongoose, and other neccesary backend/api development package goes in here.</br>

### Backend folder subfolder structure

1. <b>config</b> - this folder holds all specific configuration javascript files for this web application ex:database connection.</br>
2. <b>controllers</b> - this folder holds all controller javasript files for all routes of this web applcation
3. <b>middlewares</b> - this folder holds all required functionality for example validation functions, error handler, asynchronous wrapper.</br>
4. <b>models</b> - this folder holds all models javascript files for mongoose and mongodb used.</br>
5. <b>node_modules</b> - this folder holds all downloaded package using npm or yarn</br>
6. <b>routes</b> - this folder holds all routes configuration.</br>
7. <b>utils</b> - this folder holds all customized tools to ease the development.</br>

### backend main files

1. <b>server.js</b> - this javascript file will start the express server.</br>
2. <b>.env</b> - this file holds all sensitive and global variables for entire application use. </br>
3. <b>package.json</b> - this json file holds all scripts, install packages and other project informations</br>
4. <b>package-lock.json</b> - this json file holds all package sub dependencies and its integrity.

# I WILL ADD MORE DOCUMENTATION BELOW...
