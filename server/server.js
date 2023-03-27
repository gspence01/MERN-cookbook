//DEPENDENCIES
const express = require('express');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize')


//CONFIGURATION
require('dotenv').config();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROOT
app.get('/message', (req, res) => {
    res.json({message: "hello from server"})
});

//CONTROLLERS
const recipeController = require('./controllers/recipe_controllers')
app.use('/recipes', recipeController)

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`ayyyeee broski ${process.env.PORT} the electric bugaloo`)
});