import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@infrastructure/context/AuthProvider'
import ProtectedRoute from '@infrastructure/utils/ProtectedRoute'
import Login from '@pages/Login/Login'
import Home from '@pages/Home/Home'


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route element={ <ProtectedRoute/> }>
          <Route path='/' element={ <Home/> } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
