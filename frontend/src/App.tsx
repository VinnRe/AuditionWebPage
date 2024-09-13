import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Activities from './pages/Activities'
import Pricing from './pages/Pricing'
import AccountSettings from './pages/AccountSettings'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          
          <Route 
            path='/home'
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />

          <Route 
            path='/activities'
            element={
              <>
                <NavBar />
                <Activities />
              </>
            }
          />

          <Route 
            path='/pricing'
            element={
              <>
                <NavBar />
                <Pricing />
              </>
            }
          />

          <Route 
            path='/account-settings'
            element={
              <>
                <NavBar />
                <AccountSettings />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
