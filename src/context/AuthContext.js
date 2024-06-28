import { createContext, useEffect, useState } from "react";

// Create the AuthContext with default values
export const AuthContext = createContext({
  currentUser: { user: true },
  login: () => {},
  logout: () => {},
});

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  // Define the state for currentUser, initializing it with the user data from localStorage if available
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Define the login function
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  // Define the logout function
  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  // Use an effect to sync the state with localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user" | { user: true });
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
