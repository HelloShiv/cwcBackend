import connectDB from './db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js';
import { TLSSocket } from 'tls'

const tlsSocket = new TLSSocket();
tlsSocket.setMaxListeners(50);

dotenv.config({
    path: './env'
})

connectDB()
.then(()=> {
    app.on("error" , (error)=> {
        console.error("App encounterd an error");
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`)
    });
})
.catch((err)=>{
    console.log("MongoDB connection error!!!")
})





/*
import express from 'express';
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERR: " , error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`);
        })
    }catch(error){
        console.error(`ERROR: ${error}`);
        throw error;
    }
})()
*/