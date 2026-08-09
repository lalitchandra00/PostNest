import mongoose from 'mongoose'
import {PostNest_DB} from"./constants"

import express from'express';
const app = express();

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        app.on("error", (error) =>{
            throw error
        
        })
        app.listen(process.env.PORT, () => { console.log('App is listening on port' + process.env.PORT)});
    }
    catch(error){
        consle.log("error : " + error);
    }
    
   
}
connectDB();