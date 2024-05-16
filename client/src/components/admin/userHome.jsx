import React, { useEffect, useState } from "react";
import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.min.css';
function UserHome() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    axios
      .get("http://localhost:9999/users/")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error.response.data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div class="flex justify-center  items-center h-screen">
      <div class="bg-blue-300 w-1/3 p-6 rounded-lg shadow-lg">
        <button class="bg-blue-500 ml-64 text-white font-bold py-2 px-4 rounded mb-4">
          Add +
        </button>
        <table class="table-auto bg-gray-300 w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Age</th>
              <th class="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserHome;
