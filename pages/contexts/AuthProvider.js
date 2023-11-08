import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const saveUser = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const clearUser = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token') // Also clear the token from localStorage
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
