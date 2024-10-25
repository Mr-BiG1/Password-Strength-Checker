require('dotenv').config();
const express = require('express');
const routes = express.Router();
const { getIndex, getAbout,checkPassword,getPasswordGenerator,hashPassword,gethashPassword} = require('../controllers/routerController');

// Setting Main route 
routes.get('/', getIndex);

// about page 

routes.get('/psc/about/', getAbout);


// post for the password checkup

routes.post('/password/checkup/',checkPassword);

routes.post('/password/hash/',gethashPassword);

routes.get('/password/hash/',hashPassword);


routes.get('/psc/generate/newpassword/',getPasswordGenerator);

module.exports = routes;