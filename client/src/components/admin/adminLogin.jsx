import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const navigate = useNavigate()
  const handleAdminData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:9999/admin/adminLogin/", { name, password })
      .then((response) => {
        console.log("User created:", response.data);
        navigate('/adminHome')
      })
      .catch((error) => {
        console.log("my error data is ", error.response.data);
      });
  };

  return (
    <div className="">
      <h1 className="h1">ADMIN LOGIN</h1>
      <div className="flex justify-center mt-12   ">
        <div className="userlogin bordered shadow-lg">
          {/* <h1>userLogin</h1> */}

          <div className="input flex justify-center mb-24 ">
            <form onSubmit={handleAdminData}>
              <input
                name="name"
                class="p-2 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter Admin Name"
              />

              <input
                name="password"
                class="p-2 mt-4 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your Password"
              />

              <button
                // type="submit"
                class=" px-6 py-2 mt-10 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
