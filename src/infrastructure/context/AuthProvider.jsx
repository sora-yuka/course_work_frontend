import React, { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import api from '@infrastructure/api/client'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@infrastructure/constants'


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [isAuthorized, setIsAuthorized] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      await auth().catch(() => setIsAuthorized(false))
    }
    checkAuth()
  }, [])

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)
    try {
      const response = await api.post('api/v1/users/refresh/', {
        refresh: refreshToken
      })

      if (response.status === 200) {
        console.log('Token refreshed successful')
        localStorage.setItem(ACCESS_TOKEN, response.data.access)
        setIsAuthorized(true)
      } else {
        setIsAuthorized(false)
      }
    } catch (error) {
      console.log(error)
      setIsAuthorized(false)
    }
  }

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (!token) {
      console.log('Access token missing, attempting refresh...')
      await refreshToken()
      return
    }
    const decoded = jwtDecode(token)
    const tokenExpiration = decoded.exp
    const now = Date.now() / 1000
    if (tokenExpiration < now) {
      console.log('Token expired, trying to refresh token.')
      await refreshToken()
    } else {
      console.log('Token found and all fine.')
      setIsAuthorized(true)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
