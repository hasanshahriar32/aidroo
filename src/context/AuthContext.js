"use client";
import axiosInstance from "@/lib/axios";
import { createContext, useEffect, useState } from "react";

// Create the AuthContext with default values
export const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = async () => {
    try {
      await axiosInstance.get("/api/auth/logout");
      localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
