const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotenv = require('dotenv');


// ti load the .env 
dotenv.config();

const PORT = process.env.PORT || 3000; // set the port to 3000 or the port in the .env file

const app = express();

app.use(expressLayout);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setting up the router 
app.use('', require('./server/routes/route'));


// setting up  the listner
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});