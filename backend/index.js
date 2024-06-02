import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './routes/userRouter.js'
import contactRouter from './routes/contactRouter.js'
const app=express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
app.use('/api/v1/',router);
app.use('/api/v1/',contactRouter);

const HOST=process.env.PORT||3000
const URL=process.env.MONGODB_URL

mongoose.connect(URL).then(()=>{
    console.log("DB conected successfully !!!");

    app.listen(HOST,()=>{
        console.log(`server is running on port :${HOST}`);
    })
}).catch((error)=>console.log(error));

