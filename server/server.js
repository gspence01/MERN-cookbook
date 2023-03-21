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

//SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
//TESTING CONNECTION
try {
    sequelize.authenticate();
    console.log(`connected at ${process.env.PG_URI}`)
} catch(err){
    console.log('UH OH BABES YOU DID AN OOPSIE:', err)
}

//ROOT
app.get('/message', (req, res) => {
    res.json({message: "hello from server"})
});

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`ayyyeee broski ${process.env.PORT} the electric bugaloo`)
});