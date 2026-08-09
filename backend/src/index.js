import mongoose  from  'mongoose'
import {db_name} from './constants.js'
import express from 'express'

import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const app = express();

async function connect_DB(){
    try{
        await mongoose.connect(process.env.MONGO_DB)
        app.listen(process.env.PORT, ()=>{console.log("App listening on port" + process.env.PORT)})
        
    }
    catch(error){
        console.log("Error" + error)
    }

}

connect_DB()