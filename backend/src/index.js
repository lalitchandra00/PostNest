		import mongoose from 'mongoose';
		import dns from 'node:dns';
        	import dotenv from 'dotenv';
                dotenv.config({
                    path:'./env'
                })


		// Fix for Node.js DNS resolution issues on some Windows machines
		dns.setServers(['8.8.8.8', '8.8.4.4']);
		
		
		import {DB_NAME} from './constants';
		import express from 'express';
		const app = express()
		async function connectDB(){
		    try{
		        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
		        app.on("error", (error) => {
		            console.log("ERROR : ", error);
		            throw error
		        })
		        app.listen(process.env.PORT, () => {
		            console.log(`App is listening on port ${process.env.PORT}`);
		        })
		    }
		    catch (error){
		        console.error("Error:", error);
		        throw err;
		    }
		}
		connectDB()
