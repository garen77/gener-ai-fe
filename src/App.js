import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login/login'

import './App.css'
import { useState } from 'react'
import Menu from './components/menu/menu'
import Register from './components/register/register'
import PopupBalloon from './components/popaballoon/PopupBalloon'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        {loggedIn ? <Menu /> : null }
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          <Route path="/login" element={<Login loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/balloon" element={<PopupBalloon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App