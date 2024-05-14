
const express=require("express")
const app = express()
const path =require('path')
const userRouter = require('./router/userRouter')
const adminRouter = require('./router/adminRouter')
const db=require('./config/db')




app.listen(9999,()=>{
    console.log('localhost connected ');

})