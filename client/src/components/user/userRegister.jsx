import React from "react";

function UserRegister() {
  return (
    <div className="">
      <h1 className="h1">USER REGISTER</h1>
      <div className="flex justify-center mt-12   ">
        <div className="register bordered shadow-lg">
          {/* <h1>userLogin</h1> */}

          <div className="input flex justify-center mb-24  ">
            <form action="">
              <input
                class="p-2 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your User name"
              />

              <input
                class="p-2 mt-4 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your Email"
              />
              <input
                className="p-2 mt-4 w-64 bg-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-transparent mb-2 mt-2"
                type="text"
                placeholder="Enter your Password"
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
