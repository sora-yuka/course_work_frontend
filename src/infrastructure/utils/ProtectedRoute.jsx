import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@infrastructure/context/AuthProvider'


export default function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuth()

  if (isAuthorized === null) {
    return <div>Loading...</div>
  }

  if (!isAuthorized) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}
