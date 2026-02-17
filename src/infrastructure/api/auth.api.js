import api from './client'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@infrastructure/constants'


export const loginRequest = async (email, password) => {
  const response = await api.post('api/v1/users/login/', { email, password })

  localStorage.clear()
  localStorage.setItem(ACCESS_TOKEN, response.data.access)
  localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
  return response
}

export const logoutRequest = async () => {
  localStorage.clear()
  return
}