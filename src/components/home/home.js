import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../login/login'

const Home = (props) => {
  const { loggedIn, email } = props

  const onLogout = () => {
    if(loggedIn) {
        localStorage.removeItem('user')
        props.setLoggedIn(false)
    }
  }

  return (
    <div className="mainContainer">
      {loggedIn && <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>}
      <div className={'buttonContainer mt40'}>
        {
          loggedIn ? 
            (
              <>
                <div>Your email address is {email}</div>
                <input
                  className={'inputButton'}
                  type="button"
                  onClick={onLogout}
                  value={'Log out'}
                />
              </>
            )
              :
          (
            <>
              <Login loading={props.loading} setLoading={props.setLoading} setLoggedIn={props.setLoggedIn} setEmail={props.setEmail} />
              {!props.loading && <div>
                or <Link to='/register'>Register</Link>
              </div>}
            </>
          )
        }
      </div>
    </div>
  )
}

export default Home