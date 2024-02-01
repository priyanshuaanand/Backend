// require('dotenv').config({path: '../env'})

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express";
const app = express()
import dotenv from 'dotenv'
import connectDB from "./db/conn.js"


dotenv.config({
    path: '../env'

})

connectDB()

















/*
( async() => {
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error" , (error) => {
    console.log("ERROR;",error)
    throw error
   })
   app.listen(process.env.PORT , () => {
     console.log(`your app is listning on port ${process.env.PORT}`)
   }
   )
  } catch (error) {
    console.log("ERROR;",error)
    throw error
  }
}
)()*/