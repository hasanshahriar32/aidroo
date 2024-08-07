"use client";
import apiService from "@/lib/apiService";

import { createContext, useEffect, useState } from "react";

// Create the AuthContext with default values
export const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  // Define the state for currentUser
  const [currentUser, setCurrentUser] = useState(null);

  // Define the logout function
  const logout = async () => {
    await apiService.addData("/api/auth/logout");
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  // Use an effect to sync the state with localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser === undefined) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
