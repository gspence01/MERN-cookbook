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
app.get('/', (req, res) => {
    res.redirect('/recipes')
});

//CONTROLLERS
const recipeController = require('./controllers/recipe_controllers')
app.use('/recipes', recipeController)

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT} the electric bugaloo`)
});