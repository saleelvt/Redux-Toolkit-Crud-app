const mongoose = require("mongoose");
const { type } = require("os");

const adminSchema = new mongoose.Schema({

    adminName:{
        type: String,
        required: true,
        unique: true
      },
      password:{
        type:String,
        require:true,
        unique:true,
      }
      
});
