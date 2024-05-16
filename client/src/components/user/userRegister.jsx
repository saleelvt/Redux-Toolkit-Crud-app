import axios from "axios";
import React from "react";

function UserRegister() {



  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:9999/create-user/", { username, email, password })
      .then((response) => {
        console.log("User created:", response.data);
      })
      
      .catch((error) => {
        console.error("Error creating user:", error.response.data);
      });
  };




  return (
    <div className="py-10">
      <h1 className="h1">USER REGISTER</h1>
      <div className="flex justify-center mt-2   ">
        <div className="register bordered shadow-lg">
          {/* <h1>userLogin</h1> */}

          <div className="input flex justify-center mb-24  ">
            <form onSubmit={handleSubmit}>
              <input
                class="p-2 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your User name"
                name="username"
              />

              <input
                class="p-2 mt-4 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your Email"
                name="email"
              />
              <input
                className="p-2 mt-4 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-transparent mb-2 mt-2"
                type="password"
                placeholder="Enter your Password"
                name="password"
              />

              <button
                className=" px-6 py-2 mt-10 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500
               to-blue-700 hover:from-blue-600 hover:to-blue-800
               hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
