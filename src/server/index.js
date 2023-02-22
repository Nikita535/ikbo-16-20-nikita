const express = require('express');
const sequelize = require('./db')
const router = require('./routes/index')
const models = require('./models')

const PORT = 5000;
const app = express();


const start = async () =>{
   try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT,
        () => console.log(`----------------------hello from server on ${PORT} -----------------------`));
   } catch (error) {
    console.log(error);
   }
}

start();
