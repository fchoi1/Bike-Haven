const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});