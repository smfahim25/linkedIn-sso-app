// Dashboard.js
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        margin: "30px",
        padding: "0px 20px 0px 20px",
        textAlign: "center",
      }}
    >
      <h2>Profile Info</h2>
      {user ? (
        <>
          <img src={user.picture} alt="user.name" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default Dashboard;
