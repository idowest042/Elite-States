import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
import { connectCloudinary } from './config/cloudinary.js'
import mongoose from 'mongoose'
import houseRouter from "./routes/houseRoutes.js"
import { connectdb } from './config/db.js'
import userRouter from './routes/userRoute.js'
import cookieParser from 'cookie-parser'
connectdb()
connectCloudinary()
const app = express()
const port = process.env.PORT || 3000
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:5173', 
  'http://localhost:5174',
  'https://elite-admin-three.vercel.app'
],// or wherever your frontend is hosted
  credentials: true
}));

app.use(cookieParser())
app.use('/api/homes',houseRouter)
app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`);

});
