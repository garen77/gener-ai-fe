import React from 'react'
import { Link } from 'react-router-dom'
import GamesLoginForm from '../GamesLoginForm/GamesLoginForm'

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
            <>
              <div className="mainContainer">
                <div className={'titleContainer'}>
                  <div>Welcome!</div>
                </div>
                <div className={'buttonContainer mt40'}>
                  <div>Your email address is {email}</div>
                  <input
                    className={'inputButton'}
                    type="button"
                    onClick={onLogout}
                    value={'Log out'}
                  />
                </div>
              </div>
            </>
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