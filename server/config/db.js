const mongoose=require('mongoos')

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('mongodb connected ');
})
.catch((error)=>{
    console.log('not connected ',error);
})























// const mongoose = require("mongoose")
// require('dotenv').config()
// mongoose.connect(process.env.MONGO_URL).then(()=>{
//     console.log('database  connected');
// })
// .catch((error)=>{
// console.log(error);
// })