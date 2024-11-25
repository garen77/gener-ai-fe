import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../login/login'

const Home = (props) => {
  const { loggedIn, email } = props

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <Login setLoggedIn={props.setLoggedIn} setEmail={props.setEmail} />
        {
          loggedIn ? 
            <div>Your email address is {email}</div>
              :
          (<div>
            or <Link to='/register'>Register</Link>
          </div>)
        }
      </div>
    </div>
  )
}

export default Home