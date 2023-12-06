import React, { createContext, useContext, useState, useEffect } from "react"
import {useRouter} from "next/router"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      console.log("here")
      // This is causing an infinite loop
      //router.push('/'); // Redirect to landing page if not authenticated
    }
  }, [router]);

  const saveUser = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const clearUser = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("token") // Also clear the token from localStorage

  }

  const authContextValue = {
    user,
    isAuthenticated,
    saveUser,
    clearUser
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
