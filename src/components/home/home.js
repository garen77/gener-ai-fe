import React from 'react'
import { Link } from 'react-router-dom'
import GamesLoginForm from '../GamesLoginForm/GamesLoginForm'
import GamesHome from '../GamesHome/GamesHome'
import GameContainer from '../GameContainer/GameContainer'

const Home = (props) => {
  const { loggedIn, email } = props

  return (
    <>
      {
        loggedIn ? 
          (
            <>
              <GameContainer loggedIn={loggedIn} setLoggedIn={props.setLoggedIn}>
                <GamesHome loading={props.loading} setLoading={props.setLoading} userName={props.userName} />
              </GameContainer>
            </>
          )
            :
        (
          <>
            <GamesLoginForm loading={props.loading} setLoading={props.setLoading} setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} />
            {!props.loading && <div>
              or <Link to='/register'>Register</Link>
            </div>}
          </>
        )
      }
    </>
  )
}

export default Home