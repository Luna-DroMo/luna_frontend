// Import necessary dependencies from React and Next.js
import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"

// Create a context for authentication-related data and functions
const AuthContext = createContext()



// Define an authentication provider component to wrap around your application
export const AuthProvider = ({ children }) => {
  // State to track user information
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // State to track authentication status
  //const [isLoading, setIsLoading] = useState(true);

  // Access Next.js router for navigation
  const router = useRouter()

  // Effect to check for authentication status on component mount
  useEffect(() => {
    // Check for stored user data and token in localStorage
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, [router])

  // Function to save user data and set authentication status to true
  const saveUser = (userData, token) => {

    setUser(userData)
    setIsAuthenticated(true)
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);

  }

  // Function to clear user data and set authentication status to false
  const clearUser = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Remove user data and token from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  // Create an object with authentication-related data and functions
  const authContextValue = {
    user,
    isAuthenticated,
    saveUser,
    clearUser,
    isLoading
  }

  // Provide the authentication context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to easily access the authentication context
export const useAuth = () => useContext(AuthContext)
