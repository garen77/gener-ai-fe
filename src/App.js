import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import './App.css'
import { useState } from 'react'
import Menu from './components/menu/menu'
import PopupBalloon from './components/popaballoon/PopupBalloon'
import GameSignupForm from './components/GameSignupForm/GameSignupForm'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
/*<Route path="/register" element={<Register loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />*/
  return (
    <div className="App">
      <BrowserRouter>
        {loggedIn ? <Menu /> : null }
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          <Route path="/register" element={<GameSignupForm loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/balloon" element={<PopupBalloon />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App