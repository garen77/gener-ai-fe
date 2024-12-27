import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import './App.css'
import { useState } from 'react'
import Menu from './components/menu/menu'
import PopupBalloon from './components/popaballoon/PopupBalloon'
import GamesSignupForm from './components/GamesSignupForm/GamesSignupForm'

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
          <Route path="/register" element={<GamesSignupForm loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/balloon" element={<PopupBalloon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App