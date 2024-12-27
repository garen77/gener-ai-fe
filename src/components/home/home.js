import React from 'react'
import { Link } from 'react-router-dom'
import GamesLoginForm from '../GamesLoginForm/GamesLoginForm'
import GamesHome from '../GamesHome/GamesHome'

const Home = (props) => {
  const { loggedIn, email } = props

  const onLogout = () => {
    if(loggedIn) {
        localStorage.removeItem('user')
        props.setLoggedIn(false)
    }
  }

  return (
    <>
      {
        loggedIn ? 
          (
            <GamesHome />
          )
            :
        (
          <>
            <GamesLoginForm loading={props.loading} setLoading={props.setLoading} setLoggedIn={props.setLoggedIn} setEmail={props.setEmail} />
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