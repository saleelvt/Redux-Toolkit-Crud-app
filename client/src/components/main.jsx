import React, { useState } from "react";
import UserLogin from "./user/userLogin";
import UserRegister from "./user/userRegister";
import AdminLogin from "./admin/adminLogin";


function Main() {

    const [data,setData]=useState(null)
  let component = null;

  if(data==='userLogin'){
    component=<UserLogin />
}
if(data==='userRegister'){
    
    component=<UserRegister />
  }



  return (
    <div>
      
  {component}
      <AdminLogin />

      <button onClick={()=>{setData('userLogin')}} className='class=" px-6 py-2 mt-10 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700
       hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"'>
        userLogin
      </button>
      <button onClick={()=>{setData('userRegister')}}  className='class=" px-6 ml-4 py-2 mt-10 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700
       hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"'>
        UserRegister
      </button>
    </div>
  );
}

export default Main;
