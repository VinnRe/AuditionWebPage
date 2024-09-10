import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'

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
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
