import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@infrastructure/context/AuthProvider'
import ProtectedRoute from '@infrastructure/utils/protectedroute'
import Login from '@presentation/pages/login/Login'
import Home from '@presentation/pages/home/Home'
import Dashboard from '@presentation/pages/dashboard/Dashboard'
import Showcase from '@presentation/pages/showcase/Showcase'
import Sold from '@presentation/pages/sold/Sold'
import Stock from '@presentation/pages/stock/Stock'
import Notfound from '@presentation/pages/notfound/Notfound'


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route element={ <ProtectedRoute/> }>
          <Route path='/' element={ <Home/> }>
            <Route index element={ <Dashboard/> } />
            <Route path='/showcase' element={ <Showcase/> } />
            <Route path='/sold' element={ <Sold/> } />
            <Route path='/stock' element={ <Stock/> } />
          </Route>
        </Route>
        <Route path='*' element={ <Notfound/> } />
      </Routes>
    </AuthProvider>
  )
}
