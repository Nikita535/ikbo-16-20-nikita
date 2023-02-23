const express = require('express')
const sequelize = require('./db')
const models = require('./models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')

const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router);

//проверка
app.get('/',(req,res)=>{
    res.status(200).json({message:'norm'})
})


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
