import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Password from '../input/password'

import { register } from '../../Services'
import { BounceLoader } from 'react-spinners'


const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [codeError, setCodeError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [responseRegister, setResponseRegister] = useState('')

    const navigate = useNavigate()

    const back = () => {
        navigate('/')
    }

    const registerCallback = (data) => {
        setResponseRegister(data)
        props.setLoading(false)
    }

    const onRegisterClick = () => {
        setUserNameError('')
        setPasswordError('')

        if ('' === userName) {
            setUserNameError('Please enter an username')
            return
        }
      
        if ('' === code) {
          setCodeError('Please enter a code')
          return
        }

        if ('' === email) {
            setEmailError('Please enter an email')
            return
        }
      
        if ('' === password) {
          setPasswordError('Please enter a password')
          return
        }
        props.setLoading(true)
        var payload = "username=" + userName + "&password=" + password + "&code=" + code + "&email=" + email;
        console.log(register(payload, registerCallback))
    }

    if(props.loading) {
        return (
            <div className='spinner-center'>
                <BounceLoader loading={props.loading} size={50} color="#123abc" speedMultiplier={1.5} />
            </div>
        )
    }

    return (
        <>
            <div className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <div>Registration</div>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <label htmlFor='username'>Username</label>
                    <input
                    id={"username"}
                    value={userName}
                    placeholder="Enter username here"
                    onChange={(ev) => setUserName(ev.target.value)}
                    className={'inputBox'}
                    />
                    <label className="errorLabel">{userNameError}</label>
                </div>
                <div className={'inputContainer'}>
                    <label htmlFor='code'>Code</label>
                    <input
                    id={"code"}
                    value={code}
                    placeholder="Enter user code here"
                    onChange={(ev) => setCode(ev.target.value)}
                    className={'inputBox'}
                    />
                    <label className="errorLabel">{codeError}</label>
                </div>
                <div className={'inputContainer'}>
                    <label htmlFor='email'>email</label>
                    <input
                    id={"email"}
                    value={email}
                    placeholder="Enter email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <Password 
                    password={password} 
                    setPassword={setPassword}
                    passwordError={passwordError}
                    placeholder={"Enter password"} />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={back} value={'Back'} />
                    <input className={'inputButton'} type="button" onClick={onRegisterClick} value={'Register'} />
                </div>
            </div>
            {responseRegister && <div className={'mainContainer'}>
                    <div className={'titleContainer'}>
                        <div>{responseRegister}</div>
                    </div>
                </div>}
        </>
    )
}

export default Register