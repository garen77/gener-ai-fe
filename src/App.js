import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import './App.css'
import { useState } from 'react'
import PopupBalloon from './components/popaballoon/PopupBalloon'
import GamesSignupForm from './components/GamesSignupForm/GamesSignupForm'
import RockPaperScissorsLizardSpock from './components/rockpaperscistors/rpsls'
import GameContainer from './components/GameContainer/GameContainer'
import Snake from './components/snake/Snake'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} userName={userName} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserName={setUserName} />}
          />
          <Route path="/register" element={<GamesSignupForm loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
          <Route path="/popaballoon" element={
            <GameContainer loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <PopupBalloon />
            </GameContainer>
          } />
          <Route path="/rpsls" element={
            <GameContainer loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <RockPaperScissorsLizardSpock />
            </GameContainer>
          } />
          <Route path="/snake" element={
            <GameContainer loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <Snake />
            </GameContainer>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App