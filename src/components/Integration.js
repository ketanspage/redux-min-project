import React, { useState } from "react";
import axios from "axios";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setUserData(null);
    }
  };

  return (
    <div>
      <br/>
      <div className="space-x-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 py-2 px-3 outline-none transition-colors duration-200 ease-in-out"
        />
        <button onClick={fetchUserProfile}                     
        className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Fetch Profile</button>
      </div>
      {userData && (
        <div>
          <h3>User Profile:</h3>
          <div>
            <img src={userData.avatar_url} alt="User Avatar" width="100" />  
            <p>
              <strong>Username:</strong> {userData.login}
            </p>
            <p>
              <strong>Name:</strong> {userData.name || "Not provided"}
            </p>
            <p>
              <strong>Followers:</strong> {userData.followers}
            </p>
            <p>
              <strong>Following:</strong> {userData.following}
            </p>
            <p>
              <strong>Public Repos:</strong> {userData.public_repos}
            </p>
            <p>
              <strong>Location:</strong> {userData.location || "Not provided"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
