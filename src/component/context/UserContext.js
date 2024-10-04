// context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("accessToken");

    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const login = (userData, token) => {
    sessionStorage.setItem("accessToken", token); // Store access token
    setUser(userData);
    setAccessToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setUser(null);
    setAccessToken(null);
  };

  return (
    <UserContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
