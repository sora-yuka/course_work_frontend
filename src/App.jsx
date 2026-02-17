import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './infrastructure/context/AuthProvider'
import ProtectedRoute from './infrastructure/utils/ProtectedRoute'


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path='/login' element={ </> } /> */}
        <Route element={ <ProtectedRoute/> }>
          <Route path='/' />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
