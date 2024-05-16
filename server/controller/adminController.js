const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");

const adminData = {
  name: "saleel",
  password: 321,
};

module.exports = {
  getAdminLogin: async (req, res) => {
    try {
      console.log("data equped ");

      const { name, password } = req.body;

      if (adminData.name == name && adminData.password == password) {
        console.log("admin loged success fully ");
        return res.json({success: true})
      }
    } catch (error) {}
  },

  getAdminDelete:async (req,res)=>{

    try {
      console.log("data equped ");
      return res.json({success: true})
    } catch (error) {
      
    }
  }



};
