import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login/login'

import './App.css'
import { useState } from 'react'
import Menu from './components/menu/menu'
import Register from './components/register/register'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        {loggedIn ? <Menu /> : null }
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App