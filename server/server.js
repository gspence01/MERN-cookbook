//DEPENDENCIES
const express = require('express');
const cors = require('cors');
const app = express();

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

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`ayyyeee broski ${process.env.PORT} the electric bugaloo`)
});