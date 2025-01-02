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
            <GamesHome loading={props.loading} setLoading={props.setLoading} userName={props.userName} />
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