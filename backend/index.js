import express from "express";
import dotenv from 'dotenv'
import connect from "./Database/db.js";
import dotnateBookRoute from './Router/donateBookRoute.js'
import cors from 'cors'
dotenv.config()
connect()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',dotnateBookRoute)

const PORT = process.env.PORT || "3001";

app.listen(PORT,()=>{
    console.log("Run on port number :",PORT)
})
